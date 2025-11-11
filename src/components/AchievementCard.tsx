import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Lightbulb, Users, Handshake, Icon } from 'lucide-react'; // Assuming Icon is exported from lucide-react
import { useTranslation } from 'react-i18next';

interface AchievementCardProps {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

const icons: { [key: string]: Icon } = { // Changed LucideIcon to Icon
  Trophy,
  Lightbulb,
  Users,
  Handshake,
};

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, titleKey, descriptionKey }) => {
  const { t } = useTranslation();
  const IconComponent = icons[icon];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found.`);
    return null;
  }

  return (
    <Card className="flex flex-col items-center text-center p-6 bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-0 flex flex-col items-center">
        <IconComponent className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>
        <p className="text-muted-foreground">{t(descriptionKey)}</p>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;