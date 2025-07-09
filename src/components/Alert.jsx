import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex justify-center items-center transition-opacity duration-300 animate-fade-in">
      <div
        className={`max-w-sm w-full mx-auto p-6 rounded-lg shadow-lg text-white text-center
          ${type === 'danger' ? 'bg-orange-600' : 'bg-teal-600'}`}
        role="alert"
      >
        <p className="text-lg font-bold mb-2">
          {type === 'danger' ? 'Oops!' : 'Success!'}
        </p>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
