import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy, Plane, CreditCard, Star, Icon as LucideIcon } from 'lucide-react';

const icons: { [key: string]: LucideIcon } = {
  Trophy,
  Plane,
  CreditCard,
  Star,
};

interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ icon, title, description }) => {
  const Icon = icons[icon] || Star;

  return (
    <Card className="bg-background/50">
      <CardHeader className="flex flex-row items-center gap-4">
        <Icon className="h-8 w-8 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;