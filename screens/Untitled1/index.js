import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => navigation.navigate("Untitled1", {})}><View style={styles.RUdazesO}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  RUdazesO: {
    height: 60,
    width: 140,
    backgroundColor: "#df5b5b",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled1;