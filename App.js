//This is an example code to generate QR code//
import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      valueForQRCode: "Hello",
    };
  }

  getTextInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    this.setState({ valueForQRCode: this.state.inputValue });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <QRCode
          value={this.state.valueForQRCode}
          size={250}
          //Size of QRCode

          //Background Color of QRCode

          //Front Color of QRCode
        />
        <TextInput
          // Input to get the value to set on QRCode
          style={styles.TextInputStyle}
          onChangeText={(text) => this.setState({ inputValue: text })}
          underlineColorAndroid="transparent"
          placeholder="Enter text to Generate QR Code"
        />

        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.TextStyle}> Generate QR Code </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    paddingTop: 40,
  },

  TextInputStyle: {
    width: "100%",
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: "center",
  },

  button: {
    width: "100%",
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: "#ffcc33",
    marginBottom: 20,
  },

  TextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
  },
});
