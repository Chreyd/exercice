import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useState } from "react";

const App = () => {
  const obj = [
    { id: 1, name: "aaaaa", age: 25 },
    { id: 2, name: "bbbb", age: 23 },
    { id: 3, name: "cccc", age: 20 },
    { id: 4, name: "dddd", age: 15 },
    { id: 5, name: "eeee", age: 5 },
    { id: 6, name: "aaaaa", age: 25 },
    { id: 7, name: "bbbb", age: 23 },
    { id: 8, name: "cccc", age: 20 },
    { id: 9, name: "dddd", age: 15 },
    { id: 10, name: "eeee", age: 5 },
    { id: 11, name: "aaaaa", age: 25 },
    { id: 12, name: "bbbb", age: 23 },
    { id: 13, name: "cccc", age: 20 },
    { id: 14, name: "dddd", age: 15 },
    { id: 15, name: "eeee", age: 5 },
    { id: 16, name: "aaaaa", age: 25 },
    { id: 17, name: "bbbb", age: 23 },
    { id: 18, name: "cccc", age: 20 },
    { id: 19, name: "dddd", age: 15 },
    { id: 20, name: "eeee", age: 5 },
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
    setRefresh(false)
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} colors={['red']} />
        }
      >
        {family.map((member) => {
          return (
            <TouchableOpacity key={member.id} style={styles.list}>
              <Text style={styles.textList}>
                {member.name} || Age: {member.age}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
