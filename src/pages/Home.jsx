import React from 'react';

const Home = () => {
  return (
    <div className="p-6">
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold text-blue-900">Welcome to Ashiyana Housing</h1>
        <p className="text-gray-600 mt-2 text-lg">
          Your dream home starts here. Explore luxurious flats, villas, and housing solutions.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Explore Projects
        </button>
      </section>
    </div>
  );
};

export default Home;
