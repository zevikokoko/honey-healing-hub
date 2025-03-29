
import React from 'react';
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from './Icons';

const CallToAction = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972528348478?text=אשמח%20לקבל%20את%20קטלוג%20המוצרים', '_blank');
  };

  return (
    <section className="py-16 px-4 honeycomb-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-honey-400/90 to-honey-500/90 -z-10"></div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">📞 רוצה לבדוק מה מתאים לך?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-honey-50 text-honey-700 hover:text-honey-800 p-6 rounded-xl text-lg shadow-lg flex items-center justify-center gap-2"
          >
            <WhatsappIcon className="w-6 h-6" />
            אני רוצה שיחה אישית עם דרור
          </Button>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-honey-800 hover:bg-honey-900 text-white p-6 rounded-xl text-lg shadow-lg"
          >
            לגלות את מוצרי הכוורת המרפאים
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
