import React, { Component } from "react";
import Logo from "./Logo";
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";
import HandleBack from "../../HandleBack";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  onBack = () => {
    return false; // false = android button click goes back a screen,
    //set to true to disable android back button
  };

  render() {
    return (
      <HandleBack onBack={this.onBack}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

          <View style={styles.loginContainer}>
            <Logo />
            <Text style={styles.text}>CANDOR</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ffffff"
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.buttonText}>Forgot Password</Text>
            </TouchableOpacity>

            <View style={styles.signupTextContent}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("CreateAccount")}
              >
                <Text style={styles.signupButton}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </HandleBack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 18,
    marginVertical: 0
  },
  input: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  button: {
    backgroundColor: "#1c313a",
    borderRadius: 25,
    width: 150,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  signupTextContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  },
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 60
  }
});
