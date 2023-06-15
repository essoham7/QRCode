import React from 'react';
import QRCodeGenerator from './QRCodeGenerator';

const HeroSection = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
            Bienvenue sur Esso QR code generator
          </h1>
          <p className="mt-8  mb-8 w-full mx-auto text-2xl text-gray-900">
          Bienvenue sur notre site de génération de QR Codes ! Créez facilement des codes QR personnalisés pour vos liens, 
          informations de contact, événements, promotions et bien plus encore. Il vous suffit de saisir les données souhaitées, 
          de choisir un style et de télécharger votre QR Code prêt à être utilisé. Simplifiez la communication et partagez rapidement des
           informations importantes avec nos QR Codes rapides et fiables. Essayez-le dès maintenant et découvrez la puissance de la technologie QR Code !.
          </p>
          

          <QRCodeGenerator />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
