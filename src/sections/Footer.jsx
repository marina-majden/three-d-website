import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-7 pb-3 px-4 bg-text-dark flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="font-stretch-expanded">Marina Majdenić 2025. All rights reserved.</p>

    </footer>
  );
};

export default Footer;