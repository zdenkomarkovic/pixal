import { LucideIcon } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <AnimatedSection key={index} delay={index * 0.05}>
            {" "}
            <div className="bg-background p-6 rounded-lg text-center h-full">
              <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
