
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { exportToPDF } from '@/utils/pdfExport';

const ExportButton = () => {
  const handleExport = async () => {
    await exportToPDF();
  };

  return (
    <Button 
      onClick={handleExport}
      className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      size="lg"
    >
      <Download className="mr-2 h-4 w-4" />
      Export PDF
    </Button>
  );
};

export default ExportButton;
