/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { createRootNavigator } from './app/config/routes';
import { isLogin } from './app/config/auth';

export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      login: false,
      checkLogin: false
    };
  }

  componentWillMount(){
    isLogin()
      .then((res) => this.setState({login: res, checkLogin: true}))
      .catch((err) => alert("An error occured"));
  }

  render() {
    const checkLogin = this.state.checkLogin;
    const logedin = this.state.login;

    if(!checkLogin){
      return null;
    }

    const Layout = createRootNavigator(logedin);
    return <Layout />;
  }
}
