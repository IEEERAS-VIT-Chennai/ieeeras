import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-600 py-8 md:py-20 body-font flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-[10%]">
      <div className="flex flex-col md:flex-row items-center">
        <a href="#" className="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-indigo-500 p-2 bg-white rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-xl font-bold">IEEE</span>
        </a>
        <p className="text-sm text-gray-300 mt-4 md:mt-0 md:ml-4 md:text-left">The IEEE Robotics <br />& Automation Society (RAS) <br />VITC Student Chapter</p>
      </div>
      <div className="md:ml-4 md:w-1/3 md:text-left mt-4 md:mt-0">
        <h2 className="text-white">Communication Address</h2>
        <p className="text-gray-300">VIT Chennai, Kelambakkam - Vandalur Road, Rajan Nagar, Chennai-600127</p>
      </div>
      <div className="md:ml-4 mt-4 md:mt-0">
        <h1 className="text-white">Contact Us</h1>
        <p className="text-gray-300">Email: ieeeras@example.com</p>
        <p className="text-gray-300">Phone: 123456789</p>
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 flex flex-col md:text-left">
        <a href="#About" className="text-gray-300 hover:text-white">About</a>
        <a href="#Departments" className="text-gray-300 hover:text-white">Departments</a>
        <a href="#Team" className="text-gray-300 hover:text-white">Team</a>
        <a href="#Projects" className="text-gray-300 hover:text-white">Projects</a>
        <a href="#Events" className="text-gray-300 hover:text-white">Events</a>
      </div>
    </footer>
  );
};

export default Footer;