import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, Share2, Image, Palette, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const DigitalSwag: React.FC = () => {
  const [name, setName] = useState('Your Name Here');
  const [photo, setPhoto] = useState('/e45a27d6a9a33d68441806c0ec2bb5f6.jpg');
  const [message, setMessage] = useState('');
  const [badgeColor, setBadgeColor] = useState('#FDE047');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
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
        link.download = 'synergix-digital-badge.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  const handleShare = async () => {
    if (badgeRef.current) {
      try {
        const canvas = await html2canvas(badgeRef.current);
        canvas.toBlob(async (blob) => {
          if (blob) {
            const file = new File([blob], 'synergix-digital-badge.png', { type: 'image/png' });
            
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
              try {
                await navigator.share({
                  title: 'My SYNERGIX Digital Badge',
                  text: `Check out my personalized SYNERGIX digital badge! ${message ? `\n\n${message}` : ''}`,
                  files: [file],
                });
              } catch (error) {
                console.log('Error sharing', error);
              }
            } else {
              // Fallback to download
              handleDownload();
            }
          }
        });
      } catch (error) {
        console.log('Error generating badge for sharing', error);
        // Fallback to download
        handleDownload();
      }
    }
  };

  const badgeColors = [
    { name: 'Yellow', value: '#FDE047' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Pink', value: '#EC4899' },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-card bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Get Your <span className="gradient-primary bg-clip-text text-transparent">Digital Swag</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalize your SYNERGIX Digital Badge and show the world your excitement!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customization Panel */}
          <Card className="gradient-card border-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Palette className="mr-2 h-6 w-6 text-primary" />
                Customize Your Badge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                  className="bg-input border border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Custom Message</Label>
                <Textarea
                  id="message"
                  placeholder="Add a personal message to your badge (optional)"
                  value={message}
                  onChange={handleMessageChange}
                  className="bg-input border border-border"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Badge Color</Label>
                <div className="flex flex-wrap gap-2">
                  {badgeColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setBadgeColor(color.value)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        badgeColor === color.value ? 'border-primary' : 'border-border'
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Profile Photo</Label>
                <div className="flex items-center space-x-4">
                  <Button onClick={triggerFileUpload} variant="outline" className="border-glow">
                    <Image className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {fileInputRef.current?.files?.[0]?.name || 'No file chosen'}
                  </span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              <div className="pt-4 flex-wrap gap-4">
                <Button onClick={handleDownload} className="gradient-primary glow-effect flex-1 min-w-[120px]">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button onClick={handleShare} variant="outline" className="border-glow flex-1 min-w-[120px]">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <div className="space-y-8">
            <Card className="gradient-card border-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Badge Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div 
                    ref={badgeRef} 
                    className="relative digital-swag-card w-full max-w-md p-8 rounded-lg"
                  >
                    <div className="aspect-square w-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-6 relative">
                      <img
                        src={photo}
                        alt="Badge preview"
                        className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg"
                      />
                      <img
                        src="/src/assets/synergix-logo.png"
                        alt="Synergix Logo"
                        className="absolute bottom-0 right-0 w-16 h-16"
                      />
                    </div>
                    <div 
                      className="text-center py-3 px-6 rounded-lg font-bold text-black shadow-md"
                      style={{ backgroundColor: badgeColor }}
                    >
                      <div className="text-xl">{name}</div>
                      {message && (
                        <div className="text-sm mt-1 opacity-90">{message}</div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Preview */}
            <Card className="gradient-card border-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Share2 className="mr-2 h-6 w-6 text-primary" />
                  Social Media Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    This is how your badge will appear when shared on social media:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">S</span>
                      </div>
                      <div>
                        <div className="font-bold">Your Name</div>
                        <div className="text-sm text-muted-foreground">@yourhandle</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="mb-3">
                        Excited to participate in SYNERGIX! Just created my personalized digital badge.
                        {message && ` "${message}"`}
                      </p>
                      <div className="border border-border rounded-lg overflow-hidden">
                        <div className="relative w-full h-48">
                          <img
                            src={photo}
                            alt="Badge preview"
                            className="w-full h-full object-cover"
                          />
                          <img
                            src="/src/assets/synergix-logo.png"
                            alt="Synergix Logo"
                            className="absolute bottom-2 right-2 w-12 h-12"
                          />
                        </div>
                        <div
                          className="py-2 px-4 font-bold text-black text-center"
                          style={{ backgroundColor: badgeColor }}
                        >
                          {name}
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        #SYNERGIX #Hackathon #DigitalBadge
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Section */}
        <Card className="gradient-card border-glow mt-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your images are never stored on our servers. Everything is processed in your browser.
                </p>
              </div>
              <div className="text-center">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">High Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Download your badge in high-resolution PNG format for use anywhere.
                </p>
              </div>
              <div className="text-center">
                <Share2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">Easy Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  One-click sharing to all your favorite social platforms.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DigitalSwag;