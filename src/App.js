import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import MainRouter from './Pages/MainRouter';
import FirstRouter from './Pages/FirstRouter';
import SecondRouter from './Pages/SecondRouter';
import AllMeetupsPage from './Pages/AllMeetups';
import NewMeetupsPage from './Pages/NewMeetups';
import FavoritesPage from './Pages/Favorites';
import MainNavigation from './layout/MainNavigation'
import Layout from './layout/Layout'
function App(){
  return(
    <Layout>
    <Switch>
    <Route path="/" exact>
        <AllMeetupsPage/>
    </Route>
    <Route path="/newmeetups">
        <NewMeetupsPage/>
    </Route>
    <Route path="/favorites">
        <FavoritesPage/>
    </Route>
    </Switch>
    </Layout>
  );
}

export default App;
