import React, { useState, lazy } from 'react';

const PrivacyPolicy = lazy(() => import('../components/PrivacyPolicy.jsx'));

const Footer = () => {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <footer className="w-full py-8 px-4 bg-text-dark glass-light-no-border flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-5 relative">
      <div className="flex gap-3">
        <a className="social-icon" href="http://marina-majden.github.io" target="_blank" rel="noopener noreferrer" aria-label='Link to my portfolio'>
          <img src="/assets/logo-dark.svg" alt="website" className="w-1/2 h-1/2" />
        </a>
        <a className="social-icon" href="http://www.github.com/marina-majden" target="_blank" rel="noopener noreferrer" aria-label="Link to my Github page">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" /></a>
        <a className="social-icon" href="https://www.linkedin.com/in/marina-majden/" target="_blank" rel="noopener noreferrer" aria-label="Link to my LinkedIn profile">
          <img src="/assets/linkedin.svg" alt="ilinkedin" className="w-1/2 h-1/2" />
        </a>
      </div>

      <div>
        <p className="font-body text-md text-text">designed & developed by Marina Majdenić &copy; 2025</p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setShowPolicy(true)}
          className="text-text text-md font-body underline underline-offset-2 cursor-pointer hover:text-text-mild hover:no-underline transition-colors duration-200 ease-in-out"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </button>
        {showPolicy && <PrivacyPolicy onClose={() => setShowPolicy(false)} />}
      </div>



    </footer>
  );
};

export default Footer;