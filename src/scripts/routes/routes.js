/* eslint-disable no-undef */
import Topup from '../views/overlays/topup';
import Notif from '../views/overlays/notif';
import Home from '../views/pages/home';
import Report from '../views/pages/report';
import Transaction from '../views/pages/transaction';
import Kasir from '../views/overlays/kasir';

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
  '/home&topup': Topup,
  '/home&kasir': Kasir,
};

export default routes;
