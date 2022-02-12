import React, { useState } from 'react';
import {Text, View,StyleSheet,SafeAreaView,KeyboardAvoidingView,ScrollView} from 'react-native';
import { AlertMessage } from '../../constants/AlertMessage';

import { useDispatch } from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { getAsyncData, setAsyncStorage } from '../../Store/AsyncStorage.js/AsyncStorage';
import { colors, Font, FontSize, spacer, totalSize } from '../../Style.js/styles';
import { AppTextInput } from '../../Utility/components/AppTextInput';
import { Icons } from '../../Asset/Icons';
import { AppButton } from '../../Utility/components/AppButton';


let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


let navigation = useNavigation();
export const Register = () => {

const userData = [
  {
    email: 'test1@gmail.com',
    password: 123456,
  },
  {
    email: 'test2@gmail.com',
    password: 1234567,
  },
  {
    email: 'test3@gmail.com',
    password: 123458,
  },
];

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setconfirmPassword] = useState('');
  let [firstName, setFirstName] = useState('');
  let [lastName, setlastName] = useState('');
  let [term_Condition, setTerm_Condtion] = useState(false);
  let [mobileNumber, setmobileNumber] = useState('');


    const checkvalidation=()=>{

      if(!firstName){
            showMessage("First Name is Required");
            return false;

      }
      if(!lastName){
        showMessage("Last Name IS required");
            return false;

      }
      if(!email){
        showMessage("Email is required");
            return false;
      }

         if (reg.test(email) === false) {
           showMessage('Invalid Email Type');
           return false;
         } 
      if(!mobileNumber){
          showMessage('mobile no is required');
          return false;
      }
         
                if (!password) {
                  showMessage('Password is required');
                  return false;
                }
                    if (!confirmPassword) {
                      showMessage('Confirm Password is required');
                      return false;
                    }
    
                if (
                  String(password).toLocaleLowerCase().trim() !==
                  String(confirmPassword).toLocaleLowerCase().trim()
                ) {
                  showMessage('Password Do not matched ');
                  return false;
                }
                if( term_Condition===false){
                  showMessage("Accept term and conditions");
                  return false;
                }
                
                return true;
                }

const  getParams=()=>{

      const obj = {};
      obj['email'] = email;
      obj['password'] = password;
      return obj;
}


  const onRegisterPress = () => {
    if(!checkvalidation()){
      return;
      }
     const isDetailDone = checkvalidation();

      if (isDetailDone) {

        let info=getAsyncData();
        if(info.email==email){
          alert("Email alrerady exits try different emails");
        }

        const data = getParams();
        console.log('data=> through getParams', data);
            setAsyncStorage(data);
            showMessage("Registered Successfully");
              // useDispatch(ChangeAppStatus(2));
              navigation.navigate("Login");
                return;
          }
          else{
                    showMessage("Input Fields Can not be empty");
                  }
            }



     let showMessage = (msg, title = 'required') => {
       AlertMessage({
         title: title,
         message: msg,
         text1: '',
         text2: 'ok',
       });
     };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'android' ? '' : 'padding'}>
        <ScrollView style={{...styles.container}}>
          <View style={{paddingHorizontal: totalSize(2)}}>
            {/* <AppHeader title="" onPress={() => navigation.navigate('Login')} /> */}

            <View
              style={{
                flex: 1,
                paddingTop: totalSize(2),
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: spacer * 2,
              }}>
              <Text
                style={{
                  fontFamily: Font.bold,
                  fontSize: FontSize.xlg,
                  color: colors.red,
                }}>
                Register Here !
              </Text>
            </View>
          
        
            <View style={{flex: 1, marginTop: totalSize(4)}}>
              <AppTextInput
                placeholder={'First name'}
                value={firstName}
                onChangeText={f_Name => setFirstName(f_Name)}
              />
              <AppTextInput
                placeholder={'Last name'}
                value={lastName}
                onChangeText={l_name => setlastName(l_name)}
              />
              <AppTextInput
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={email => setEmail(email)}
              />
              <AppTextInput
                placeholder="Mobile Number"
                keyboardType="numeric"
                value={mobileNumber}
                onChangeText={val => setmobileNumber(val)}
              />

              <AppTextInput
                placeholder="Password"
                keyboardType="email-address"
                value={password}
                secureTextEntry={secureTextEntry}
                onChangeText={pass => {setPassword(pass)}}
                editable={true}
              />
              <AppTextInput
                placeholder=" confirm Password"
                keyboardType="email-address"
                secureTextEntry={secureTextEntry}
                value={confirmPassword}
                onChangeText={confirmPassword =>{
                  setconfirmPassword(confirmPassword)}
                }
                editable={true}
              />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: totalSize(2),
                }}>
                <Text
                  style={{
                    fontFamily: Font.regular,
                    fontSize: FontSize.mdl,
                    textAlign: 'center',
                    color: colors.black,
                  }}>
                  By creating an account you agree to our{' '}
                </Text>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    paddingBottom: totalSize(2),
                  }}>
                  <TouchButton
                    onPress={() => setTerm_Condtion(!term_Condition)}
                    style={{marginRight: spacer * 0.5, top: 2}}>
                    {term_Condition ? (
                      <Icons.CheckedCheckboxIcon
                        size={totalSize(2)}
                        color={colors.black}
                      />
                    ) : (
                      <Icons.UncheckedCheckboxIcon
                        size={totalSize(2)}
                        color={colors.black}
                      />
                    )}
                  </TouchButton>
                  <TouchButton onPress={() => alert()}>
                    <Text style={{color: colors.red}}>Terms & Condition</Text>
                  </TouchButton>
                </TouchableOpacity>
              </View>
              <View style={{marginVertical: totalSize(2)}}>
                <AppButton title="Register" onPress={() => onRegisterPress()} />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: totalSize(2),
    backgroundColor: colors.white,
  },
});