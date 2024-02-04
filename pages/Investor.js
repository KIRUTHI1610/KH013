import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const Investor = () => {
  const [avaiID, setavaiID] = useState(0);
  const [avaiName, setavaiName] = useState(0);
  const [avaiInterest, setAvaiInterest] = useState(0);


  const [ID, setID] = useState(0);
  const [Name, setName] = useState(0);
  const [Token, setToken] = useState(0);
  const [Left, setLeft] = useState(0);



  useEffect(() => {
    const fetchData = () => {

      //available
      const availid = ref(db, 'Invester/Available Prosumer details/ID');
      const availname = ref(db, 'Invester/Available Prosumer details/Name');
      const availinterest = ref(db, 'Invester/Available Prosumer details/Interest');

      onValue(availid, (snapshot) => {
        const val = snapshot.val();
        setavaiID(val);
      });

      onValue(availname, (snapshot) => {
        const val = snapshot.val();
        setavaiName(val);
      });

      onValue(availinterest, (snapshot) => {
        const val = snapshot.val();
        
        setAvaiInterest(val);
      });
      

      //current
      const id = ref(db, 'Invester/Current prosumer details/ID');
      const name = ref(db, 'Invester/Current prosumer details/Name');
      const token = ref(db, 'Invester/Current prosumer details/Token');
      const left = ref(db, 'Invester/Current prosumer details/Left');
      
      onValue(id, (snapshot) => {
        const val = snapshot.val();
        // console.log(val);
        setID(val);
      });

      onValue(name, (snapshot) => {
        const val = snapshot.val();
        setName(val);
      });

      onValue(token, (snapshot) => {
        const val = snapshot.val();
        
        setToken(val);
      });
      

      onValue(left, (snapshot) => {
        const val = snapshot.val();
        
        setLeft(val);
      });

      
    };

    fetchData();
  }, []);




  function handler(){

  };
//  console.log(RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET);

  const currentprosumerList = [
    {
      id: ID,
      name: Name,
      token: Token,
      left: Left,
    },
    
    
  ];
  const AvailableprosumerList = [
    {
      id: avaiID,
      name: avaiName,
      interest:avaiInterest,
    },
    
    
  ];

  return (
    <View style={styles.container}>
    {/* <View style={styles.nav}>
      <View></View>
      <Text style={styles.text}>
        Investor
      </Text>
      <Icon name="user" size={40} color="#000" />
    </View> */}

    

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
    paddingTop: 10,
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

export default Investor;