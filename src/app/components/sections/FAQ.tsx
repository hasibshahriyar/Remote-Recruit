import React from 'react';
import Button from '../ui/Button';

export default function FAQ() {
  const faqs = [
    {
      question: "Do I have to sign a long-term contract?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    },
    {
      question: "Can I pay for a whole year?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    },
    {
      question: "What if I need help?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <h2 className="text-4xl lg:text-[45px] font-bold text-[#11142D] mb-16">
        Common Questions
      </h2>

      <div className="space-y-10">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-medium text-[#11142D]">{faq.question}</h3>
            <p className="text-lg text-[#808191] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <button className="border-2 border-[#52B4DA]/40 text-[#1E3E85] font-semibold text-lg py-3 px-8 rounded-2xl hover:bg-[#F4F1FF] transition-colors">
          More Questions
        </button>
      </div>
    </section>
  );
}
