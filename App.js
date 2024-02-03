import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [unitsConsumed, setUnitsConsumed] = useState(15);
  const [amount, setAmount] = useState(15);
  const [plan,setPlan] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View></View>
        <Text style={styles.text}>
          Consumer
        </Text>
        <Icon name="user" size={40} color="#000" />
      </View>
      <View style={styles.content}>
        <View style={styles.consumed}>
          <Text style={styles.consumedText}>
            Units Consumed
          </Text>
          <Text style={styles.dis}>
            {unitsConsumed}
          </Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.amount}>
          <Text>
            Amount
          </Text>
          <Text style={styles.dis}>
            {amount}
          </Text>
        </View>
      </View>
      <View style={styles.plan}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAF5FF",
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
  content: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    width: 340,
    height: 120,
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: 'row',
  
  },
  consumed: {
    paddingLeft: 15,
    paddingTop: 5,
    padding: 60,
  },
  consumedText: {
    fontSize: 14,
  },
  amount: {
    paddingLeft: 10,
    paddingRight: 15,
  },
  line: {
    width: 3,
    height: 122,
    backgroundColor: '#DAF5FF',
  },
  dis:{
    fontSize:45,
  },
  plan:{
    marginTop:20,
    width:340,
    height:120,
    backgroundColor:"white",
    marginLeft:40,
    marginRight:40,
    borderRadius:20,
  },
  activePlan:{
    
  },inactivePlan:{

  }


});

export default App;