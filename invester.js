import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET} from '@env';
const App = () => {
  let razorpaykeyid = RAZORPAY_KEY_ID;
  let razorpaykeysecret = RAZORPAY_KEY_SECRET;
  let amt  = 100;
  let currency ="INR";
  function handler(){

  };
//  console.log(RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET);

  const currentprosumerList = [
    {
      id: 'id156',
      name: 'XYZ',
      token: '14',
      left: '50',
    },
    {
      id: 'id157',
      name: 'ABC',
      token: '15',
      left: '40',
    },
    {
      id: 'id158',
      name: 'PQR',
      token: '12',
      left: '35',
    },
  ];
  const AvailableprosumerList = [
    {
      id: 'id156',
      name: 'XYZ',
      interest:25
    },
    {
      id: 'id157',
      name: 'ABC',
      
      interest:20
    },
    {
      id: 'id158',
      name: 'PQR',
      interest:30
    },
  ];

  return (
    <View style={styles.container}>
    <View style={styles.nav}>
      <View></View>
      <Text style={styles.text}>
        Investor
      </Text>
      <Icon name="user" size={40} color="#000" />
    </View>

    

    <Text style={styles.headingText}>Available Prosumer Details:</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>ID</Text>
          <Text style={styles.headerCell}>NAME</Text>
          <Text style={styles.headerCell}>INTEREST</Text>
          <Text style={styles.headerCell}>PAY</Text>


         
        </View>
        {AvailableprosumerList.map((prosumer, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.dataCell}>{prosumer.id}</Text>
            <Text style={styles.dataCell}>{prosumer.name}</Text>
            <Text style={styles.dataCell}>{prosumer.interest}</Text>
            <TouchableOpacity onPress={handler} style={styles.buy}>
        <Text style={styles.buyBox}>Buy</Text>
      </TouchableOpacity>
            
          </View>
        ))}
      </View>
      <Text style={styles.headingText}>Current Prosumer Details:</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>ID</Text>
          <Text style={styles.headerCell}>NAME</Text>
          <Text style={styles.headerCell}>TOKEN</Text>
          <Text style={styles.headerCell}>LEFT</Text>
        </View>
        {currentprosumerList.map((prosumer, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.dataCell}>{prosumer.id}</Text>
            <Text style={styles.dataCell}>{prosumer.name}</Text>
            <Text style={styles.dataCell}>{prosumer.token}</Text>
            <Text style={styles.dataCell}>{prosumer.left}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAF5FF',
    paddingTop: 50,
    paddingRight: 20,
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 13,
  },
  generation: {
    width: 360,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'center',
  },
  usage: {
    width: 360,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'center',
  },
  values: {
    fontSize: 34,
  },
  
  table: {
    marginLeft: 20,
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'grey',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: '#E9ECF5',
    borderRadius: 0,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  dataCell: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    padding:7,
  },
  buy:{
    backgroundColor:'blue',
    color:'white',
    width:70,
    height:30,
    borderRadius:10,
    alignItems:'center',
    marginTop:7,
  },buyBox:{
    color:'white',
    fontSize:18,
  }
});

export default App;