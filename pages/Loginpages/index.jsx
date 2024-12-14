import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginPages = ({ isVisible, onClose }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (username && password) {
      alert(`Welcome, ${username}!`);
      onClose();
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <LinearGradient
          colors={["#7b42f6", "#b34df0"]}
          style={styles.buttonStart}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={styles.modalContent}>
            <Text style={styles.title}>Login</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.title}>Welcome back!</Text>
            <Icon style={{marginLeft:12}} name="smile-o" size={24} color="white" />
            </View>
           
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="white"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
               placeholderTextColor="white"
              secureTextEntry
              onChangeText={setPassword}
            />
            <View style={{flexDirection:'row',marginTop:12}}>
            <Text>Dont have account?</Text>
            <TouchableOpacity><Text style={{color:'blue',marginLeft:12}}>Sign Up !</Text></TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => console.log("Button Pressed")}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 15,
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    
  },
  modalContent: {
    width: 340,
    height: 340,
    padding: 20,
    alignItems: "center",
  },
  buttonStart: {
    borderRadius: 15,
    width: 340,
    height: 340,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 12,
  },
  button1: {
    borderRadius: 15,
    width: 175,
    height: 50,
    marginLeft:65,
    backgroundColor: "black",
    alignItems: "center",
    marginTop:12
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default LoginPages;
