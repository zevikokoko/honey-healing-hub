
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-honey-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">עליי – דרור שפרינגוט</h2>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <p className="text-lg text-honey-700 mb-6 text-center">
            דבוראי מוסמך, מטפל מוסמך באפיתרפיה, מאמין בכוח הריפוי של הטבע
            ולקחתי על עצמי שליחות – לחבר אנשים לעצמם דרך עולם הדבורים.
          </p>
          <p className="text-lg text-honey-700 text-center font-medium">
            מוזמנים באהבה.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="bg-honey-200 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-honey-700">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-honey-800 font-medium">052-8348478</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-honey-200 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-honey-700">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="text-honey-800 font-medium">הכוורת שלי בגליל – המשלוחים מגיעים לכל הארץ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
