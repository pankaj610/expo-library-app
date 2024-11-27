import React from "react";
import { StyleSheet, View } from "react-native";
import { MyComponent } from "./src/MyComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <MyComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});