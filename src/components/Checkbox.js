import React,{} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import StyleConfig from "../common/StyleConfig";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Checkbox({isSelected, title, onSelect}) {

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.mainContainer} onPress={onSelect}>
                {(isSelected) && 
                    <MaterialCommunityIcons name="square" size={StyleConfig.countPixelRatio(14)} color={StyleConfig.COLOR.pink} />
                }
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    mainContainer: {
        backgroundColor: StyleConfig.COLOR.white,
        height: StyleConfig.countPixelRatio(15),
        width: StyleConfig.countPixelRatio(15),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.6,
    },
    titleText: {
        fontSize: StyleConfig.FONT.fontSizeH3_4,
        paddingLeft: StyleConfig.countPixelRatio(10)
    },
});