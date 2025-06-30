
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 floating-animation delay-100"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-20 floating-animation delay-300 rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 floating-animation delay-500"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-lg opacity-20 floating-animation delay-200 rotate-12"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 floating-animation delay-400"></div>
      <div className="absolute top-3/4 right-5 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg opacity-20 floating-animation delay-700 -rotate-12"></div>
      
      {/* Larger background shapes */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-10 rotate-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-10 rotate-slow" style={{ animationDirection: 'reverse' }}></div>
    </div>
  );
};

export default FloatingElements;
