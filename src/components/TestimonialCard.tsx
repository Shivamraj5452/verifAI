import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export const TestimonialCard = ({ quote, author, role, organization }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
      <Quote className="w-10 h-10 text-secondary mb-4 opacity-50" />
      <p className="text-foreground text-lg mb-6 leading-relaxed">"{quote}"</p>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{organization}</p>
      </div>
    </div>
  );
};
