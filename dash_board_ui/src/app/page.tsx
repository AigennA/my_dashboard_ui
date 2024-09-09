import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  const schoolName = process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Din Skola'; // Fallback för miljövariabeln

  return (
    <main className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/aibackg.png')" }}>
      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
      <div className="relative container mx-auto px-4 py-10 backdrop-brightness-75">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-white mb-6">
            Välkommen till {schoolName}
          </h1>
          <p className="text-xl  text-gray-100 mb-8">
            Din portal för skoladministration och lärarresurser
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a 
              href="/teacher-login"
              aria-label="Logga in som lärare"
              className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300 font-semibold"
            >
              Logga in som lärare
            </a>
            <a 
              href="/admin-login"
              aria-label="Logga in som administratör"
              className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full transition duration-300 font-semibold"
            >
              Logga in som administratör
            </a>
          </div>
          <Image
            src="/logo3.png"
            alt={`${schoolName} logo`}
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
