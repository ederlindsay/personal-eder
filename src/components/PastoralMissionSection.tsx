import React from 'react';
import { useTranslation } from 'react-i18next';
import SegmentedButtons from './SegmentedButtons';
import AccordionContentItem from './AccordionContentItem';

interface PastoralMissionSectionProps {
  id: string;
}

const PastoralMissionSection: React.FC<PastoralMissionSectionProps> = ({ id }) => {
  const { t } = useTranslation();

  const items = [
    {
      value: 'pastor',
      label: t('pastoral_mission.pastor.title'),
      content: (
        <AccordionContentItem imageSrc="images/pastor-escritor-mentor.png" imagePosition="left">
          <p>{t('pastoral_mission.pastor.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'book',
      label: t('pastoral_mission.book.title'),
      content: (
        <AccordionContentItem imageSrc="images/livro-desista-do-controle.png" imagePosition="right">
          <p>{t('pastoral_mission.book.content')}</p>
        </AccordionContentItem>
      ),
    },
    {
      value: 'social_projects',
      label: t('pastoral_mission.social_projects.title'),
      content: (
        <AccordionContentItem imageSrc="images/projetos-sociais.png" imagePosition="left">
          <p>{t('pastoral_mission.social_projects.content')}</p>
        </AccordionContentItem>
      ),
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-muted text-foreground border-t">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {t('pastoral_mission.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-left">
          {t('pastoral_mission.intro_short')}
        </p>
        <SegmentedButtons items={items} defaultValue="pastor" />
      </div>
    </section>
  );
};

export default PastoralMissionSection;