import React, {useRef} from 'react';
import {View, TextInput, StyleSheet, Text, Animated} from 'react-native';
import { colors, FontSize, h, spacer } from '../../Style.js/styles';
import { TouchButton } from './AppButton';
// import {TouchButton} from './components/AppButton';

export const AppTextInput = ({
  placeholder = 'Enter Email',
  onChangeText,
  value,
  leftIcon,
  keyboardType = 'email-address',
  secureTextEntry = false,
  editable = true,
  onPress,
  onFocus,
  height = h(6),
  centerIcon,
  placeholderTextColor,
  rightIcon,
  autoCapitalize = false,

  rightIconOnPress,
  TextAlignItem = false,
}) => {
  console.log('secure text entry status--', secureTextEntry);

  // const animationHeight = useRef(new Animated.Value(0)).current;

  return (
    <TouchButton
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        height: height,
        borderRadius: 10,
        alignItems: 'flex-start',
        borderColor: colors.lightWhite,
        marginBottom: spacer,
      }}>
      {leftIcon && (
        <View style={{paddingLeft: spacer, top: 13}}>{leftIcon}</View>
      )}

      {value ? (
        <Animated.View
          style={{
            flex: 1,
            position: 'absolute',
            top: -spacer * 0.6,
            marginLeft: spacer,
          }}>
          <Text
            style={{
              ...styles.textInput,
              backgroundColor: colors.white,
              color: colors.gray,
              paddingLeft: 0,
            }}>
            {placeholder}
          </Text>
        </Animated.View>
      ) : null}

      <View
        style={{flex: 1, alignItems: TextAlignItem ? 'center' : 'flex-start'}}>
        {editable ? (
          <TextInput
            style={{
              ...styles.textInput,
              width: '100%',
              paddingVertical: spacer * 0.15,
              paddingTop: spacer * 0.5,
              textTransform: autoCapitalize
                ? keyboardType == 'email-address'
                  ? 'none'
                  : 'capitalize'
                : 'none',
            }}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize ? 'words' : 'none'}
            value={value}
            returnKeyType="done"
            editable={editable}
            onFocus={onFocus}
            placeholderTextColor={placeholderTextColor}
          />
        ) : (
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            {centerIcon && <View style={{paddingRight: 0}}>{centerIcon}</View>}
            <Text
              numberOfLines={1}
              style={{
                ...styles.textInput,
                color: value ? colors.black : colors.gray,
              }}>
              {value ? value : placeholder}
            </Text>
          </View>
        )}
      </View>
      {rightIcon && (
        <TouchButton
          style={{paddingRight: spacer, top: 15}}
          onPress={rightIconOnPress}>
          {rightIcon}
        </TouchButton>
      )}
    </TouchButton>
  );
};

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: spacer,
    // fontFamily: Fonts.regular,
    color: colors.black,
    fontSize: FontSize.mdl * 0.9,
  },
});
