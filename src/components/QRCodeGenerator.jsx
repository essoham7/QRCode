import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [logo, setLogo] = useState(null);
  const [size, setSize] = useState(200); 
  // const [extension, setExtension] = useState('png'); 
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(URL.createObjectURL(file));
  };

  const handleSizeChange = (e) => {
    setSize(parseInt(e.target.value));
  };

  // const handleExtensionChange = (e) => {
  //   setExtension(e.target.value);
  // };

  const handleDownloadQRCode = () => {
    const canvas = document.querySelector('canvas');
    const dataURL = canvas.toDataURL(`image`);
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `qrcode.png`;
    link.click();
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 flex justify-center">
        <label className="mb-2 tracking-tight sm:text-3xl md:text-2xl">Texte:</label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="grid gap-4 grid-cols-2">
        <div className="mb-4">
          <label className="mb-2 tracking-tight sm:text-3xl md:text-2xl text-gray-900">Couleur :</label>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 tracking-tight sm:text-3xl md:text-2xl text-gray-900">Couleur de fond :</label>
          <input
            type="color"
            value={bgColor}
            onChange={handleBgColorChange}
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
    <div className="grid gap-4 grid-cols-2 justify-center">
      <div className="mb-4  justify-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleLogoChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        {logo && (
          <img src={logo} alt="Logo" className="relative w-24 h-24 rounded-full" />
        )}
      </div>
      <div className="mb-4 flex  flex-initial justify-center">
        <label className="mb-2 tracking-tight sm:text-3xl md:text-2xl text-gray-900 p-2">Taille :</label>
        <input
          type="range"
          min="200"
          max="2000"
          value={size}
          onChange={handleSizeChange}
          className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <p className="block mb-2 text-sm font-medium">{size} x {size} px</p>
      </div>

      </div>
      {/* <div className="mb-4 flex justify-center">
        <label className="mb-2 tracking-tight sm:text-3xl md:text-2xl text-gray-900">Extension :</label>
        <select value={extension} onChange={handleExtensionChange} className="w-full p-2 border border-gray-300 rounded-md">
          <option value="png">PNG</option>
          <option disabled value="eps">EPS</option>
          <option disabled value="pdf">PDF</option>
          <option disabled value="svg">SVG</option>
        </select>
      </div> */}
      <div className="mb-4 flex justify-center img-container">
        <QRCode
          value={text}
          fgColor={color}
          bgColor={bgColor}
          logoImage={logo}
          size={size}
  
        />
      </div>
      <div>
        <button
          onClick={handleDownloadQRCode}
          className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Télécharger le QR code
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
