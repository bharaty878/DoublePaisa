import {  StyleSheet,StatusBar, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = (Props) => {
    const {navigation} = Props;
    useEffect(() => {
       setTimeout(() => {
        navigation.navigate("Dashboard")
       }, 1000);  
    }, [])
    
  return (
    <View style={styles.view1}>
      <StatusBar hidden/>
        
      <Text style={styles.txt1}>DOUBLE PAISA</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    view1:{
        flex:1,
        justifyContent:"center",        
        backgroundColor:"gold"
    },
    txt1:{
         marginTop:"10%",
        color:"white",
        textAlign:"center",
        fontSize:40,
        fontFamily:"serif",
        opacity:0.8,
        fontWeight:"900"
    },
    img1:{
        width: 200,
        height: 200,
        alignSelf:"center"
    }
})