import { Alert, Image, StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
import { addUser } from './Redux/UserSlice';
import {useSelector} from 'react-redux'


const Home = (Props) => {
  const {navigation}=Props;
  const Dispatch = useDispatch();

  const data = useSelector(state=>state.user.data)
  
  const Game=()=>{
    navigation.navigate("Game1")
  
  }
  const Game22=()=>{
    if(data > 0){
  Dispatch(addUser(data-1)); 
    navigation.navigate("Game2")
  }else{
    Alert.alert("Please Buy Coins Your Wallet is Empty")
}
  }
  const Game33=()=>{
    if(data > 0){
    Dispatch(addUser(data-10)); 
    navigation.navigate("Game3")
    }else{
        Alert.alert("Please Buy Coins Your Wallet is Empty")
    }
  }

  return (
    <View style={styles.view1}>
      <Text style={styles.txt1}> Double Paisa </Text>

      <View style={styles.viewWallet}>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.viewWallet1}>Added Coins : {data}</Text>
        </View>
            <Text style={styles.viewWallet1}>Winning Coins : {200}</Text>
      </View>
    
      <View style={styles.view2}>
        <Text style={styles.Btntxt}>Practice</Text>
      <TouchableOpacity style={styles.Btn1} onPress={()=>Game()}>
             <Text style={styles.Btntxt1}>Free</Text>
       </TouchableOpacity>
      </View>
      <Text style={{margin:"3%"}}>3 Players : 1 Winner</Text>
      <View style={styles.view3}>
        <Text style={styles.Btntxt2}>Prize 2 Coin</Text>
      <TouchableOpacity style={styles.Btn1} onPress={()=>Game22()}>
              <Text style={styles.Btntxt33}>Entry Fee</Text>
             <Text style={styles.Btntxt3}>    1</Text>
             <Image source={require('../images/img2.png')} style={styles.img2}/>
       </TouchableOpacity>
      </View>
      <Text style={{margin:"3%"}}>3 Players : 1 Winner</Text>
      <View style={styles.view3}>
        <Text style={styles.Btntxt2}>Prize 20 Coin</Text>
      <TouchableOpacity style={styles.Btn1} onPress={()=>Game33()}>
              <Text style={styles.Btntxt33}>Entry Fee</Text>
             <Text style={styles.Btntxt3}>10</Text>
             <Image source={require('../images/img2.png')} style={styles.img2}/>
       </TouchableOpacity>
      </View>
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  view1:{
       flex:1,
       backgroundColor:"white"
  },
  txt1:{
     color:"black",
     fontFamily:"cursive",
     marginTop:"2%",
     alignSelf:"center",
     fontSize:40,
     fontWeight:"900"
    
  },
  view2:{
    flexDirection:"row",
    alignItems:"center",
     backgroundColor:"gold",
     borderRadius:10,
     margin:"2%"
  },
  Btn1:{
    
    margin:"5%",
    borderRadius:20
  },
  Btntxt:{
       color:"white",
       fontWeight:"800",
       fontSize:20,
       marginLeft:"5%"
  },
  Btntxt1:{
        color:"white",
        fontSize:30,
        marginLeft:"55%",
        backgroundColor:"darkblue",
        borderRadius:10,
        textAlign:"center",
        fontWeight:"700"
        
  },
  view3:{
    flexDirection:"row",
     backgroundColor:"gold",
     borderRadius:10,
     margin:"2%"

  },
  Btntxt2:{
    color:"red",
    fontWeight:"800",
    fontSize:20,
    marginLeft:"2%",
    marginTop:"12%"
},
  img2:{
    width: 30,
    height: 30,
    position:"relative",
    left:"85%",
    top:"-40%"
  },
  Btntxt3:{
    color:"white",
    fontSize:30,
    marginLeft:"50%",
    backgroundColor:"darkblue",
    borderRadius:10,
    textAlign:"center",
    fontWeight:"700"
},
Btntxt33:{
        alignSelf:"flex-end",
        marginRight:"10%",
        color:"black"
},
viewWallet:{
   height:100,
  alignItems:"flex-start",
   backgroundColor:"gold",
   borderRadius:10,
   margin:"2%"
},
viewWallet1:{
  margin:"2%",
  color:"white",
  fontSize:20,
  fontWeight:"700"
},
btn34:{
  width: "25%",
  marginLeft:"21%",
  marginTop:"2%",
  height: 30,
  borderRadius:10,
  backgroundColor:"darkblue"
},
btntxt34:{
  color:"white",
  textAlign:"center",
  fontSize:20,
  fontWeight:"700"
},
btn35:{
  width: "25%",
  marginLeft:"68%",
  marginTop:"-10%",
  height: 30,
  borderRadius:10,
  backgroundColor:"darkblue"
},
btntxt35:{
  color:"white",
  textAlign:"center",
  fontSize:20,
  fontWeight:"700"
}
})