import React from "react";
import { View, Text } from "react-native";

const TabBarLabel = props => {
  const color = props.focused ? "#0064e1" : "";
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color }}>{props.label}</Text>
    </View>
  );
};

export default TabBarLabel;
