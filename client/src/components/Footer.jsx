import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111113] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Speak Up.<br />
          Stay Safe.<br />
          Stop Crime.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
       
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-1 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
              />
            </svg>
            <p>
              Pathanamthitta<br />
              Kerala, India
            </p>
          </div>

          <div className="flex items-center gap-4">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a3 3 0 003.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:support@gmail.com" className="hover:underline">
              support@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 my-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex gap-8 mb-4 md:mb-0">
          <a href="/About" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="/HowItWorks" className="hover:text-white">Works</a>
          <a href="/Helpline" className="hover:text-white">Support</a>
        </div>
        <p>© Copyright 2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
