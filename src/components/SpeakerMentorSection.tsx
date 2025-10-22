import React from 'react';
import { useTranslation } from 'react-i18next';
// Removed DetailDialog import
// Removed Button import as it's no longer used for a dialog trigger

interface SpeakerMentorSectionProps {
  id: string;
}

const SpeakerMentorSection: React.FC<SpeakerMentorSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="py-16 md:py-24 bg-background text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          {t('speaker_mentor.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
           <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/eder-speaker/800/600"
              alt={t('speaker_mentor.title')}
              className="w-full h-full object-cover"
            />
            {/* Removed the click overlay as there's no dialog */}
          </div>
          <p className="text-lg text-muted-foreground">{t('speaker_mentor.content')}</p>
          {/* Removed Button as it was for dialog */}
        </div>
      </div>
    </section>
  );
};

export default SpeakerMentorSection;