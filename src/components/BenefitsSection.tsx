
import React from 'react';
import { BeeIcon } from './Icons';

const ForWhomSection = () => {
  return (
    <section className="py-16 px-4 bg-honey-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🐝 למי זה מתאים?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
            <div className="bg-honey-300 rounded-full p-2 mt-1 shrink-0">
              <BeeIcon className="w-5 h-5 text-honey-800" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-honey-700">כאבי פרקים? גב? דלקות כרוניות?</h3>
              <p className="text-honey-600">הטיפולים והמוצרים שלנו מסייעים בהפחתת דלקות וכאבים כרוניים באופן טבעי ועדין.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
            <div className="bg-honey-300 rounded-full p-2 mt-1 shrink-0">
              <BeeIcon className="w-5 h-5 text-honey-800" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-honey-700">מרגישים מותשים, חסרי אנרגיה?</h3>
              <p className="text-honey-600">מוצרי הכוורת עשירים במרכיבים שמחזקים את הגוף ומספקים אנרגיה טבעית ומתמשכת.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
            <div className="bg-honey-300 rounded-full p-2 mt-1 shrink-0">
              <BeeIcon className="w-5 h-5 text-honey-800" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-honey-700">רוצים לחזק את הגוף והנפש – בלי כימיקלים?</h3>
              <p className="text-honey-600">כל המוצרים שלנו 100% טבעיים, ללא תוספים מלאכותיים, ועובדים בהרמוניה עם הגוף.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
            <div className="bg-honey-300 rounded-full p-2 mt-1 shrink-0">
              <BeeIcon className="w-5 h-5 text-honey-800" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-honey-700">מחפשים מענה טבעי ולא פולשני?</h3>
              <p className="text-honey-600">אפיתרפיה מציעה דרך עדינה ויעילה לשיפור הבריאות, ללא התערבויות פולשניות.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-honey-800">בואו להרגיש את הכוח של הדבורה</h3>
          <p className="text-lg text-center">
            <span className="font-bold">מה זו אפיתרפיה?</span>
          </p>
          <p className="text-honey-700 text-center">
            אפיתרפיה היא שיטת טיפול מסורתית הנשענת על מוצרי הדבורה – כמו פרופוליס, פולן, ארס דבורים ועוד – לריפוי, חיזוק והתחדשות טבעית של הגוף.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
