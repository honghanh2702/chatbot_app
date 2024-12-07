import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepages from "./pages/Homepages";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Homepages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
