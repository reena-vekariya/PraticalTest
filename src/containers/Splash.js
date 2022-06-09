import React, {useEffect} from "react";
import {View} from "react-native";
import StyleConfig from "../common/StyleConfig";
import AsyncStorage from "@react-native-community/async-storage";

export default function Splash({navigation}) {

    useEffect(async() => {
        let data = await AsyncStorage.getItem("userData");
        console.log('data==', data);
        if(data && data !== null && data !== undefined && data !== "") {
            navigation.navigate("Pin");
        } else {
            navigation.navigate("Login");
            // navigation.navigate("FunctionalitiesSettings");
        }
    },[])

    return(
        <View style={{flex: 1, backgroundColor: StyleConfig.COLOR.purple}} />
    )
}