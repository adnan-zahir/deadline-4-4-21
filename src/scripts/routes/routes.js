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
import PersonalData from '../views/overlays/personal-data';
import ChangeEmail from '../views/overlays/change-email';
import ChangePhone from '../views/overlays/change-phone';
import ChangePass from '../views/overlays/change-pass';
import ChangePin from '../views/overlays/change-pin';
import ForgotPin from '../views/overlays/forgot-pin';
import ManagementProduct from '../views/overlays/management-product';
import AddProduct from '../views/overlays/add-product';
import ManagementCategory from '../views/overlays/management-category';
import AddCategory from '../views/overlays/add-category';
import ManagementCustomer from '../views/overlays/management-customer';
import AddCustomer from '../views/overlays/add-customer';

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
  '/management&modul_produk': ManagementProduct,
  '/management&add_produk': AddProduct,
  '/management&modul_kategori': ManagementCategory,
  '/management&add_kategori': AddCategory,
  '/management&modul_pelanggan': ManagementCustomer,
  '/management&add_pelanggan': AddCustomer,
  '/account&personal_data': PersonalData,
  '/account&change_email': ChangeEmail,
  '/account&change_phone': ChangePhone,
  '/account&change_pass': ChangePass,
  '/account&change_pin': ChangePin,
  '/account&forgot_pin': ForgotPin,
};

export default routes;
