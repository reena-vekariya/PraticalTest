import React,{} from "react";
import {View, TouchableOpacity, FlatList, SafeAreaView, StyleSheet, Image, Text} from "react-native";
import StyleConfig from "../common/StyleConfig";
import Header from "../components/Header";
import Feather from "react-native-vector-icons/Feather";

export default function FunctionalitiesSettings({navigation}) {

    return(
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Header title={"FUNCTIONALITIES SETTINGS"} isBack onBackPress={() => navigation.goBack()} />
                <View style={{paddingHorizontal: StyleConfig.countPixelRatio(20), paddingTop: StyleConfig.countPixelRatio(15)}}>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        backgroundColor: StyleConfig.COLOR.white
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: StyleConfig.countPixelRatio(15)
    },
    titleStyle: {
        fontSize: StyleConfig.FONT.fontSizeH3,
        fontWeight: "600",
        paddingLeft: StyleConfig.countPixelRatio(15)
    }
});