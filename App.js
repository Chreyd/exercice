import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import obj from "./array";

const App = () => {
  /*   const obj = [
    { name: "aaaaa", age: 25 },
    { name: "bbbb", age: 23 },
    { name: "cccc", age: 20 },
    { name: "dddd", age: 15 },
    { name: "eeee", age: 5 },
    { name: "aaaaa", age: 25 },
    { name: "bbbb", age: 23 },
    { name: "cccc", age: 20 },
    { name: "dddd", age: 15 },
    { name: "eeee", age: 5 },
    { name: "aaaaa", age: 25 },
    { name: "bbbb", age: 23 },
    { name: "cccc", age: 20 },
    { name: "dddd", age: 15 },
    { name: "eeee", age: 5 },
    { name: "aaaaa", age: 25 },
    { name: "bbbb", age: 23 },
    { name: "cccc", age: 20 },
    { name: "dddd", age: 15 },
    { name: "eeee", age: 5 },
  ]; */
  const [family, setFamily] = useState(obj);

  return (
    <View style={styles.container}>
      <SectionList
        sections={family}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => (
          <TouchableOpacity style={styles.list}>
            <Text style={styles.textList}>{section.role}</Text>
          </TouchableOpacity>
        )}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity >
              <Text style={styles.textListData}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
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
