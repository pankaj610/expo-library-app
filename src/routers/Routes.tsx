import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BarChart, Grid } from 'react-native-svg-charts';



// Screens
const HomeScreen = () => {
  // Sample data for the chart
  const data = [50, 10, 40, 95, 85, 20, 35, 53, 24, 50];

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 30, bottom: 30 }}
        spacingInner={0.2} // Adjust space between bars
      >
        <Grid />
      </BarChart>
    </View>
  );
};

const ContactScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Contact Screen</Text>
  </View>
);

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'call' : 'call-outline';
        }

        // Return the appropriate icon
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#eee' },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Contact" component={ContactScreen} />
  </Tab.Navigator>
);

// Root Stack Navigator (for potential future extensions)
const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={TabNavigator} />
  </Stack.Navigator>
);

// App Entry Point
export function RootRoutes() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['http://localhost:8081', 'myapp://'], // Customize prefixes as per your app's URL
        config: {
          screens: {
            Main: {
              screens: {
                Home: 'home',
                Contact: 'contact',
              },
            },
          },
        },
      }}
    >
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  chart: {
    height: 200,
  },
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold', color: 'black' },
});