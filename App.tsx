// @ts-nocheck
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FirstScreen from './FirstScreen'; 
import SecondScreen from './SecondScreen'; 
import Menu from './Menu';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <Menu />}>
        <Drawer.Screen name="FirstScreen" component={FirstScreen} />
        <Drawer.Screen name="SecondScreen" component={SecondScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
