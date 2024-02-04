import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const Prosumer = () => {
  const [glive, setglive] = useState(0.33);
  const [gmonthly, setgmonthly] = useState(12);
  const [gamt, setgmt] = useState(5);

  const [ulive, setulive] = useState(0.3);
  const [umonthly, setumonthly] = useState(20);
  const [uamt, setuamt] = useState(6);

  const [ID, setID] = useState(0);
  const [Name, setName] = useState(0);
  const [Token, setToken] = useState(0);
  const [Left, setLeft] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const gliveRef = ref(db, 'PROSUMER/Generation/Live');
      const gmonthlyRef = ref(db, 'PROSUMER/Generation/Monthly');
      const gamtRef = ref(db, 'PROSUMER/Generation/Amount');
      

      onValue(gliveRef, (snapshot) => {
        const val = snapshot.val();
        const roundedVal = Number(val).toFixed(2);
        setglive(roundedVal);
      });

      onValue(gmonthlyRef, (snapshot) => {
        const val = snapshot.val();
        setgmonthly(val);
      });

      onValue(gamtRef, (snapshot) => {
        const val = snapshot.val();
        setgmt(val);
      });



      const uliveRef = ref(db, 'PROSUMER/Usage/Live');
      const umonthlyRef = ref(db, 'PROSUMER/Usage/Montly');
      const uamtRef = ref(db, 'PROSUMER/Usage/Amount');
      

      onValue(uliveRef, (snapshot) => {
        const val = snapshot.val();
        const roundedVal = Number(val).toFixed(2);
        setulive(roundedVal);
      });

      onValue(umonthlyRef, (snapshot) => {
        const val = snapshot.val();
        console.log(val);
        setumonthly(val);
      });

      onValue(uamtRef, (snapshot) => {
        const val = snapshot.val();
        setuamt(val);
      });

      const id = ref(db, 'PROSUMER/Invester details/ID');
      const name = ref(db, 'PROSUMER/Invester details/Name');
      const token = ref(db, 'PROSUMER/Invester details/Token');
      const left = ref(db, 'PROSUMER/Invester details/Left');
      
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

  const investorList = [
    {
      id: ID,
      name: Name,
      token: Token,
      left: Left,
    }
  ];

  return (
    <View style={styles.container}>
    {/* <View style={styles.nav}>
      <View></View>
      <Text style={styles.text}>
        Prosumer
      </Text>
      <Icon name="user" size={40} color="#000" />
    </View> */}
    <Text style={styles.headingText}>Generation:</Text>
    <View style={styles.generation}>
      <View style={{flex:0.33,alignItems:'center'}}>
        <Text>Live</Text>
        <Text style={styles.values}>{glive}</Text>
      </View>
      <View style={{flex:0.33,alignItems:'center'}}>
        <Text>Monthly</Text>
        <Text style={styles.values}>{gmonthly}</Text>
        </View>
      <View style={{flex:0.33,alignItems:'center'}}>
        <Text>Amount</Text>
        <Text style={styles.values}>{gamt}</Text>
      </View>
      
    </View>
    <Text style={styles.headingText}>Usage:</Text>
    <View style={styles.usage}>
      <View style={{flex:0.33,alignItems:'center'}}>
        <Text>Live</Text>
        <Text style={styles.values}>{ulive}</Text>
      </View>
      <View style={{flex:0.33,alignItems:'center'}}>
        <Text>Monthly</Text>
        <Text style={styles.values}>{umonthly}</Text>
        </View>
      <View style={{flex:0.33,alignItems:'center'}}>
        <Text>Amount</Text>
        <Text style={styles.values}>{uamt}</Text>
      </View>
      
    </View>

      
      <Text style={styles.headingText}>Investor Details:</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>ID</Text>
          <Text style={styles.headerCell}>NAME</Text>
          <Text style={styles.headerCell}>TOKEN</Text>
          <Text style={styles.headerCell}>LEFT</Text>
        </View>
        {investorList.map((investor, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.dataCell}>{investor.id}</Text>
            <Text style={styles.dataCell}>{investor.name}</Text>
            <Text style={styles.dataCell}>{investor.token}</Text>
            <Text style={styles.dataCell}>{investor.left}</Text>
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
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
});

export default Prosumer;