import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from './pages/Home';
import AddTextPage from './pages/AddText';
import TextsPage from './pages/Texts';
import AdminPage from './pages/Admin';
import LoginPage from './pages/Login';
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
            <li>
              <Link to="/add-text">Add text</Link>
            </li>
            <li>
              <Link to="/texts">Texts</Link>
            </li>
          </ul>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/add-text" component={AddTextPage} />
          <PrivateRoute path="/texts" component={TextsPage} />
          <PrivateRoute path="/admin" component={AdminPage} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
