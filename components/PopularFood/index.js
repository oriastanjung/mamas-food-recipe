import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  VirtualizedList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Food from "../Food";
import axios from "axios";
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textSectionTitle: {
    fontSize: 22,
    fontWeight: "400",
  },
  textSectionOpt: {
    fontSize: 18,
    fontWeight: "300",
    color: "rgba(120, 129, 154, 1)",
  },
  foodListContainer: {
    // backgroundColor: "red",
    flexWrap: "wrap",
    // flex: 1,
    width: "100%",
    // alignItems: 'flex-start'
  },
  foodList : {
    flexWrap : "wrap",
  }
});

const apiKey = "bb8c5deae35c40e5a48cdcfec7c94b0c";
const homeRecipeURL = "https://api.spoonacular.com/recipes/random?number=20";

const PopularFood = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${homeRecipeURL}&apiKey=${apiKey}`);

        // console.log("res >>>> ", res);
        setData(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textSectionTitle}> Popular Food</Text>
          <Text style={styles.textSectionOpt}> View All</Text>
        </View>
      </View>
      <SafeAreaView style={styles.foodListContainer}>
        {/* {data &&
          data.map((item) => {
            return <Food data={item} />;
          })} */}
          <FlatList 
            data={data}
            renderItem={({item}) => {
                return <Food data={item} />
            }}
            numColumns={2}
            style={styles.foodList}
          />
      </SafeAreaView>
    </>
  );
};

export default PopularFood;
