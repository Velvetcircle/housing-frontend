import React from 'react';

const Login = () => {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full border px-4 py-2 mb-3 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border px-4 py-2 mb-3 rounded"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
    </div>
  );
};

export default Login;
