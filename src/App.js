import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Profile } from './pages/Profile/Profile'
import { Header } from './components/Header'
import Layout from './Layout/Layout';
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Layout>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/user/:id' component={Profile}/>
        </Switch>
      </Layout>
        
      </BrowserRouter>
    </Provider>
      
    
  );
}

export default App;
