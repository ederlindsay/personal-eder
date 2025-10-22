import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

const NavigationMenuComponent = () => {
  const { t } = useTranslation();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#hero" className={navigationMenuTriggerStyle()}>
            {t('header.home')}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('header.biography')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#origins-purpose" title={t('origins_purpose.title')}>
                {t('origins_purpose.intro_short')}
              </ListItem>
              <ListItem href="#family" title={t('family.title')}>
                {t('family.close_family.summary')}
              </ListItem>
              <ListItem href="#faith-resilience" title={t('faith_resilience.title')}>
                {t('faith_resilience.mission.content').substring(0, 100)}...
              </ListItem>
               <ListItem href="#education-learning" title={t('education_learning.title')}>
                {t('education_learning.academic.content').substring(0, 100)}...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('header.career')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#career-entrepreneurship" title={t('career_entrepreneurship.title')}>
                {t('career_entrepreneurship.companies.content').substring(0, 100)}...
              </ListItem>
              <ListItem href="#professional-experience" title={t('professional_experience.title')}>
                 {t('professional_experience.consulting.content').substring(0, 100)}...
              </ListItem>
              <ListItem href="#recognitions-achievements" title={t('recognitions_achievements.title')}>
                 {t('recognitions_achievements.content').substring(0, 100)}...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t('header.profile')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#leadership-values" title={t('leadership_values.title')}>
                {t('leadership_values.content').substring(0, 100)}...
              </ListItem>
              <ListItem href="#speaker-mentor" title={t('speaker_mentor.title')}>
                {t('speaker_mentor.content').substring(0, 100)}...
              </ListItem>
              <ListItem href="#international-experience" title={t('international_experience.title')}>
                {t('international_experience.content').substring(0, 100)}...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

         <NavigationMenuItem>
          <NavigationMenuTrigger>{t('header.skills')}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#technical-skills" title={t('technical_skills.title')}>
                {t('technical_skills.skills').substring(0, 100)}...
              </ListItem>
              <ListItem href="#relational-characteristics" title={t('relational_characteristics.title')}>
                {t('relational_characteristics.characteristics').substring(0, 100)}...
              </ListItem>
              <ListItem href="#personal-philosophy" title={t('personal_philosophy.title')}>
                {t('personal_philosophy.explanation')}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;