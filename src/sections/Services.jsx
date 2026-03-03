import React, { useState } from 'react';
import QuestionnaireModal from "../components/QuestionnaireModal";



const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3d8ca9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const services = [
    {
        id: 'design-dev',
        title: 'Development from Your Design',
        price: '$1500',
        features: [
            'Complete development of the website',
            'Responsive design across devices',
            'Advanced SEO optimization',
        ],
        class: 'illustration illustration-design',
    },
    {
        id: 'template',
        title: 'Template-Based Website',
        price: '$1200',
        features: [
            'Select from pre-made modern templates',
            'Fast setup and launch',
            'Mobile responsive and SEO friendly',
        ],
        class: 'illustration illustration-template',
    },
    {
        id: 'custom',
        title: 'Custom Design & Development',
        price: '$2000',
        features: [
            'Website custom designed for your audience',
            'Fully functional and user-friendly site',
            'Responsive design + SEO optimization',
            'Deployment + optional maintenance deal',
        ],
        class: 'illustration illustration-custom',
    },
];

const Services = () => {
    const [activeTab, setActiveTab] = useState('design-dev');
    const [hostingOptions, setHostingOptions] = useState({
        'design-dev': false,
        template: false,
        custom: false,
    });

    const toggleHosting = (id) => {
        setHostingOptions((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const activeService = services.find((s) => s.id === activeTab);
    const isHostingSelected = hostingOptions[activeTab];

    return (
        <section className="py-16 px-4 " id="services">
            <h2 className="headline-section stroke">Services</h2>
            <div className="c-space my-12 max-w-3/5 bg-glass-bg p-1 rounded-2xl shadow-[0_0_20px_rgba(209,38,197,0.5)] hover:shadow-[0_0_25px_rgba(209,38,197,0.7)] transition-all duration-100">
                <div className="bg-background/20 w-full h-full p-6 md:p-10 rounded-[15px] space-y-8">

                    {/* Tab Headers */}
                    <div className="flex justify-between gap-6 bg-glass-bg-navbar p-2 rounded-full text-text text-sm md:text-base">
                        {services.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s.id)}
                                className={` w-1/3 py-2 px-3 rounded-full transition text-center  ${activeTab === s.id ? 'bg-brand font-semibold' : 'hover:bg-theme'
                                    }`}
                            >
                                {s.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="text-text space-y-5">
                        {activeService.price && (
                            <div className="text-3xl font-bold text-brand">{activeService.price}</div>
                        )}
                        <div className={activeService.class}></div>
                        <ul className="space-y-3 text-sm md:text-base">
                            {activeService.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <CheckIcon />
                                    <span>{feature}</span>
                                </li>
                            ))}
                            <li className="flex items-start gap-2 mt-2">
                                <input
                                    type="checkbox"
                                    id={`hosting-${activeService.id}`}
                                    checked={isHostingSelected}
                                    onChange={() => toggleHosting(activeService.id)}
                                    className="mt-1 p-6"
                                />
                                <label htmlFor={`hosting-${activeService.id}`}>
                                    Add Hosting & Maintenance
                                </label>
                            </li>
                        </ul>
                        <button className="mt-4 btn">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
            <QuestionnaireModal />
        </section>
    );
};

export default Services;
