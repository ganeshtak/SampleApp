import AsyncStorage from "@react-native-async-storage/async-storage";

export const StorageType={
    userInfo:'userInfo',
}
const initialState = {
  user: undefined,
};

export const setAsyncStorage = ({iState = initialState}) => {
  AsyncStorage.setItem(StorageType.userInfo, JSON.stringify(iState));
  return;

};


export const getAsyncData=async()=>{

     const res = await AsyncStorage.getItem(StorageType.userInfo);
     console.log(':getAppSTORAGE', res);

     if (res) {
       const data = JSON.parse(res);
       return data;
     }
     return undefined;
}

export const removeAppStorage = async () => {
  await AsyncStorage.removeItem(StorageType.userInfo);
};