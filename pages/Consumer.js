import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Consumer = () => {
  const [liveCurrent, setLiveCurrent] = useState(0.5);
  const [monthlyUsage, setMonthlyUsage] = useState(5);
  const [amount, setAmount] = useState(56);

  
  const PastLog = [
    {
      month: 'dec',
      amt: '15 ₹',
      saved: '14 ₹',
    },
    {
      month: 'nov',
      amt: '15 ₹',
      saved: '14 ₹',
    },
    {
      month: 'oct',
      amt: '15 ₹',
      saved: '14 ₹',
    },
  ];

  return (
    <View style={styles.container}>
      {/* <View style={styles.nav}>
        <View></View>
        <Text style={styles.text}>Consumer</Text>
        <Icon name="user" size={40} color="#000" />
      </View> */}

      <View style={styles.content}>
        <View style={styles.box}>
          <Text>Live current</Text>
          <Text style={styles.boxText}>{liveCurrent}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text>Monthly</Text>
          <Text style={styles.boxText}>{monthlyUsage}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.box}>
          <Text>Amount</Text>
          <Text style={styles.boxText}>{amount}</Text>
        </View>
      </View>

      <View style={styles.past}>
        <Text style={styles.pastBlock}>Past Logs</Text>

        <View style={styles.log}>
          <View style={styles.header}>
            <View style={styles.tablecell}>
              <Text style={styles.bold}>Month</Text>
            </View>
            <View style={styles.vertical}></View>
            <View style={styles.tablecell}>
              <Text style={styles.bold}>Amount</Text>
            </View>
            <View style={styles.vertical}></View>
            <View style={styles.tablecell}>
              <Text style={styles.bold}>Saved</Text>
            </View>
          </View>
          <View style={styles.blacklinehor}></View>

          {PastLog.map((log, index) => (
            <View>
            <View key={index} style={styles.row}>
              <View style={styles.tablecell}>
                <Text>{log.month}</Text>
              </View>
              <View style={styles.vertical}></View>
              <View style={styles.tablecell}>
                <Text>{log.amt}</Text>
              </View>
              <View style={styles.vertical}></View>
              <View style={styles.tablecell}>
                <Text>{log.saved}</Text>
              </View>
            

            </View>
            <View style={styles.blacklinehor}></View>

            </View>
          ))}
        </View>
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
  content: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    width: 340,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
  },
  box: {
    flex: 0.33,
    paddingLeft: 10,
    paddingTop: 18,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 34,
  },
  line: {
    width: 4,
    height: 120,
    backgroundColor: '#DAF5FF',
  },
  past: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingBottom:20,
  },
  pastBlock: {
    fontSize: 14,
    paddingLeft: 25,
    paddingTop: 5,
    paddingBottom: 5,
  },
  
    log: {
      backgroundColor: '#E9ECF5',
      width: 300,
      marginLeft: 20,
      borderRadius: 10,
    
  },
  blacklinehor: {
    width: 300,
    height: 1,
    backgroundColor: 'grey',
  },
  header: {
    flexDirection: 'row',
  },
  tablecell: {
    padding: 7,
    flex: 0.33,
    paddingLeft: 30,
  },
  vertical: {
    width: 1,
    height: 35,
    backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
  },
  bold:{
    fontWeight:'bold',
  }
});

export default Consumer;