import React,{} from "react";
import {View, StyleSheet, Text} from "react-native";
import StyleConfig from "../common/StyleConfig";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Header({isBack, onBackPress, title}) {

    return(
        <View style={styles.mainContainer}>
            {(isBack) &&
                <AntDesign onPress={() => onBackPress()} name={"arrowleft"} size={(StyleConfig.isTablet) ? 50 : 30} color={StyleConfig.COLOR.white} />
            }
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: StyleConfig.COLOR.purple,
        height: StyleConfig.countPixelRatio(100),
        width: StyleConfig.responsiveWidth(100),
        paddingLeft: StyleConfig.countPixelRatio(20),
        flexDirection: "row",
        alignItems: "center"
    },
    titleStyle: {
        fontSize: StyleConfig.FONT.fontSizeH2_3,
        color: StyleConfig.COLOR.white,
        fontWeight: "500",
        paddingLeft: StyleConfig.countPixelRatio(20)
    }
});