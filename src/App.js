import React from 'react';
import { Header, Home, About, Portfolio, Contact, Blog } from './components/common'
import { Switch, Route, withRouter } from 'react-router-dom'

import "./App.css"

const { PUBLIC_URL } = process.env; 

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <BrowserRouter basename={PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
