import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

const CustomHeader = (
  navigation: StackNavigationProp<Record<string, object | undefined>, string>
) => (
  <Appbar>
    <Appbar.Action icon="archive" onPress={navigation.goBack} />
    <Appbar.Action icon="mail" onPress={() => console.log("Pressed mail")} />
    <Appbar.Action icon="label" onPress={() => console.log("Pressed label")} />
    <Appbar.Action
      icon="delete"
      onPress={() => console.log("Pressed delete")}
    />
  </Appbar>
);

export default CustomHeader;
