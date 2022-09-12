import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, TextInput } from "react-native";

const styles = StyleSheet.create({
  navbar: {
    padding: 20,
    marginTop: "4%",
    // backgroundColor: "#71C9CE",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight : "bold",
    fontStyle : "italic"
  },
  hamburger: {
    width: 25,
    height: 25
  },
  search: {
    flexDirection : "row",
    justifyContent : "center",
    alignItems :"center",
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 30,
    paddingVertical: 2,
    width : '55%',
    borderRadius : 40
  },
  searchBar: {
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 2,
    width: "100%"
  },
});

function Navbar() {
  // <Text /> is a component to use for every text we want to add
  // we can add onClick which is on Text props is onPress
  const [title, setTitle] = useState("Mama's");
  const onPressTitle = () => {
    setTitle("Hello, World");
  };
  const [searchBar, setSearchBar] = useState("");
  return (
    <View style={styles.navbar}>
      <View>
        <Text style={styles.title} >
          {title}
        </Text>
      </View>
      <View style={styles.search}>
        <Image
          style={styles.hamburger}
          source={{
            uri: "https://img.icons8.com/fluency-systems-filled/48/000000/search.png",
          }}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search a Food"
          onChangeText={setSearchBar}
          value={searchBar}
        />
      </View>
      <View>
        <Image
          style={styles.hamburger}
          source={{
            uri: "https://img.icons8.com/fluency-systems-filled/48/000000/menu.png",
          }}
        />
      </View>
    </View>
  );
}

export default Navbar;
