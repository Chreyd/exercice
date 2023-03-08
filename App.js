import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import obj from "./array";
import Exemple from "./Exemple";

const App = () => {

  

  return (
    <View style={styles.container}>
      <Exemple/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 20,
  },
  list: {
    backgroundColor: "deepskyblue",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  textList: {
    color: "#fff",
    fontSize: 25,
  },
  textListData:{
    color: 'grey',
    padding: 9,
    fontSize: 19,
    textAlign: 'center',
  }
});
