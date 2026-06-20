import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <h2 className="text-4xl lg:text-[45px] font-bold text-[#11142D] mb-16 text-left">
        Common Questions
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <button 
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <h3 className="text-xl font-medium text-[#11142D]">{faq.question}</h3>
              <div className="ml-4 flex-shrink-0 text-[#1E3E85]">
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </button>
            {openIndex === index && (
              <div className="mt-4 pr-12">
                <p className="text-lg text-[#808191] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
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
