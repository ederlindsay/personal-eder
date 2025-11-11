import React from 'react';
import {
  SiSas, SiRapidminer, SiIbm, SiIbmwatson, SiTableau, SiQlik, SiPython,
  SiOracle, SiMysql, SiMicrosoftsqlserver, SiTeradata, SiSinglestore,
  SiDocker, SiLinux, SiWindows, SiApple, SiMicrosoftoffice, SiPhp
} from 'react-icons/si';
import { Database, Users } from 'lucide-react';

interface SkillIconProps {
  name: string;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, className }) => {
  const normalizedName = name.toLowerCase().trim();

  const iconMap: { [key: string]: React.ElementType } = {
    'sas': SiSas,
    'rapidminer': SiRapidminer,
    'ibm analytics': SiIbm,
    'watson': SiIbmwatson,
    'tableau': SiTableau,
    'qlikview': SiQlik,
    'python': SiPython,
    'sql': Database,
    'oracle': SiOracle,
    'mysql': SiMysql,
    'sql server': SiMicrosoftsqlserver,
    'teradata': SiTeradata,
    'memsql': SiSinglestore, // MemSQL is now SingleStore
    'docker': SiDocker,
    'linux': SiLinux,
    'windows': SiWindows,
    'macos': SiApple,
    'crm tools': Users,
    'ms office': SiMicrosoftoffice,
    'php': SiPhp,
  };

  const IconComponent = iconMap[normalizedName];

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  return null; // Return null if no icon is found
};

export default SkillIcon;