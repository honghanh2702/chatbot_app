import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import LoginPages from "../Loginpages";

const Homepages = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/download.gif")}
        colors={["rgba(70, 15, 158, 0.9)", "black"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.content}>
        <LoginPages isVisible={modalVisible} onClose={toggleModal} />
          <View
            style={{ width: 35, height: 35, borderRadius: 20, marginLeft: 50 }}
          >
            <Image
              source={require("../../assets/b6371c70-75a6-4862-b3d7-f3cb78eb96d8.png")}
              style={{
                width: 40,
                height: 40,
                alignContent: "flex-end",
                justifyContent: "flex-end",
                borderRadius: 40,
                marginTop: -110,
                marginLeft: 265,
              }}
            />
          </View>

          <Image
            source={require("../../assets/chat_Bot.png")}
            style={styles.gif}
          />
          <View style={{borderWidth:0.5,borderColor:'white',borderRadius:10}}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get ready for the new era of AI
          </Text>
          </View>
        
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <TouchableOpacity onPress={() => console.log("Button Pressed")}>
              <LinearGradient
                colors={["#7b42f6", "#b34df0"]}
                style={styles.button}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 15,
                    fontWeight: "bold",
                  }}
                >
                  Introduce
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Button Pressed")}>
              <LinearGradient
                colors={["#7b42f6", "#b34df0"]}
                style={styles.button1}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
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
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={toggleModal}>
              <LinearGradient
                colors={["#7b42f6", "#b34df0"]}
                style={styles.buttonStart}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: 5,
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  Get start
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 5 }}>
            <View
              style={{
                backgroundColor: "red",
                width: 80,
                height: 70,
                borderRadius: 20,
              }}
            >
              <Image
                source={require("../../assets/flatIocn.gif")}
                style={{ width: "100%", height: 80, borderRadius: 20 }}
              />
              <Text
                style={{
                  color: "white",
                  marginLeft: 15,
                  marginTop: 12,
                  fontWeight: "bold",
                }}
              >
                Feautre
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "red",
                width: 80,
                height: 70,
                borderRadius: 20,
                marginLeft: 60,
              }}
            >
              <Image
                source={require("../../assets/trophy.gif")}
                style={{ width: "100%", height: 80, borderRadius: 20 }}
              />
              <Text
                style={{
                  color: "white",
                  marginLeft: 15,
                  marginTop: 12,
                  fontWeight: "bold",
                }}
              >
                About
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "red",
                width: 80,
                height: 70,
                borderRadius: 20,
                marginLeft: 50,
              }}
            >
              <Image
                source={require("../../assets/Confetti.gif")}
                style={{ width: "100%", height: 80, borderRadius: 20 }}
              />
              <Text
                style={{
                  color: "white",
                  marginLeft: 15,
                  marginTop: 12,
                  fontWeight: "bold",
                }}
              >
                Blog
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 180,
    paddingHorizontal: 15,
  },
  gif: {
    width: 350,
    height: 350,
    marginTop: -120,
    marginLeft: 10,
  },
  buttonStart: {
    borderRadius: 15,
    width: 365,
    height: 50,
  },
  button: {
    borderRadius: 15,
    width: 180,
    height: 50,
  },
  button1: {
    borderRadius: 15,
    width: 175,
    height: 50,
    marginLeft: 12,
  },
});

export default Homepages;
