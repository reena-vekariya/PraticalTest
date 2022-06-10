import React, {useState, useRef} from "react";
import {View, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Image, Text, TextInput} from "react-native";
import AppImages from "../assets";
import StyleConfig from "../common/StyleConfig";
import AsyncStorage from "@react-native-community/async-storage";

export default function Login({navigation}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isShow, setIsShow] = useState(false);

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const onPressSubmit = async() => {
        if(userName === "") {
            alert("Please Enter UserName");
        } else if(password === "") {
            alert("Please Enter Password");
        } else {
            let data = {userName: userName, password: password};
            await AsyncStorage.setItem("userData", JSON.stringify(data));
            await navigation.navigate("Pin");
        }
    }

    return(
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} contentInset={{top: 0, bottom: 60}}>
                <View style={{paddingVertical: StyleConfig.countPixelRatio(60)}}>
                    <Image source={AppImages.appIcon} style={styles.imageStyle} resizeMode={"contain"} />
                    <Text style={styles.headerText}>{"VENDOR LOG IN"}</Text>
                    <View>
                        <Text style={styles.labelText}>{"Insert User Name (User or Email)"}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                ref={userNameRef}
                                value={userName}
                                onChangeText={(val) => setUserName(val)}
                                keyboardType={"email-address"}
                                style={styles.inputStyle}
                                returnKeyType={"next"}
                            />
                        </View>
                        <Text style={[styles.labelText,{paddingTop: StyleConfig.countPixelRatio(15)}]}>{"Insert Password"}</Text>
                        <View style={[styles.inputContainer,{justifyContent: "space-between"}]}>
                            <TextInput
                                ref={passwordRef}
                                value={password}
                                onChangeText={(val) => setPassword(val)}
                                style={[styles.inputStyle,{width: StyleConfig.responsiveWidth(66)}]}
                                secureTextEntry={(isShow) ? false : true}
                                returnKeyType={"done"}
                            />
                            <Text onPress={() => setIsShow(!isShow)} style={styles.showText}>{(isShow) ? "Hide" : "Show"}</Text>
                        </View>
                        <Text style={styles.forgotText}>{"Forgot Password?"}</Text>
                        <TouchableOpacity style={styles.btnStyle} onPress={() => onPressSubmit()}>
                            <Text style={styles.btnText}>{"LOG IN"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        backgroundColor: StyleConfig.COLOR.purple
    },
    imageStyle: {
        height: StyleConfig.responsiveHeight(20),
        width: StyleConfig.responsiveWidth(80),
        alignSelf: "center",
    },
    headerText: {
        fontSize: StyleConfig.FONT.fontSizeH1,
        color: StyleConfig.COLOR.pink,
        textAlign: "center",
        marginVertical: StyleConfig.countPixelRatio(40),
    },
    labelText: {
        color: StyleConfig.COLOR.white,
        fontSize: StyleConfig.FONT.fontSizeH2_3,
        textAlign: "center",
    },
    inputContainer: {
        height: StyleConfig.countPixelRatio(38),
        width: StyleConfig.responsiveWidth(86),
        borderRadius: StyleConfig.countPixelRatio(10),
        backgroundColor: StyleConfig.COLOR.white,
        marginVertical: StyleConfig.countPixelRatio(10),
        padding: StyleConfig.countPixelRatio(10),
        flexDirection: "row",
    },
    inputStyle: {
        fontSize: StyleConfig.FONT.fontSizeParagraph,
        width: StyleConfig.responsiveWidth(82),
    },
    showText: {
        fontSize: StyleConfig.FONT.fontSizeParagraph,
        color: StyleConfig.COLOR.purple,
    },
    forgotText: {
        color: StyleConfig.COLOR.pink,
        fontSize: StyleConfig.FONT.fontSizeH3,
        alignSelf: "flex-end"
    },
    btnStyle: {
        height: StyleConfig.countPixelRatio(44),
        width: StyleConfig.responsiveWidth(70),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: StyleConfig.COLOR.pink,
        borderWidth: 1,
        borderColor: StyleConfig.COLOR.white,
        borderRadius: 8,
        alignSelf: "center",
        marginTop: StyleConfig.countPixelRatio(30)
    },
    btnText: {
        color: StyleConfig.COLOR.white,
        fontSize: StyleConfig.FONT.fontSizeH3,
        fontWeight: "600"
    }
});