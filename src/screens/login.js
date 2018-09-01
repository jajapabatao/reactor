/* @flow */

import React, { Component } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import CustomButton from "../components/button";
import CustomInput from "../components/input";
import CustomLoading from "../components/loading";
import Styles, { COLOR } from "../config/styles";

import { bindActionCreators } from "redux";
import * as authActions from "../actions/authenticate";
import { connect } from "react-redux";

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
    headerTintColor: COLOR.HEADER_TINT,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: COLOR.HEADER_BACKGROUND
    }
  }); // navigationOptions

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  renderError(error) {
    if (error) {
      return (
        <View
          style={{
            height: 40,
            padding: 8,
            borderWidth: 1,
            borderColor: COLOR.ERROR_TEXT
          }}
        >
          <Text style={{ color: COLOR.ERROR_TEXT }}>{error}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar
          backgroundColor={COLOR.STATUS_BAR}
          barStyle="light-content"
        />

        {this.renderError(this.props.state.authError)}

        <View style={{ height: 8 }} />

        <CustomInput
          icon="user"
          value={this.state.username}
          placeholder="Username"
          onChangeText={v => this.setState({ username: v })}
        />
        <View style={{ height: 8 }} />
        <CustomInput
          icon="lock"
          value={this.state.password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={v => this.setState({ password: v })}
        />
        <View style={{ height: 16 }} />
        <CustomButton
          onPress={() =>
            this.props.actions.login(this.state.username, this.state.password)
          }
          title={"LOGIN"}
        />
        <CustomLoading loading={this.props.state.requestingAuth} />
      </View>
    );
  }
}

export default connect(
  state => ({ state: state.authenticate }),
  dispatch => ({
    actions: bindActionCreators(authActions, dispatch)
  })
)(Login);
