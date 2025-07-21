import React from 'react';

const MessageIcon = () => {
  return (
    <button
      className="fixed bottom-20 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
      onClick={() => alert('Suggestion box coming soon!')}
    >
      💬
    </button>
  );
};

export default MessageIcon;
