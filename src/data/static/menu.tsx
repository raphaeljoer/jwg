import {
  FiHome,
  FiUsers,
  FiAward,
  FiTool,
} from 'react-icons/fi';

export const mainMenu = [
  {
    label: 'Início',
    link: '/',
    icon: FiHome,
  },
  {
    label: 'Peças',
    link: '/pecas',
    icon: FiTool,
  },
  {
    label: 'Sobre',
    link: '/#sobre',
    icon: FiAward,
  },
  {
    label: 'Parceiros',
    link: '/#parceiros',
    icon: FiUsers,
  },
];

export default mainMenu;
