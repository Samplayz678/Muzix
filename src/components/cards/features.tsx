import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Command List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Music Commands</h3>
              <p className="text-lg text-gray-300">
                247, clear, join, leave, loop, nowplaying, pause, play, queue, remove, resume, seek, shuffle, skip, stop, volume, skipto
              </p>
            </div>
            <div className="relative cursor-pointer transition duration-300 rounded-lg hover:border-2 hover:border-red-500">
              <div className="absolute inset-0 rounded-lg"></div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Filter Commands</h3>
              <p className="text-lg text-gray-300">
                8d, bassboost, clear, earrape, electronic, equalizer, karaoke, nightcore, party, pop, radio, soft, speed, treblebass, vaporwave
              </p>
            </div>
            <div className="relative cursor-pointer transition duration-300 rounded-lg hover:border-2 hover:border-red-500">
              <div className="absolute inset-0 rounded-lg"></div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Information Commands</h3>
              <p className="text-lg text-gray-300">
                help, invite, node, 
                ping, status, support
              </p>
            </div>
            <div className="relative cursor-pointer transition duration-300 rounded-lg hover:border-2 hover:border-red-500">
              <div className="absolute inset-0 rounded-lg"></div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Settings Commands</h3>
              <p className="text-lg text-gray-300">
                adddj, removedj,toggledj, setup
                
              </p>
            </div>
            <div className="relative cursor-pointer transition duration-300 rounded-lg hover:border-2 hover:border-red-500">
              <div className="absolute inset-0 rounded-lg"></div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-bold mb-2">Playlist Commands</h3>
              <p className="text-lg text-gray-300">
                create, delete, info, list, load, removetrack, savecurrent, savequeue

                
              </p>
            </div>
            <div className="relative cursor-pointer transition duration-300 rounded-lg hover:border-2 hover:border-red-500">
              <div className="absolute inset-0 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
