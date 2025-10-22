import React from 'react';
import HeroSection from '@/components/HeroSection';
import OriginsPurposeSection from '@/components/OriginsPurposeSection';
import EducationLearningSection from '@/components/EducationLearningSection';
import FaithResilienceSection from '@/components/FaithResilienceSection';
import FamilySection from '@/components/FamilySection';
import PastoralMissionSection from '@/components/PastoralMissionSection';
import CareerEntrepreneurshipSection from '@/components/CareerEntrepreneurshipSection';
import RecognitionsAchievementsSection from '@/components/RecognitionsAchievementsSection';
import ProfessionalExperienceSection from '@/components/ProfessionalExperienceSection';
import SpeakerMentorSection from '@/components/SpeakerMentorSection';
import LeadershipValuesSection from '@/components/LeadershipValuesSection';
import InternationalExperienceSection from '@/components/InternationalExperienceSection';
import TechnicalSkillsSection from '@/components/TechnicalSkillsSection';
import RelationalCharacteristicsSection from '@/components/RelationalCharacteristicsSection';
import PersonalPhilosophySection from '@/components/PersonalPhilosophySection';

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <HeroSection id="hero" />
      <OriginsPurposeSection id="origins-purpose" />
      <EducationLearningSection id="education-learning" />
      <FaithResilienceSection id="faith-resilience" />
      <FamilySection id="family" />
      <PastoralMissionSection id="pastoral-mission" />
      <CareerEntrepreneurshipSection id="career-entrepreneurship" />
      <RecognitionsAchievementsSection id="recognitions-achievements" />
      <ProfessionalExperienceSection id="professional-experience" />
      <SpeakerMentorSection id="speaker-mentor" />
      <LeadershipValuesSection id="leadership-values" />
      <InternationalExperienceSection id="international-experience" />
      <TechnicalSkillsSection id="technical-skills" />
      <RelationalCharacteristicsSection id="relational-characteristics" />
      <PersonalPhilosophySection id="personal-philosophy" />
    </div>
  );
};

export default Index;