// App.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import UserPage from './pages/userPage';
import Prosumer from './pages/Prosumer';
import Consumer from './pages/Consumer';
import Investor from './pages/Investor';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="User">
        <Drawer.Screen name="User" component={UserPage} />
        <Drawer.Screen name="Prosumer" component={Prosumer} />
        <Drawer.Screen name="Consumer" component={Consumer} />
        <Drawer.Screen name="Investor" component={Investor} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
