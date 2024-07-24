import { Fonts } from "@/components/fonts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: `We accept all major credit cards, PayPal, and various other payment methods depending on your location.
    Please contact our support team for more information on accepted payment methods in your region.`,
  },
  {
    question: "How does the pricing work for teams?",
    answer: ` Our pricing is per user, per month. This means you only pay for the number of team members you have on
    your account. Discounts are available for larger teams and annual subscriptions.`,
  },
  {
    question: "Can I change my plan later?",
    answer: `Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and
    reflected in your next billing cycle.`,
  },
  {
    question: "Is my data secure?",
    answer: `Security is our top priority. We use state-of-the-art encryption and comply with the best industry
    practices to ensure that your data is stored securely and accessed only by authorized users.`,
  },
  {
    question: "How do I cancel my subscription?",
    answer: `You can cancel your subscription at any time through your account settings. Once cancelled, you will still have access to your account until the end of your current billing cycle. Please note that we do not offer refunds for unused time in a billing cycle.`,
  },
  {
    question: "What happens if I exceed my storage limit?",
    answer: `If you exceed your storage limit, you will not be able to upload additional files until you delete some data to free up space. We recommend upgrading your plan or managing your storage to ensure uninterrupted service.`,
  },
  {
    question: "How do I reset my password?",
    answer: `To reset your password, navigate to the login page and click on the 'Forgot Password' link. You will be prompted to enter your email address, and an email with a password reset link will be sent to you. Follow the instructions in the email to reset your password.`,
  },
  {
    question: "What is your refund policy?",
    answer: `We offer a satisfaction guarantee. If you are not completely satisfied with our service, you may be eligible for a refund within the first 30 days of your subscription. Please contact our support team for assistance with your refund request.`,
  },
  {
    question: "Can I use your service on multiple devices?",
    answer: `Yes, you can access our service on multiple devices as long as you are logged in with the same account. Our service is designed to be accessible on various platforms, including desktop, tablet, and mobile devices.`,
  },
  {
    question: "How do I get in touch with customer support?",
    answer: `You can contact our customer support team through our website's contact form, by sending an email to support@ourcompany.com, or by calling our support hotline at 1-800-123-4567. Our team is available 24/7 to assist you with any issues or questions.`,
  },
  {
    question: "What is the trial period for your service?",
    answer: `We offer a 14-day free trial for new users to evaluate our service. During this period, you will have access to all features without any restrictions. Your trial will automatically convert to a paid plan at the end of the trial period unless you decide to cancel.`,
  },
  {
    question: "Do you offer any educational discounts?",
    answer: `Yes, we provide educational discounts for students, teachers, and educational institutions. To apply for an educational discount, please provide a valid school email address or other proof of your educational status to our support team.`,
  },
  {
    question: "How do I manage my team members?",
    answer: `As an administrator, you can manage your team members through the team management dashboard in your account. From there, you can add or remove team members, assign roles and permissions, and monitor usage. We also provide resources and guides to help you manage your team effectively.`,
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-14">
      <div className="flex flex-col gap-5">
        <Fonts.h2>FAQs</Fonts.h2>
        <Fonts.bodyLarge className="opacity-50">Here are some of the most frequently asked questions.</Fonts.bodyLarge>
      </div>
      <div className="w-2/3">
        <Accordion type="single" collapsible>
          {faqs.map((item, index) => (
            <div key={index}>
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>
                  <Fonts.h5>{item.question}</Fonts.h5>
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  <Fonts.bodyMedium className="text-start opacity-80">{item.answer}</Fonts.bodyMedium>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
