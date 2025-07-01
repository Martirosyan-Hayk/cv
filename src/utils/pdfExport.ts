
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const waitForImages = (element: HTMLElement): Promise<void> => {
  const images = element.querySelectorAll('img');
  const promises = Array.from(images).map(img => {
    if (img.complete) return Promise.resolve();
    return new Promise(resolve => {
      img.onload = resolve;
      img.onerror = resolve;
    });
  });
  return Promise.all(promises).then(() => {});
};

const waitForStyles = (): Promise<void> => {
  return new Promise(resolve => {
    // Wait for all stylesheets to load
    const stylesheets = Array.from(document.styleSheets);
    const promises = stylesheets.map(sheet => {
      try {
        // Try to access cssRules to check if stylesheet is loaded
        sheet.cssRules;
        return Promise.resolve();
      } catch (e) {
        return new Promise(resolveSheet => {
          const link = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .find(l => (l as HTMLLinkElement).sheet === sheet) as HTMLLinkElement;
          if (link) {
            link.onload = () => resolveSheet(undefined);
            link.onerror = () => resolveSheet(undefined);
          } else {
            resolveSheet(undefined);
          }
        });
      }
    });
    
    Promise.all(promises).then(() => {
      // Additional delay to ensure styles are fully applied
      setTimeout(resolve, 500);
    });
  });
};

export const exportToPDF = async () => {
  const element = document.getElementById('cv-container');
  if (!element) {
    console.error('CV container not found');
    return;
  }

  try {
    // Wait for all images and styles to load
    await waitForImages(element);
    await waitForStyles();
    
    // Create canvas from the CV container
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null, // Use transparent background to preserve gradients
      foreignObjectRendering: true,
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });

    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Create PDF with proper dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
    }

    // Save the PDF
    pdf.save('Hayk_Martirosyan_CV.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
