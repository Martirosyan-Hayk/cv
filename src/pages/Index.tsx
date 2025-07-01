
import CVHeader from '../components/CVHeader';
import CVSidebar from '../components/CVSidebar';
import CVMainContent from '../components/CVMainContent';
import FloatingElements from '../components/FloatingElements';
import ExportButton from '../components/ExportButton';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      <ExportButton />
      
      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div id="cv-container" className="glass-card rounded-3xl shadow-magical overflow-hidden animate-fade-in-up">
            <CVHeader />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <CVSidebar />
              <CVMainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
