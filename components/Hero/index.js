import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // flex: 1,
    // height: "25%",
    paddingHorizontal: 20,
  },
  heroBG: {
    display: "flex",
    // flex: 1,
    // justifyContent: "center",
    width: "100%",
    // height: "100%",
  },
  imgHero: {
    borderRadius: 15,
  },
  banner: {
    flex: 1,
    justifyContent: "space-around",
    padding: 20,
  },
  bannerText: {
    flex: 1,
    marginBottom: 5,
    color: "white",
    fontSize: 18,
  },
  discountText: {
    flex: 1,
    color: "white",
    marginBottom: 25,
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonBanner: {
    width: "35%",
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
    marginBottom : 15,
    borderRadius: 5,
  },
});

const Hero = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <ImageBackground
        source={{
          uri: "https://thumb.suara.com/GL2mrXw3GIM7gLTUUjhYGJImDqg=/970x544/https%3A%2F%2Fmango.suara.com%2Fshared%2Fthumbnails%2F21640-viral-video-nenek-makan-belasan-sushi-ogah-berhenti-endingnya-malah-bikin-nyesel.jpg",
        }}
        resizeMode={"contain"}
        style={styles.heroBG}
        imageStyle={styles.imgHero}
      >
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Get special recipe</Text>
          <Text style={styles.discountText}>with rate 5* </Text>
          <View style={styles.buttonBanner}>
            <Text style={{ fontSize: 14, fontWeight: "300" }}>
              See Recipe
            </Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Hero;
