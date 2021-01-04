import React from 'react';
import Navigation from './components/Nav/Navigation';
import './App.css';
import { Route } from 'react-router-dom';
import Products from './containers/Products';
import Favorites from './containers/Favorites';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navigation />
        <main>
          <Route path="/" exact component={Products} />
          <Route path="/favorites" component={Favorites} />
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
