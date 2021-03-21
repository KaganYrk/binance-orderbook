import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SellBook from '../Views/SellOrder';
import BuyBook from '../Views/BuyOrder';

const Stack = createStackNavigator();
function SellBookStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#1E2126' }

      }}>
      <Stack.Screen name="BTC/USD Sell Order" component={SellBook} options={{
        headerStyle: {
          backgroundColor: '#1E2126',
          borderBottomWidth: 1,
        },
        headerTitleStyle: { alignSelf: 'center' },
        headerTintColor: '#fff', headerleft: <FontAwesome name="area-chart" size={30} color="red" />
      }} />
    </Stack.Navigator>
  );
};
function BuyBookStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#1E2126' }
      }}>
      <Stack.Screen name="BTC/USD Buy Order" component={BuyBook} options={{
        headerStyle: {
          backgroundColor: '#1E2126',
         
          borderBottomWidth: 1,
        },
        headerTitleStyle: { alignSelf: 'center', },
        headerTintColor: '#fff', headerleft: <FontAwesome name="area-chart" size={30} color="red" />
      }} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        activeTintColor:'red',
        labelStyle:{marginBottom:15},
        style:{
          borderColor:'white',
          backgroundColor:'#1E2126',
        }
        
      }}>
        <Tab.Screen name="ALIŞ " component={BuyBookStack}  />
        <Tab.Screen name="SATIŞ " component={SellBookStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
