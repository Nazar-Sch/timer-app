import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Timer from './pages/timer';
import SignPage from './pages/sign';
import LoginPage from './pages/login';
import PrivateRoute from './pages/private';
import { AuthProvider } from './components/context/authContext'

function App() {
  const [isMobile, setIsMobile] = React.useState(false)

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/sign" ><SignPage /></Route>
          <Route exact path="/login"><LoginPage /></Route>
          <PrivateRoute exact path="/" component={Timer} />
          {/* <Route exact path="/sign" component={SignPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={Timer} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
