import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {About} from './components/About'
import {Users} from './components/Users'
import {NavbarComponent} from './components/NavBar'
function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container p-2">
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" component={Users}/>
        </Switch>
      </div>

    </Router>
    
  );
}

export default App;
