import React from "react";
import { TouchableHighlight, Text, View } from "react-native";
import style from "./style";
// import {Button } from 'react-native-elements';
import { Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

const Buton = props => {
  return (
    <View>
      <Button
        icon={{
          name: props.name,
          size: 30,
          color: "white"
        }}
        title="Button"
        buttonStyle={style.btnStyle}
      />
    </View>
  );
};
export default Buton;
