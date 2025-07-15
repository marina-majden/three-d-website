import React, { useRef, useState, lazy } from 'react';

const Alert = lazy(() => import('../components/Alert.jsx'));
const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const [alert, setAlert] = useState({ show: false, text: '', type: 'success' });

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

  };

  return (
    <section className="relative my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="hidden isolate md:inline-block absolute top-80 left-20 xl:left-30">
        <h2 className="headline-section headline-stroke rotate-270">contact</h2>
      </div>
      <h2 className="headline-section headline-stroke block md:hidden">contact</h2>
      <div className="c-space flex flex-col items-center justify-center">
        <div className="contact-container glass-light rounded-2xl p-8 sm:p-12 lg:p-16">

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
