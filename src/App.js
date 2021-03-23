import React, { useState } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import Layout from './Layout/Layout';
import { AppState }  from './context/AppState'

function App() {

  

  return (
    <React.Fragment>
      <BrowserRouter>
      <Layout>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/user:id' component={null}/>
        </Switch>
      </Layout>
        
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
