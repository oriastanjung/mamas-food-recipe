import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularFood from "./components/PopularFood";

export default function App() {
  // <View /> component is like div in html5 and the default style is on flex
  // <SafeAreaView /> component is like div but its make the view below notch phone
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Navbar />
        <Hero />
        <PopularFood />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding : 10
  },
});
