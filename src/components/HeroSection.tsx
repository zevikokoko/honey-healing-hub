
import React from 'react';
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from './Icons';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972528348478?text=אשמח%20לקבל%20את%20קטלוג%20המוצרים', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden honeycomb-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-honey-50/90 to-honey-100/80 -z-10"></div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-honey-800 mb-6 max-w-4xl mx-auto leading-tight">
        ריפוי מהכוורת – מוצרים טבעיים וטיפול עוצמתי
      </h1>
      
      <p className="text-xl md:text-2xl text-honey-700 mb-6 max-w-3xl mx-auto">
        הדרך הטבעית להקלה על כאבים, חיזוק מערכת החיסון ושיפור איכות החיים – בעזרת כוחה המרפא של הדבורה
      </p>
      
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        הטבע מרפא, והדבורים מביאות את הכוח.
        <br />
        אני דרור שפרינגוט – דבוראי ומטפל באפיתרפיה – מזמין אתכם להכיר עולם של ריפוי טבעי, עמוק ומדויק.
      </p>
      
      <div className="w-full max-w-xs sm:max-w-md">
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-honey-500 hover:bg-honey-600 text-white p-6 rounded-full text-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <WhatsappIcon className="w-6 h-6 ml-2" />
          לשיחת ייעוץ בוואטסאפ
        </Button>
      </div>

      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
