import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does the OTP login work?",
      answer: "Clients simply enter their phone number and receive a secure code via SMS or WhatsApp. No passwords to remember or reset, dramatically increasing booking completion rates."
    },
    {
      question: "Can I manage multiple staff members?",
      answer: "Yes, our Pro plan allows you to add multiple professionals, each with their own customizable calendar, working hours, and service assignments."
    },
    {
      question: "Does it integrate with my existing calendar?",
      answer: "Aera supports two-way sync with Google Calendar, Apple Calendar, and Outlook, ensuring you never get double-booked."
    },
    {
      question: "What happens if a client doesn't show up?",
      answer: "Aera tracks attendance history. You can set policies, require deposits for frequent no-shows, and utilize our automated reminder system to reduce missed appointments by up to 80%."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
