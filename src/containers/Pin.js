import React,{} from "react";
import {View, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, FlatList, Text, TextInput} from "react-native";
import StyleConfig from "../common/StyleConfig";
import Header from "../components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Pin({navigation}) {
    
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return(
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingTop: StyleConfig.countPixelRatio(40), paddingHorizontal: StyleConfig.countPixelRatio(20)}}>
                    <View style={styles.headerView}>
                        <AntDesign name={"arrowleft"} size={(StyleConfig.isTablet) ? 50 : 30} color={StyleConfig.COLOR.white} />
                        <Text style={styles.titleStyle}>{"Name of the Outlet"}</Text>
                    </View>
                    <View style={{flexDirection: (StyleConfig.isTablet) ? "row" : "column", justifyContent: "space-between"}}>
                        <View style={{flex: (StyleConfig.isTablet) ? 0.5 : 1}}>
                            <View style={{flexDirection: "row", alignSelf: "center", alignItems: "center"}}>
                                <TextInput
                                    style={styles.inputStyle}
                                />
                                <TextInput
                                    style={styles.inputStyle}
                                />
                                <TextInput
                                    style={styles.inputStyle}
                                />
                                <TextInput
                                    style={styles.inputStyle}
                                />
                            </View>
                            <View style={{paddingTop: StyleConfig.countPixelRatio(10)}}>
                                <FlatList
                                    contentContainerStyle={{flexGrow:1}}
                                    contentInset={{top: 0, bottom: 60}}
                                    extraData={list}
                                    data={list}
                                    numColumns={3}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity key={index} style={styles.buttonStyle} >
                                            <Text style={{fontSize: StyleConfig.FONT.fontSizeH3, fontWeight: "700"}}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                        <View style={{flex: (StyleConfig.isTablet) ? 0.5 : 1}}>
                            <Text style={styles.subHeader}>{"Actions"}</Text>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                <TouchableOpacity style={styles.btnStyle}>
                                    <Text style={styles.btnText}>{"Check In/Out"}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate("DeviceSettings")}>
                                    <Text style={styles.btnText}>{"Device Settings"}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{alignSelf: "center"}}>
                                <TouchableOpacity style={[styles.btnStyle, {backgroundColor: StyleConfig.COLOR.green}]}>
                                    <Text style={[styles.btnText, {color: StyleConfig.COLOR.white}]}>{"Open Register"}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.subHeader}>{"Notifications"}</Text>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                <TouchableOpacity style={[styles.btnStyle,{backgroundColor: StyleConfig.COLOR.pink}]}>
                                    <Text style={[styles.btnText, {color: StyleConfig.COLOR.white}]}>{"5 New Pre-orders"}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnStyle,{backgroundColor: StyleConfig.COLOR.pink}]}>
                                    <Text style={[styles.btnText, {color: StyleConfig.COLOR.white}]}>{"2 Open Tabs"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.purple
    },
    headerView: {
        paddingLeft: StyleConfig.countPixelRatio(20),
        flexDirection: "row",
        alignItems: "center"
    },
    titleStyle: {
        fontSize: StyleConfig.FONT.fontSizeH2_3,
        color: StyleConfig.COLOR.white,
        fontWeight: "500",
        paddingLeft: StyleConfig.countPixelRatio(20)
    }, 
    inputStyle: {
        height: StyleConfig.countPixelRatio(40),
        width: StyleConfig.countPixelRatio(50),
        fontSize: StyleConfig.FONT.fontSizeH3_1_4,
        borderBottomWidth: 2,
        borderBottomColor: StyleConfig.COLOR.white,
        marginHorizontal: StyleConfig.countPixelRatio(8)
    },
    btnStyle: {
        height: StyleConfig.countPixelRatio(30),
        width: StyleConfig.responsiveWidth((StyleConfig.isTablet) ? 30 :40),
        borderRadius: StyleConfig.countPixelRatio(20),
        backgroundColor: StyleConfig.COLOR.white,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: StyleConfig.countPixelRatio(10)
    },
    btnText: {
        fontSize: StyleConfig.FONT.fontSizeParagraph,
        color: StyleConfig.COLOR.purple,
    },
    subHeader: {
        color: StyleConfig.COLOR.white,
        fontSize: StyleConfig.FONT.fontSizeH3_1_4, 
        paddingTop: StyleConfig.countPixelRatio(20),
    },
    buttonStyle: {
        height: StyleConfig.countPixelRatio(60),
        width: StyleConfig.countPixelRatio(60),
        backgroundColor: StyleConfig.COLOR.white,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: StyleConfig.countPixelRatio(10),
        marginHorizontal: StyleConfig.countPixelRatio(17),
        alignSelf: "center"
    }
});