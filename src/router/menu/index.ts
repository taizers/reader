import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';

import { Sidebar } from '../../constants/enums';


export const menuItems = [
  {
    title: Sidebar.Main,
    path: '/',
    icon: GroupIcon,
    accessWithAuth: false, 
  },
  {
    title: Sidebar.Users,
    path: '/users',
    icon: GroupIcon,
    accessWithAuth: true, 
  },
];

export const secondMenuItems = [

  {
    title: Sidebar.Login,
    path: '/login',
    icon: LoginIcon,
    accessWithAuth: false, 
  },
  {
    title: Sidebar.Logout,
    path: '/logout',
    icon: LogoutIcon,
    accessWithAuth: true, 
  },
  {
    title: Sidebar.Profile,
    path: '/profile',
    icon: AccountCircleIcon,
    accessWithAuth: true, 
  },
];
