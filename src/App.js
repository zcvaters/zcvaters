import React from 'react';
import { Header, Home, About, Portfolio, Contact, Blog } from './components/common'
import { Switch, Route, withRouter } from 'react-router-dom'

import "./App.css"

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
