import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
}

export const PricingCard = ({ title, price, period, features, highlighted = false }: PricingCardProps) => {
  return (
    <div className={`bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border ${
      highlighted ? 'border-secondary shadow-glow' : 'border-border'
    }`}>
      <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">{price}</span>
        {period && <span className="text-muted-foreground ml-2">{period}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={highlighted ? "hero" : "outline"} 
        size="lg" 
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
};
