import React from 'react';
import { useTranslation } from 'react-i18next';

interface SpeakerMentorSectionProps {
  id: string;
}

const SpeakerMentorSection: React.FC<SpeakerMentorSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('speaker_mentor.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('speaker_mentor.intro_short')}
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-lg text-muted-foreground text-left">{t('speaker_mentor.content')}</p>
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/eder-speaker/800/600"
              alt={t('speaker_mentor.title')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerMentorSection;