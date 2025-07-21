import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h2>
      <p className="mb-2">📞 Phone: +91-9990611114</p>
      <p className="mb-2">📧 Email: ashiyanahousing@gmail.com</p>
      <p className="mb-6">📍 Address: Ashiyana Towers, Sector 48, Gurugram, Haryana</p>
      <iframe
        title="Ashiyana Map"
        src="https://maps.google.com/maps?q=gurugram%20sector%2048&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
