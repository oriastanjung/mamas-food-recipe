import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius : 15
  },
  card : {
    padding: 15,
    borderRadius : 10,
    borderWidth : 2,
    borderColor : "#F9F9F9",
    justifyContent : "center",
    alignItems : "center"
  },
  title : {
    marginTop: 10,
    textAlign : "center",
    fontSize : 15,
    fontWeight : "300"
  }
});

const Food = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image style={styles.image} source={{ uri: `${props.data.image}` }} />
        </View>
        <Text style={styles.title}>{props.data.title}</Text>
      </View>
    </View>
  );
};

export default Food;
