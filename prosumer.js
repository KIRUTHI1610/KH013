import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [glive, setglive] = useState(0.33);
  const [gmonthly, setgmonthly] = useState(12);
  const [gamt, setgmt] = useState(5);

  const [ulive, setulive] = useState(0.3);
  const [umonthly, setumonthly] = useState(20);
  const [uamt, setuamt] = useState(6);

  const investorList = [
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

  return (
    <View style={styles.container}>
    <View style={styles.nav}>
      <View></View>
      <Text style={styles.text}>
        Prosumer
      </Text>
      <Icon name="user" size={40} color="#000" />
    </View>
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
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
});

export default App;