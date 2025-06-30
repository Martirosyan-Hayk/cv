
import CVHeader from '../components/CVHeader';
import CVSidebar from '../components/CVSidebar';
import CVMainContent from '../components/CVMainContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-elegant overflow-hidden animate-fade-in">
          <CVHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <CVSidebar />
            <CVMainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
