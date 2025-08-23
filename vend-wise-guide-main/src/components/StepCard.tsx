import { Card } from "@/components/ui/card";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tips?: string[];
}

export const StepCard = ({ stepNumber, title, description, image, imageAlt, tips }: StepCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
      <div className="bg-gradient-warm p-6">
        <div className="flex items-center gap-4">
          <div className="bg-step-foreground text-step font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
            {stepNumber}
          </div>
          <h2 className="text-2xl font-bold text-step-foreground">{title}</h2>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <p className="text-card-foreground leading-relaxed text-lg">{description}</p>
            
            {tips && tips.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Tips:</h3>
                <ul className="space-y-2">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-step font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="order-first md:order-last">
            <img 
              src={image} 
              alt={imageAlt}
              className="w-full h-64 object-cover rounded-lg shadow-card"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};