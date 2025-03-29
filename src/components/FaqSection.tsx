
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "האם זה מתאים גם לילדים?",
    answer: "בחלק מהמוצרים – כן. שיחה אישית תעזור לנו להתאים נכון."
  },
  {
    question: "האם אפשר לשלב עם טיפול רפואי?",
    answer: "בהחלט – אפיתרפיה יכולה להשתלב עם טיפולים קונבנציונליים."
  },
  {
    question: "מה ההבדל בין המוצרים שלך למוצרים מסחריים?",
    answer: "המוצרים שלי מגיעים ישירות מהכוורת, מיוצרים בעבודת יד, ובלי חומרים משמרים או תוספים. זה ההבדל בין מזון חי למוצר תעשייתי."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">שאלות נפוצות</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-honey-200">
              <AccordionTrigger className="text-lg font-medium text-honey-700 py-4 hover:text-honey-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-honey-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
