import React from 'react';

const PrivacyPolicy = ({ onClose }) => {

    return (
        <div className="absolute bottom-0 left-0 right-0 -translate-y-11/12 w-screen h-screen max-w-dvw max-h-dvh inset-0 z-[9999] flex justify-center items-center">
            <div className="bg-background text-text font-body rounded-2xl w-full h-fit mx-2 md:w-3/4 md:h-3/4 -bottom-1/5 md:bottom-0 lg:bottom-10 lg:translate-y-1/5 overflow-y-auto overflow-x-hidden relative p-6 shadow-xl z-[9999]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-4xl font-semibold"
                    aria-label="Close Privacy Policy"
                >
                    ×
                </button>

                <h2 className="text-center font-display font-bold text-xl mb-4">Privacy Policy</h2>
                <p className="text-right text-sm">Effective Date: 7/7/2025</p>
                <br />
                <p className="text-left text-sm">This website is operated by Marina Majdenić as a personal portfolio to showcase development work.</p>
                <h3 className="text-body font-body font-semibold text-md my-2">
                    What data we collect
                </h3>
                <p className="text-left text-sm">We do not collect any personal data unless you voluntarily submit it through the contact form. When you use the form, we collect:</p>
                <ul className="text-left text-sm mx-4 list-disc">
                    <li className="text-left list-item">your name</li>
                    <li className="text-left list-item">your email address</li>
                    <li className="text-left list-item">your message</li>
                </ul>
                <p className="text-left text-sm">This data is used solely to respond to your inquiry and is never shared with third parties.</p>
                <h3 className="text-body font-body font-semibold text-md my-2">
                    Analytics
                </h3>
                <p className="text-left text-sm">We use Plausible Analytics to understand how people use this site. Plausible is a privacy-focused analytics tool that:</p>
                <ul className="text-left text-sm mx-4 list-disc">
                    <li className="list-item">does not use cookies</li>
                    <li className="list-item">does not collect personal data</li>
                    <li className="list-item">does not track you across websites</li>
                </ul>
                <p className="text-left text-sm">All data is aggregated and anonymized. You can read more about how Plausible handles data here: <a href="https://plausible.io/data-policy">Plausible Data Policy</a></p>
                <h3 className="text-body font-body font-semibold text-md my-2">
                    Cookies
                </h3>
                <p className="text-left text-sm">This site does not use cookies or other tracking technologies.</p>
                <h3 className="text-body font-body font-semibold text-md my-2">
                    Your rights
                </h3>
                <p className="text-left text-sm">If you have submitted your personal data via the contact form, you may request to access or delete your data and know how it is being used.
                </p>
                <h3 className="text-body font-body font-semibold text-md my-2">
                    Contact
                </h3>
                <p className="text-left text-sm">To make a request, please contact: [marina.majden@gmail.com]
                </p>
                <button
                    onClick={onClose}
                    className="btn py-2 px-5 my-2"
                    aria-label="Close Privacy Policy"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
