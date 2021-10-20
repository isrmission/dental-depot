import './App.css';
import Navigation from './Public/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details/Details';
import AuthProvider from './contexts/AuthProvider';
import SignUp from './Pages/Login/Signup/SignUp';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Public/Footer/Footer';
import FullServices from './Pages/FullServices/FullServices';
import FullTeam from './Public/FullTeam/FullTeam';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/allservices">
              <FullServices></FullServices>
            </Route>
            <Route path="/doctors">
              <FullTeam></FullTeam>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
