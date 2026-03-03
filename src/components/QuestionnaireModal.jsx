import React, { useState } from 'react';

const QuestionnaireModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        hasDesign: null,
        wantsTemplate: null,
        wantsInvolvement: null,
        wantsHosting: null,
    });
    const [result, setResult] = useState(null);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);


    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        setStep(1);
        setAnswers({
            hasDesign: null,
            wantsTemplate: null,
            wantsInvolvement: null,
            wantsHosting: null,
        });
        setResult(null);
    };

    const handleAnswer = (key, value) => {
        setAnswers((prev) => ({ ...prev, [key]: value }));
        setStep((prev) => prev + 1);
        window.gtag?.('event', 'questionnaire_answer', {
            step,
            question: key,
            answer: value,
        });

    };

    const determineService = () => {
        let service = '';
        if (answers.hasDesign === 'yes') {
            service = 'Service 1 – Development from your provided design';
        } else if (answers.wantsTemplate === 'yes') {
            service = 'Service 2 – Development using one of our templates';
        } else if (answers.wantsInvolvement === 'yes') {
            service = 'Service 3 – Fully custom design + development with close collaboration';
        } else {
            service = 'Service 2 – Template-based development (for minimal involvement)';
        }

        if (answers.wantsHosting === 'yes') {
            service += ' + Hosting & Maintenance';
        }

        setResult(service);
    };

    if (step === 5 && !result) determineService();

    return (
        <>
            <button onClick={openModal} className="btn">
                Find the Right Service
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
                    <div className="bg-white max-w-xl w-full mx-4 p-6 rounded-lg shadow-xl relative animate-fadeIn space-y-6">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <h2 className="text-2xl font-bold text-center">
                            Find the Right Service for You
                        </h2>

                        {step === 1 && (
                            <div className="space-y-4">
                                <p className="text-lg">Do you already have a complete design for your website?</p>
                                <div className="flex gap-4">
                                    <button onClick={() => handleAnswer('hasDesign', 'yes')} className="btn">Yes</button>
                                    <button onClick={() => handleAnswer('hasDesign', 'no')} className="btn">No</button>
                                </div>
                            </div>
                        )}

                        {step === 2 && answers.hasDesign === 'no' && (
                            <div className="space-y-4">
                                <p className="text-lg">Would you like to choose from a collection of templates, or build a fully custom design?</p>
                                <div className="flex flex-col gap-4">
                                    <button onClick={() => handleAnswer('wantsTemplate', 'yes')} className="btn">Choose from templates</button>
                                    <button onClick={() => handleAnswer('wantsTemplate', 'no')} className="btn">Build a custom design</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && answers.wantsTemplate === 'no' && (
                            <div className="space-y-4">
                                <p className="text-lg">Do you want to be actively involved in the design process with feedback and collaboration?</p>
                                <div className="flex gap-4">
                                    <button onClick={() => handleAnswer('wantsInvolvement', 'yes')} className="btn">Yes</button>
                                    <button onClick={() => handleAnswer('wantsInvolvement', 'no')} className="btn">No</button>
                                </div>
                            </div>
                        )}

                        {(step === 4 || (step === 2 && answers.hasDesign === 'yes') || (step === 3 && answers.wantsTemplate === 'yes')) && (
                            <div className="space-y-4">
                                <p className="text-lg">Would you like us to host and maintain your website after it's built?</p>
                                <div className="flex gap-4">
                                    <button onClick={() => handleAnswer('wantsHosting', 'yes')} className="btn">Yes</button>
                                    <button onClick={() => handleAnswer('wantsHosting', 'no')} className="btn">No</button>
                                </div>
                            </div>
                        )}

                        {result && !submitted && (
                            <div className="space-y-4 text-center">
                                <p className="text-lg font-semibold">Recommended Service:</p>
                                <p className="text-xl font-bold text-green-600">{result}</p>

                                <p className="mt-6 text-md">Enter your email to receive this recommendation and next steps:</p>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-4 py-2 mt-2"
                                />
                                <button
                                    onClick={() => {
                                        if (email) {
                                            console.log('Captured email + service:', { email, result });
                                            window.gtag?.('event', 'questionnaire_submit', {
                                                email,
                                                selected_service: result,
                                            });
                                            setSubmitted(true);
                                        }
                                    }}
                                    className="btn mt-3"
                                >
                                    Submit
                                </button>
                            </div>
                        )}

                        {submitted && (
                            <div className="space-y-4 text-center">
                                <p className="text-lg font-semibold text-green-600">Thanks! Your response has been saved.</p>
                                <button onClick={closeModal} className="btn mt-4">Close</button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </>
    );
};

export default QuestionnaireModal;
