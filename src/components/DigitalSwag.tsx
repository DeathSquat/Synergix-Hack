import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const DigitalSwag: React.FC = () => {
  const [name, setName] = useState('Your Name Here');
  const [photo, setPhoto] = useState('/e45a27d6a9a33d68441806c0ec2bb5f6.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDownload = () => {
    if (badgeRef.current) {
      html2canvas(badgeRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'digital-swag.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My AceHack 4.0 Digital Badge',
        text: 'Check out my personalized AceHack 4.0 digital badge!',
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Sharing is not supported on your browser.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen digital-swag-container">
      <h1 className="text-5xl font-bold text-glow mb-8">Get Your Digital Swag</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="m-8 relative digital-swag-card" ref={badgeRef}>
          <img src={photo} alt="Digital Badge" className="w-80 h-auto" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-digital-swag-yellow text-black text-center py-2 px-4">
            {name}
          </div>
        </div>
        <div className="flex flex-col items-start max-w-md m-8">
          <h2 className="text-4xl font-bold mb-4 text-glow">AceHack 4.0 Digital Badge</h2>
          <p className="mb-4 text-muted-foreground">
            Ready to rock AceHack 4.0? Show the world your excitement with our exclusive digital badge!
          </p>
          <p className="mb-4 text-muted-foreground">
            Personalize your AceHack 4.0 Badge with your name and photo. Download it and spread the word on social media using #AceHack and tagging @AceHackuemj.
          </p>
          <p className="text-sm mb-4 text-muted-foreground">
            *Your privacy matters! We never store your images on our servers.
          </p>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={handleNameChange}
            className="w-full p-2 mb-4 bg-input border border-border rounded"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <div className="flex space-x-4">
            <button onClick={triggerFileUpload} className="btn btn-primary glow-effect">
              UPLOAD YOUR PHOTO
            </button>
            <button onClick={handleDownload} className="btn btn-secondary glow-effect">
              DOWNLOAD
            </button>
            <button onClick={handleShare} className="btn btn-secondary glow-effect">
              SHARE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSwag;