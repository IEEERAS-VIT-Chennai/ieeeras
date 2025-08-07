import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 py-8 md:py-20 body-font flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-[10%]">
      <div className="flex flex-col md:flex-row items-center">
        <a href="#" className="flex items-center text-white">
          <img src={"assets/raslogo.png"} className="h-12"></img>

        </a>
        <p className="text-sm text-gray-300 mt-4 md:mt-0 md:ml-4 md:text-left">The IEEE Robotics <br />& Automation Society (RAS) <br />VITC Student Chapter</p>
      </div>
      <div className="md:ml-4 md:w-1/3 md:text-left mt-4 md:mt-0">
        <h2 className="text-white">Communication Address</h2>
        <p className="text-gray-300">VIT Chennai, Kelambakkam - Vandalur Road, Rajan Nagar, Chennai-600127</p>
      </div>
      <div className="md:ml-4 mt-4 md:mt-0">
        <h1 className="text-white">Contact Us</h1>
        <p className="text-gray-300">Instagram: <a href="https://www.instagram.com/ieeerasvitc" target="_blank" rel="noopener noreferrer" className="hover:text-white no-underline">ieeerasvitc</a></p>
        <p className="text-gray-300">Linkedin: <a href="https://www.linkedin.com/company/ieeerasvitc/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-white no-underline">ieeerasvitc</a></p>
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 flex flex-col md:text-left">
        <a href="#About" className="text-gray-300 hover:text-white">About</a>
        <a href="#Departments" className="text-gray-300 hover:text-white">Departments</a>
        <a href="#Team" className="text-gray-300 hover:text-white">Team</a>
        <a href="#Projects" className="text-gray-300 hover:text-white">Projects</a>
      </div>
    </footer>
  );
};

export default Footer;