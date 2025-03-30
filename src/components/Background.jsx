function Background() {
    const gradientStyle = {
      backgroundImage: 'radial-gradient(circle, #FFF, #000)', // Replace these colors with your desired gradient
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    };
  
    return (
      
      <div className="fixed inset-0 flex items-center justify-center bg-[#00040F] -z-10">
        
      </div>
    );
  }
  
  export default Background;