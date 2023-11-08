import { lazy } from 'solid-js'
import { Route, Routes } from '@solidjs/router';
// Pages imports 
import Home from './pages/home';
import About from './pages/about';
import Terms from './pages/terms';
import Error from './pages/404';
import Logins from './pages/dashboard/logins';
const Products = lazy(() => import('./pages/products'));
const Product = lazy(() => import('./pages/product'));
const Admin = lazy(() => import('./pages/dashboard/admin'));
const Orders = lazy(() => import('./pages/dashboard/orders'));
const User = lazy(() => import('./pages/user'));
const ProductList = lazy(()=>import('./pages/dashboard/productList'))
import { MarketLayout, AuthLayout } from './components/layouts/layouts';
import { useAuthorized } from './contexts/auth';
import Forbidden from './pages/403';

function App() {
  const { user } = useAuthorized()

  return (

    <Routes>
      <Route path='/' component={MarketLayout}>
        <Route path='/' component={Home} />
        <Route path="/a-propos-de-nous" component={About} />
        <Route path="/termes-et-conditions" component={Terms} />
        <Route path="/produits">
          <Route path="/:id" component={Products} />
          <Route path="/recherche/produits/:id" component={Products} />
        </Route>
        <Route path='/produit/:id' component={Product} />
        <Route path='/authorization/utilisateurs/:id?' component={Logins} />
      </Route>

      <Route path='/auth' component={AuthLayout}  >
          <Route path='/utilisateur/administrateur' component={Admin} />  
          <Route path='/utilisateur/client/:id' component={User} />
          <Route path='/utilisateur/administrateur/liste-des-produits' component={ProductList} />
          <Route path='/commandes' component={Orders} />
      </Route>

      <Route path='/forbidden' component={Forbidden} />
      <Route path='/*' component={Error} />
    </Routes>
  );
};

export default App;