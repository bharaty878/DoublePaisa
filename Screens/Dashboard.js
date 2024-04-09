import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Home from './Home';
import Wallet from './Wallet';
import Profile from './Profile';


const bottom = createBottomTabNavigator();

const Dashboard = () => {
  return (    
      <bottom.Navigator>
         <bottom.Screen name='Home' component={Home} options={{headerShown:false,tabBarActiveTintColor:"red",tabBarIcon:()=>(<Icon name="home" color={"gold"} size={22}></Icon>)}}/>
         <bottom.Screen name='Wallet' component={Wallet} options={{headerShown:false,tabBarActiveTintColor:"red",tabBarIcon:()=>(<Icon name="wallet" color={"gold"} size={22}></Icon>)}}/>
         <bottom.Screen name='Profile' component={ Profile} options={{headerShown:false,tabBarActiveTintColor:"red",tabBarIcon:()=>(<Icon name="user-alt" color={"gold"} size={22}></Icon>)}}/>
      </bottom.Navigator>

  )
}

export default Dashboard

const styles = StyleSheet.create({})