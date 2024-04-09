import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import Game1 from './Game1';
import Game2 from './Game2';
import Game3 from './Game3';
import AddMoney from './AddMoney';
import Withdraw from './Withdraw';

const stack = createNativeStackNavigator();

const Navi = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
            <stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
            <stack.Screen name='Game1' component={Game1} options={{headerShown:false}}/>
            <stack.Screen name='Game2' component={Game2} options={{headerShown:false}}/>
            <stack.Screen name='Game3' component={Game3} options={{headerShown:false}}/>
            <stack.Screen name='AddMoney' component={AddMoney} options={{headerShown:false}}/>
            <stack.Screen name='Withdraw' component={Withdraw} options={{headerShown:false}}/>

        </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navi

const styles = StyleSheet.create({})