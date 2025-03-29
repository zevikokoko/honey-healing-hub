
import React from 'react';

const testimonials = [
  {
    quote: "התחלתי לקחת פרופוליס כל בוקר – אחרי שבועיים כאבי הגרון נעלמו, והרגשתי הרבה יותר אנרגטי.",
    name: "נעמה",
    location: "תל אביב"
  },
  {
    quote: "יש לי דלקת כרונית בברך – אחרי טיפול בארס דבורים, לא האמנתי כמה ירדה הנפיחות.",
    name: "יורם",
    location: "מודיעין"
  },
  {
    quote: "המוצרים של דרור שינו לי את החיים. זה מרגיש כאילו הגוף חוזר לעצמו.",
    name: "עדי",
    location: "טבעון"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">💬 מה הלקוחות מספרים?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-honey-200 relative"
            >
              <div className="text-5xl text-honey-300 absolute top-4 right-4 opacity-30">"</div>
              <p className="text-honey-700 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-bold text-honey-800">– {testimonial.name}</p>
                <p className="text-honey-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
