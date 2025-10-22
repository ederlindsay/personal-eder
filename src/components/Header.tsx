import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground">
          {t('header.title')}
        </Link>
        <nav className="flex items-center space-x-4">
          {/* Navigation links can go here if needed, for now just language switcher */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;