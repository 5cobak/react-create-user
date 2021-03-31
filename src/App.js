import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Profile } from './pages/Profile/Profile'
import { Header } from './components/Header/Header'
import Layout from './Layout/Layout';
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>

      <Layout>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/user/:id' component={Profile}/>
        </Switch>
      </Layout>
        
    </Provider>
      
    
  );
}

export default App;
