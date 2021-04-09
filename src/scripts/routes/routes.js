/* eslint-disable no-undef */
import Notif from '../views/overlays/notif';
import Home from '../views/pages/home';
import Report from '../views/pages/report';
import Transaction from '../views/pages/transaction';

const routes = {
  // PAGES
  '/': Home, // default page
  '/home': Home,
  '/transaction': Transaction,
  '/report': Report,
  // '/managements': Management,
  // '/account': Account,
  // OVERLAYS
  '/home&notif': Notif,
};

export default routes;
