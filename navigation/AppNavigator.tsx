import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/FormScreen';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: 'To-Do List',
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Login');
                }}
                title="Logout"
                // color="#fff"
              />
            ),
            headerStyle: {
              backgroundColor: '#007bff',
            },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitle: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
