import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import TopBar from './common/TopBar';
import AuthProvider from './AuthProvider';
import 'src/styles/global.scss';
import 'normalize.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <TopBar />
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
