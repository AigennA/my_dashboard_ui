import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Välkommen till {process.env.NEXT_PUBLIC_SCHOOL_NAME}
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Din portal för skoladministration och lärarresurser
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="#"
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
            >
              Logga in som lärare
            </a>
            <a 
              href="#"
              className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full transition duration-300"
            >
              Logga in som administratör
            </a>
          </div>
          <Image
            src="/logo3.png"
            alt={`${process.env.NEXT_PUBLIC_SCHOOL_NAME} logo`}
            width={150}
            height={150}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
