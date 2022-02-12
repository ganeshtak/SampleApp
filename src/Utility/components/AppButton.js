import React, {Children} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Button,
  ViewPropTypes,
} from 'react-native';
import {colors, FontSize, h, w} from '../../Style.js/styles';

export const AppButton = ({
  title = 'title',
  onPress,
  textColor = colors.white,
}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity style={{...styles.container}} onPress={onPress}>
        <Text style={{...styles.text, color: textColor}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export const TouchButton = ({onPress, style = ViewPropTypes, children}) => {
  // console.log("style of touchbutton",style);
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

let styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    width: w(80),
    height: h(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: FontSize.regular,
    fontSize: FontSize.mdl,
    textTransform: 'capitalize',
  },
});
