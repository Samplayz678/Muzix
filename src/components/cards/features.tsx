import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Command List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Music Commands */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2">General Commands</h3>
            <p className="text-lg text-gray-300">
              generate, help, invite, ping, profile, redeem
            </p>
          </div>

          {/* Filter Commands */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Music Commands</h3>
            <p className="text-lg text-gray-300">
              clear, filter, join, leave, loop, lyric, pause, play, previous, queue, remove, resume, seek, shuffle, skip, stop, volume
            </p>
          </div>

          {/* Information Commands */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Setting Commands</h3>
            <p className="text-lg text-gray-300">
             247, autoplay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
