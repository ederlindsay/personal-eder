import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Target, Zap } from 'lucide-react';

const LeadershipValuesSection: React.FC = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t('leadership_values.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('leadership_values.intro_short')}
        </p>
        <div className="text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
          <p>&ldquo;{t('leadership_values.content')}&rdquo;</p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipValuesSection;