/* eslint-disable no-undef */
import Home from '../views/pages/home';
import Transaction from '../views/pages/transaction';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/transaction': Transaction,
  // '/report': Report,
  // '/managements': Management,
  // '/account': Account,
};

export default routes;