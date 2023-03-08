import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const obj = [
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
  ];
  const [family, setFamily] = useState(obj);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    Alert.alert("Info", "En plein rafraichissement", [
      {
        text: "OK",
        onPress: () => console.warn("Liste rafraichit"),
        style: "destructive",
      },
    ]);
    setRefresh(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={family}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.list}>
              <Text style={styles.textList}>
                {item.name} || Age: {item.age}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
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
});
