import React from 'react';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Pages
import {Home} from './pages/home';
import {Model} from './pages/model';
//components
import Header from './components/Header';
//Styles
import './styles.scss';

function App() {
  const imageDetails = {
    width: 400,
    height: 440,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({location}) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path="/model/:id"
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
