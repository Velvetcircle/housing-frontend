import React from 'react';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/9990611114"
      className="fixed bottom-6 right-6 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Chat on WhatsApp"
        className="h-12 w-12"
      />
    </a>
  );
};

export default WhatsAppIcon;
