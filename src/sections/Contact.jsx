import React, { useRef, useState, lazy } from 'react';

const Alert = lazy(() => import('../components/Alert.jsx'));
const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, text: '', type: 'success' });
  const [errors, setErrors] = useState({});


  const showAlert = ({ text, type = 'success' }) => {
    setAlert({ show: true, text, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, text: '', type: 'success' });
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = 'Invalid email format.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: 'Marina Majdenić',
            from_email: form.email,
            to_email: 'mila.mashinica@gmail.com',
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setLoading(false);
          showAlert({ text: 'Thank you for your message!', type: 'success' });

          setTimeout(() => {
            hideAlert();
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);

          showAlert({ text: "The message was not sent.", type: 'danger' });
        });
      console.log('alert:', alert);
    }
  };


  return (
    <section className="my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <h2 className="headline-section headline-stroke block text-center md:hidden">contact</h2>
      <div className="c-space flex flex-col items-center justify-center">

        <div className="relative contact-container glass-light rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="hidden md:block absolute top-1/3 -left-50 md:-left-60 lg:-left-80 xl:-left-90">
            <h2 className="headline-section headline-stroke rotate-270">contact</h2>
          </div>
          <p className="text-lg mt-3">
            Whether you’re looking to build a new website, bring a unique project to
            life, or you need another member in your team, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
              {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
              {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="ex., Wow, your portfolio is amazing! You are hired!"
              />
              {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
            </label>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
