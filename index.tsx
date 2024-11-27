import { registerRootComponent } from "expo";

import { ExpoRoot } from "expo-router";


// https://www.reddit.com/r/expo/comments/1fdeazy/how_to_define_custom_entry_point_in_expo_file/?rdt=36374

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  //Path with src folder

  return (
    <ExpoRoot
      context
      ={ctx} />
  );
}

registerRootComponent(App);