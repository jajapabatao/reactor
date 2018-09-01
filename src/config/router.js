/* @flow */

import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Home from "../screens/home";
import Login from "../screens/login";

export const MainStack = createStackNavigator({
  Home: {
    screen: Home
  }
});

export const LoginStack = createStackNavigator({
  Login: {
    screen: Login
  }
});
