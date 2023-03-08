import React, { useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Keyboard } from "react-native";

const Exemple = () => {
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return()=>{
        Keyboard.removeAllListeners('keyboardDidShow', _keyboardDidShow);
        Keyboard.removeAllListeners("keyboardDidHide", _keyboardDidHide);
    }
  }, []);

  const _keyboardDidShow = () => {
    alert("Veuillez remplir le champ");
  };

  const _keyboardDidHide= ()=>{
    alert("Merci d'avoir validé le TextInput")
  }
  return <TextInput style={styles.input} onSubmitEditing={()=>Keyboard.dismiss()}/>;
};

const styles = StyleSheet.create({
  input: {
    margin: 60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default Exemple;
