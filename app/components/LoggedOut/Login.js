import React, { Component } from "react";
import Logo from "./Logo";
import BackgroundPicture from "../../assets/photo-1524169113253-c6ba17f68498.jpeg";
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
  Alert
} from "react-native";
import HandleBack from "../../HandleBack";
import { LoginButton, AccessToken } from "react-native-fbsdk";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      email: "bigboi@yahoo.com",
      password: "1234",
      token: null
    };
  }

  getFacebookToken = async () => {
    try {
      let fbToken = await AccessToken.getCurrentAccessToken();
      if (fbToken) {
        return AsyncStorage.setItem("fbToken", fbToken.accessToken).then(
          data => {
            return fbToken;
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  getToken = async () => {
    try {
      let token = await AsyncStorage.getItem("token");
      if (token) {
        return token;
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getFacebookToken().then(fbToken => {
      if (fbToken) {
        return fetch(
          `https://graph.facebook.com/v3.2/me?fields=id,name&access_token=${
            fbToken.accessToken
          }`
        )
          .then(res => res.json())
          .then(data => {
            fetch("http://10.113.104.217:3000/facebook", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                facebookId: data.id,
                name: data.name
              })
            })
              .then(res => res.json())
              .then(data => {
                this.props.navigation.navigate("Home", {
                  user_info: data.user
                });
              });
          });
      } else {
        let promise = this.getToken().then(token => {
          if (token) {
            return fetch("http://10.113.104.217:3000/profile", {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
              .then(res => res.json())
              .then(data => {
                this.props.navigation.navigate("Home", {
                  user_info: data.user
                });
              });
          }
        });
      }
      // else {
      //   AccessToken.getCurrentAccessToken()
      //     .then(data => {
      //       debugger;
      //     })
      //     .catch(error => console.log(error));
      //
      // }
    });
  }

  handleLoginSubmit = () => {
    // you must use your ip address
    //instead of localhost, as it interferes with your emulator
    return fetch("http://10.113.104.217:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.user_info) {
          AsyncStorage.setItem("token", data.token).then(
            AsyncStorage.setItem(
              "user_info",
              JSON.stringify(data.user_info)
            ).then(
              this.props.navigation.navigate("Home", {
                user_info: data.user_info
              })
            )
          );
        } else {
          Alert.alert("Incorrect Email or Password");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  onBack = () => {
    return false; // false = android button click goes back a screen,
    //set to true to disable android back button
  };

  render() {
    return (
      <HandleBack onBack={this.onBack}>
        <ImageBackground
          source={BackgroundPicture}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

            <View style={styles.loginContainer}>
              <Logo />
              <Text style={styles.text}>CANDOR</Text>
              <TextInput
                onChangeText={text => this.setState({ email: text })}
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
              />
              <TextInput
                onChangeText={text => this.setState({ password: text })}
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                onSubmitEditing={() => this.handleLoginSubmit(this.state)}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleLoginSubmit()}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <View>
                <LoginButton
                  onLoginFinished={(error, result) => {
                    if (error) {
                      console.log("login has error: " + result.error);
                    } else if (result.isCancelled) {
                      console.log("login is cancelled.");
                    } else {
                      AccessToken.getCurrentAccessToken().then(data => {
                        AsyncStorage.setItem("fbToken", data.accessToken);

                        return fetch(
                          `https://graph.facebook.com/v3.2/me?fields=id,name&access_token=${
                            data.accessToken
                          }`
                        )
                          .then(res => res.json())
                          .then(data => {
                            fetch("http://10.113.104.217:3000/facebook", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({
                                facebookId: data.id,
                                name: data.name
                              })
                            })
                              .then(res => res.json())
                              .then(data => {
                                this.props.navigation.navigate("Home", {
                                  user_info: data.user
                                });
                              });
                          });
                      });
                    }
                  }}
                  onLogoutFinished={() => console.log("logout.")}
                />
              </View>
              {/* <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.buttonText}>Forgot Password</Text>
              </TouchableOpacity> */}

              <View style={styles.signupTextContent}>
                <Text style={styles.signupText}>
                  Don't have an account yet?
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("CreateAccount")
                  }
                >
                  <Text style={styles.signupButton}> Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </HandleBack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1.0)",
    fontSize: 18,
    marginVertical: 0
  },
  input: {
    width: 300,
    backgroundColor: "rgba(255,255,255, 1.0)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "black",
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
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
    justifyContent: "center"
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
