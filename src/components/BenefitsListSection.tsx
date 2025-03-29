
import React from 'react';
import { CheckIcon } from 'lucide-react';

const benefits = [
  "הפחתת דלקות וכאבים כרוניים",
  "חיזוק מערכת החיסון והאנרגיה הכללית",
  "ריפוי טבעי ואישי – בהתאמה מלאה",
  "מוצרים בעבודת יד – ללא תוספים",
  "תחליף טבעי ועדין לתרופות"
];

const BenefitsListSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-honey-50 to-honey-100/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">✅ התועלות העיקריות</h2>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-honey-400 rounded-full p-1 flex-shrink-0">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-honey-800">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsListSection;
