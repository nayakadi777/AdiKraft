import React , { Component }from 'react';
import { Switch ,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './components/HeaderComponent/HeaderComponent';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
        </Switch>      
      </div>
    );
  }
}


export default App;
