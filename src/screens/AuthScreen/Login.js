import React, { useState,useEffect } from 'react';
import {View,SafeAreaView, KeyboardAvoidingView,ScrollView,StyleSheet,Image,Text,Platform} from 'react-native';
import { AlertMessage } from '../../constants/AlertMessage';
import {useDispatch} from 'react-redux';
import { colors, Font, FontSize, totalSize } from '../../Style.js/styles';
import { AppTextInput } from '../../Utility/components/AppTextInput';
import { getAsyncData } from '../../Store/AsyncStorage.js/AsyncStorage';
import { Icons } from '../../Asset/Icons';
import { AppButton, TouchButton } from '../../Utility/components/AppButton';


let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Login = ({navigation}) => {
  let [secureTextEntry,setSecureTextEntry]=useState(true);
  const dispatch = useDispatch();


  let initialicon = {
    icon: 'eye-slash',
    password: true,
  };
  const [iconChange, setIconChange] = useState(initialicon);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const changeIcon = () => {
    setIconChange(preState => ({
      icon: preState.icon === 'eye' ? 'eye-slash' : 'eye',
      password: !preState.password,
    }));
  };



  let checkValidation = () => {
    if (!email) {
      showMessage('Email is required');
      return false;
    }
    if (reg.test(email) === false) {
      showMessage('Invalid Email Type');
      return false;
    } else if (password == '') {
      showMessage('password is required');
      return false;
    }
    return true;
  };

  const getParams = () => {
    const obj = {};
    obj['email'] = email;
    obj['password'] = password;
    return obj;
  };

  const Login = () => {
    if (!checkValidation()) {
      return;
    }
    const isDetailDone = checkValidation();

    if (isDetailDone) {

      const data = getParams();
       let info=getAsyncData();
       console.log("get Async data value=--",info);
        if(info.email==email && info.password==password){
          navigation.navigate('TabNaviagtor');
        }
        else {
          showMessage("Incorrect User Info");
        }
  
    }
  }



  let showMessage = (msg, title = 'requires') => {
    AlertMessage({
      title: title,
      message: msg,
      text1: '',
      text2: 'ok',
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView style={{...styles.container}}>
          <View style={{flex: 1, backgroundColor: colors.white}}>
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Image
                style={{width: w(40), height: w(40), resizeMode: 'contain'}}
                source={require('../../Asset/Image/userLogin.jpg')}
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  // fontFamily: FontSize.bold,
                  fontSize: FontSize.xlg,
                  color: colors.red,
                  marginVertical: totalSize(5),
                }}>
                Login Here !
              </Text>
            </View>
            <AppTextInput
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={email => setEmail(email)}
              leftIcon={
                <Icons.EmailIcon size={totalSize(2)} color={colors.primary} />
              }
            />

            <AppTextInput
              placeholder="Password"
              keyboardType="email-address"
              editable={true}
              secureTextEntry={secureTextEntry}
              value={password}
              onChangeText={pass => setPassword(pass)}
              leftIcon={
                <Icons.PasswordLock
                  size={totalSize(2)}
                  color={colors.primary}
                />
              }
              // secureTextEntry={iconChange.password}
              // rightIcon={
              //   <View style={{top:-3}}>
              //     <HidePassword
              //       name={iconChange.icon}
              //       color={colors.primary}
              //       size={18}
              //     />
              //   </View>
              // }
              // rightIconOnPress={() => changeIcon()}
            />

            <TouchButton>
              <Text
                style={{
                  opacity: 0.4,
                  color: colors.black,
                  textAlign: 'center',
                  // fontFamily: Fonts.regular,
                  marginTop: 0,
                  fontSize: FontSize.mdl,
                }}>
                Forgot Password
              </Text>
            </TouchButton>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
              }}>
            
              {/* <View style={{marginBottom: spacer}}>
                {second == 0 ? null : (
                  <Text style={{...styles.text}}>{second}</Text>
                )} */}
              </View>
              <TouchButton
                onPress={() => navigation.navigate('Register')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: totalSize(5),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    // fontFamily: Fonts.regular,
                    fontSize: FontSize.mdl,
                    color: colors.gray,
                  }}>
                  Don't have an account
                </Text>
                <Text
                  style={{
                    color: colors.red,
                    // fontFamily: Fonts.bold,
                    fontSize: FontSize.mdl,
                    marginLeft: 2,
                  }}>
                  Register
                </Text>
              </TouchButton>
              <View style={{marginTop: totalSize(3)}}>
                <AppButton title="LOGIN" onPress={() => Login()} />
              </View>
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: totalSize(2),
    backgroundColor: colors.white,
  },
  text: {
    fontSize: FontSize.mdl,
    // fontFamily: Fonts.regular,
    color: colors.gray,
  },
});