
import React from 'react';
import { Button } from "@/components/ui/button";
import { HoneycombIcon } from './Icons';

const products = [
  {
    name: "דבש",
    description: "דבש טהור וגולמי, עשיר בחומרים אנטי-בקטריאליים ואנטי-דלקתיים"
  },
  {
    name: "צורי (פרופוליס)",
    description: "חומר אנטיביוטי טבעי ורב עוצמה, מחזק את מערכת החיסון"
  },
  {
    name: "פולן",
    description: "אבקת פרחים עשירה בחלבון, ויטמינים ונוגדי חמצון"
  },
  {
    name: "ג'לי מלכותי",
    description: "מזון מלכות המכיל חומצות אמינו, ויטמינים ומינרלים חיוניים"
  },
  {
    name: "שעוות דבורים",
    description: "שימוש במשחות טיפוליות ומוצרי עור טבעיים"
  },
  {
    name: "ארס דבורים",
    description: "לטיפול בדלקות, כאבי פרקים ומחלות אוטואימוניות"
  }
];

const ProductsSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972528348478?text=אשמח%20לקבל%20את%20קטלוג%20המוצרים', '_blank');
  };

  return (
    <section id="products" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 relative">
          <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2">
            <img 
              src="/lovable-uploads/a4a581c5-3764-4284-bb2f-b11bd0db62e3.png" 
              alt="Cute Bee" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">🌿 מוצרים 100% טבעיים</h2>
          <p className="text-lg text-honey-700 max-w-2xl mx-auto">
            מיוצרים בעבודת יד, באהבה, ישירות מהכוורת שלי – אליך.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-honey-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-honey-300 text-honey-800 p-2 rounded-bl-2xl">
                <HoneycombIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4 text-honey-700">{product.name}</h3>
              <p className="text-honey-600">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-honey-500 hover:bg-honey-600 text-white px-8 py-3 rounded-full text-lg shadow-md inline-flex items-center gap-2"
          >
            לגלות את מוצרי הכוורת המרפאים
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
