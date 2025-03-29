
import React from 'react';
import { WhatsappIcon } from './Icons';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972528348478?text=אשמח%20לקבל%20את%20קטלוג%20המוצרים', '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-honey-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">ריפוי מהכוורת</h3>
            <p className="text-honey-200">הדרך הטבעית לחיים בריאים יותר</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <WhatsappIcon className="w-5 h-5" />
              צור קשר בוואטסאפ
            </button>
            <p className="text-honey-200 text-sm">טלפון: 052-8348478</p>
          </div>
        </div>
        
        <div className="border-t border-honey-700 mt-6 pt-6 text-center">
          <p className="text-honey-300 text-sm">
            © {currentYear} ריפוי מהכוורת - דרור שפרינגוט. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
