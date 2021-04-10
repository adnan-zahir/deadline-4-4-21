/* eslint-disable no-undef */
import Topup from '../views/overlays/topup';
import Notif from '../views/overlays/notif';
import Home from '../views/pages/home';
import Report from '../views/pages/report';
import Transaction from '../views/pages/transaction';
import Kasir from '../views/overlays/kasir';
import Management from '../views/pages/management';
import Account from '../views/pages/account';
import Debt from '../views/overlays/debt';

const routes = {
  // PAGES
  '/': Home, // default page
  '/home': Home,
  '/transaction': Transaction,
  '/report': Report,
  '/management': Management,
  '/account': Account,
  // OVERLAYS
  '/home&notif': Notif,
  '/home&topup': Topup,
  '/home&kasir': Kasir,
  '/transaction&debt': Debt,
};

export default routes;
