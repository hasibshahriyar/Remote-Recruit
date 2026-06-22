import React from 'react';
import Button from '../ui/Button';

const faqs = [
  {
    question: 'Do I have to sign a long-term contract?',
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    question: 'Can I pay for a whole year?',
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    question: 'What if I need help?',
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-4xl lg:text-[45px] font-bold text-dark mb-12 lg:mb-16">
        Common Questions
      </h2>

      <div className="space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question} className="space-y-3">
            <h3 className="text-xl font-semibold text-dark">{faq.question}</h3>
            <p className="text-lg text-gray-light leading-relaxed max-w-3xl">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="pt-10">
        <Button variant="outline" size="lg" className="rounded-2xl px-8">
          More Questions
        </Button>
      </div>
    </section>
  );
}
