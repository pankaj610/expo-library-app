import React from "react";
import { StyleSheet, View } from "react-native";
import RootLayout from "./app/_layout";


export default function App() {
  return (
    <View style={styles.container}>
      <RootLayout />
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