import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from My Library!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#eee",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});