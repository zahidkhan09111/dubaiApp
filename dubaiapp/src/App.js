import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/orderHistoryScreen';
import OrderScreen from './screens/orderScreen';
import PaymentMethodScreen from './screens/paymentMethodScreen';
import PlaceOrderScreen from './screens/placeOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/profileScreen';
import RegisterScreen from './screens/registerScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';


function App() {
  const cart = useSelector((state)=> state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state)=> state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
    <div classNameName="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">Tehseen</Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length>0 && (
            <span className='badge'>{cartItems.length}</span>
          )}</Link>
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
              </Link>
              <ul className="dropdown-content">
              <li>
              <Link to="/profile">User Profile</Link>
              </li>
              <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                <li>
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          
        </div>
      </header>
      <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
      <Route path="/profile" component={ProfileScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
