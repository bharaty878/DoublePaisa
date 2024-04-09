
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './Redux/UserSlice';

const Wallet = () => {
  const dispatch = useDispatch();

  // Redux state
  const money = useSelector(state => state.user.data);

  const [withdraws, setWithdraws] = useState("");

  const Add = () => {
    const updatedMoney = money + 100;
    dispatch(addUser(updatedMoney));
  }

  const Withs = () => {
    if (money > 0 && withdraws <= money) {
      const updatedMoney = money - parseInt(withdraws);
      dispatch(addUser(updatedMoney));
    } else {
      Alert.alert("Invalid Withdrawal", "Please enter a valid amount to withdraw.");
    }
  }

  return (
    <View style={styles.View1}>
      <Text style={styles.Viewtxt1}>Wallet</Text>
      <View style={styles.View2}>
        <Text style={styles.Viewtxt2}> Added Coins : {money}</Text>
        <Text style={styles.Viewtxt2}> Winning Coins : {0}</Text>
      </View>
      <View style={styles.View3}>
        <TouchableOpacity style={styles.Viewbtn2} onPress={Add}>
          <Text style={styles.Viewtxt3}>Add 100 Coins</Text>
          <Image source={require('../images/img2.png')} style={styles.img2} />
        </TouchableOpacity>
      </View>
      <Text style={styles.Viewtxt33}>1 coin = 1 {"\u20B9"}</Text>
      <View style={styles.View4}>
      <TextInput style={styles.Viewtxt4} value={withdraws} onChangeText={setWithdraws} keyboardType='numeric'  placeholder='Enter Account Number' />
      <TextInput style={styles.Viewtxt4} value={withdraws} onChangeText={setWithdraws}  placeholder='Enter IFSC CODE' />
        <TextInput style={styles.Viewtxt4} value={withdraws} onChangeText={setWithdraws} keyboardType='numeric' placeholder='Enter Amount' />
      </View>
      <TouchableOpacity style={styles.View5} onPress={Withs}>
        <Text style={styles.Viewtxt5}>Withdraw Coins</Text>
        <Image source={require('../images/img2.png')} style={styles.img3} />
      </TouchableOpacity>
    </View>
  )
}

export default Wallet;

const styles = StyleSheet.create({
  View1:{
         flex:1,
         backgroundColor:"gold",
  },
  img2:{
    width: 30,
    height: 30,
    position:"relative",
    left:"85%",
    top:"-75%"
  },
  img3:{
    width: 30,
    height: 17,
    position:"relative",
    left:"85%",
    top:"-60%"
  },
  Viewtxt1:{
     color:"white",
     fontSize:30,
     fontWeight:"900",
     alignSelf:"center",
     margin:"3%"
  },
  View3:{
    width: "100%",
    margin:"3%",
        alignSelf:"center"
  },
  Viewtxt2:{
      color:"white",
      fontSize:20,
      margin:"1%"
  },
  Viewbtn2:{
    height: "25%",
    borderRadius:10,
       backgroundColor:"black",
       borderColor:"white",
       borderWidth:5,
       margin:"5%"
  },
  Viewtxt3:{
     color:"white",
     fontSize:30,
     fontWeight:"900",
     textAlign:"center"
  },
  Viewtxt33:{
    color:"white",
    textAlign:"center",
    marginTop:"-30%",
    marginBottom:"10%",
        backgroundColor:"black",
        fontSize:50
  },
  Viewtxt4:{
    color:"black",
    borderColor:"black",
    borderWidth:5,
    margin:"2%",
    backgroundColor:"white",
    borderRadius:20
  },
  View5:{
    margin:"5%",
    width: "90%",
    height: "7%",
    alignSelf:"center",
    borderRadius:10,
    backgroundColor:"black",
    borderColor:"white",
    borderWidth:5,
  },
  Viewtxt5:{
    color:"white",
    fontSize:30,
    textAlign:"center",
    fontWeight:"800",
    

  }

})