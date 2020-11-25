import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import logo from "./assets/egg01.png";
import logo2 from "./assets/egg02.png";
import logo3 from "./assets/egg03.png";

export default function App() {
  const [count, setCount] = React.useState(100);
  const [text, setText] = React.useState("");
  const [picture, setPicture] = React.useState(logo);

  let i = count;
  const countDown = () => {
    i--;

    setCount(i);
    if (i === 75) {
      setText("ぐぬ");
    } else if (i === 50) {
      setText("ぐぬぬ");
    } else if (i === 25) {
      setText("おや、タマゴの様子が...");
      setPicture(logo2);
    } else if (i === 0) {
      setPicture(logo3);
    } else if (i < 0) {
      setCount(0);
    } else {
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Pressable onPress={countDown}>
        <Image
          source={picture}
          style={{
            width: 250,
            height: 250,
            resizeMode: "contain",
          }}
        />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
