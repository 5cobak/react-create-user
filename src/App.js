import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
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
          <Route path='/user:id' component={null}/>
        </Switch>
      </Layout>
        
      </BrowserRouter>
    </Provider>
      
    
  );
}

export default App;
