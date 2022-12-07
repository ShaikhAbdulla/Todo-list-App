import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
// import TextField from './Screens/Textfield';






const Stack = createNativeStackNavigator();

const App = () => {

  // const[header,setHeader]=useState('')


return (
    <View style={styles.container}>
      {/* <Home/> */}
      <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Home"
          component={Home}
          Headershown={false}
        />
        {/* <Stack.Screen
          name="Back"
          component={TextField}
          // header={header}
          // setHeader={setHeader}
           /> */}
      </Stack.Navigator>
    </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 2,

   
    

  },

});

export default App;
