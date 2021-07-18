import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.navigator initialRouteName = "Home" screenOptions={{headerShown : false}} >
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftscreen}/>
          <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
          <Stack.Screen name = "StarMap" component = {StarMapScreen}/>
        </Stack.navigator>
      </NavigationContainer>

    </View>
  );
}
}

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
