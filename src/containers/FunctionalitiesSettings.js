import React,{ useEffect, useState } from "react";
import {View, ScrollView, StyleSheet, Text} from "react-native";
import StyleConfig from "../common/StyleConfig";
import Header from "../components/Header";
import Checkbox from "../components/Checkbox";
import LocalStorage from "../common/LocalStorage";

export default function FunctionalitiesSettings({navigation}) {

    const [settingData, setSettingData] = useState({});

    useEffect(() => {
        getData();
    },[])

    const getData = async() => {
        let data = await LocalStorage.getLocalData("functionalityData");
        let obj = JSON.parse(data);
        await setSettingData(obj);
    }

    onSelect = async(selectedItem, key) => {
        let data = await LocalStorage.getLocalData("functionalityData");
        let obj = JSON.parse(data);
        let newArr = obj[key];
        let arr = [];
        newArr.map((item, index) => {
            if(item?.id === selectedItem?.id) {
                arr.push({...item, isSelected: !selectedItem?.isSelected});
            } else {
                arr.push(item);
            }
        })
        newArr = [...arr];
        obj[key] = newArr;
        await LocalStorage.setLocalData("functionalityData", obj);
        await getData();
    }

    const onUpDownElements = (arr, oldIndex, newIndex) => {
        if (newIndex >= arr.length) {
            var k = newIndex - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };

    onUpAndDown = async(selectedItem, key, type) => {
        let data = await LocalStorage.getLocalData("functionalityData");
        let obj = JSON.parse(data);
        let newArr = obj[key];
        let arr = [];
        let index = newArr.findIndex((item) => (item?.id === selectedItem?.id));
        if(index !== -1) {
            if(type === "up") arr = onUpDownElements(newArr, index, index - 1);
            else arr = onUpDownElements(newArr, index, index + 1);
        } 
        obj[key] = arr;
        await LocalStorage.setLocalData("functionalityData", obj);
        await getData();
    }

    return(
        <View style={styles.mainContainer}>
            <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} contentInset={{top: 0, bottom: 60}}>
                <Header title={"FUNCTIONALITIES SETTINGS"} isBack onBackPress={() => navigation.goBack()} />
                <View style={{paddingHorizontal: StyleConfig.countPixelRatio(20), paddingTop: StyleConfig.countPixelRatio(15)}}>
                    <View style={{flexDirection: (StyleConfig.isTablet) ? "row" : "column"}}>
                        <View style={{flex: (StyleConfig.isTablet) ? 0.5 : 1}}>
                            <Text style={styles.headerStyle}>{"Terminal Settings"}</Text>
                            {settingData && settingData?.terminalSettings && settingData["terminalSettings"].map((item, index) => 
                                <View key={index}>
                                    <View style={styles.cardView}>
                                        <View style={{flex: 0.75}}>
                                            <Checkbox title={item?.title} isSelected={item?.isSelected} onSelect={() => onSelect(item, "terminalSettings")} />
                                        </View>
                                        <View style={{flexDirection: "row", justifyContent: "space-between", flex: 0.25}}>
                                            {(index !== 0) ?
                                                <Text onPress={() => onUpAndDown(item, "terminalSettings", "up")} style={styles.titleText}>{"Up"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                            {(index !== (settingData["terminalSettings"].length - 1)) ?
                                                <Text onPress={() => onUpAndDown(item, "terminalSettings", "down")} style={[styles.titleText,{color: StyleConfig.COLOR.pink}]}>{"Down"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                        </View>
                                    </View>
                                    <View style={styles.horizontalLine} />
                                </View>
                            )}
                            <Text style={styles.headerStyle}>{"Sidebar Settings"}</Text>
                            {settingData &&settingData?.sidebarSettings && settingData["sidebarSettings"].map((item, index) => 
                                <View key={index}>
                                    <View style={styles.cardView}>
                                        <View style={{flex: 0.75}}>
                                            <Checkbox title={item?.title} isSelected={item?.isSelected} onSelect={() => onSelect(item, "sidebarSettings")} />
                                        </View>
                                        <View style={{flexDirection: "row", justifyContent: "space-between", flex: 0.25}}>
                                            {(index !== 0) ?
                                                <Text onPress={() => onUpAndDown(item, "sidebarSettings", "up")} style={styles.titleText}>{"Up"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                            {(index !== (settingData["sidebarSettings"].length - 1)) ?
                                                <Text onPress={() => onUpAndDown(item, "sidebarSettings", "down")} style={[styles.titleText,{color: StyleConfig.COLOR.pink}]}>{"Down"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                        </View>
                                    </View>
                                    <View style={styles.horizontalLine} />
                                </View>
                            )}
                        </View>
                        <View style={{flex: (StyleConfig.isTablet) ? 0.5 : 1}}>
                            <Text style={styles.headerStyle}>{"Payment Types Counter"}</Text>
                            {settingData && settingData?.paymentTypesCounter && settingData["paymentTypesCounter"].map((item, index) => 
                                <View key={index}>
                                    <View style={styles.cardView}>
                                        <View style={{flex: 0.75}}>
                                            <Checkbox title={item?.title} isSelected={item?.isSelected} onSelect={() => onSelect(item, "paymentTypesCounter")} />
                                        </View>
                                        <View style={{flexDirection: "row", justifyContent: "space-between", flex: 0.25}}>
                                            {(index !== 0) ?
                                                <Text onPress={() => onUpAndDown(item, "paymentTypesCounter", "up")} style={styles.titleText}>{"Up"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                            {(index !== (settingData["paymentTypesCounter"].length - 1)) ?
                                                <Text onPress={() => onUpAndDown(item, "paymentTypesCounter", "down")} style={[styles.titleText,{color: StyleConfig.COLOR.pink}]}>{"Down"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                        </View>
                                    </View>
                                    <View style={styles.horizontalLine} />
                                </View>
                            )}
                            <Text style={styles.headerStyle}>{"Payment Types Tabs"}</Text>
                            {settingData && settingData?.paymentTypesTabs && settingData["paymentTypesTabs"].map((item, index) => 
                                <View key={index}>
                                    <View style={styles.cardView}>
                                        <View style={{flex: 0.75}}>
                                            <Checkbox title={item?.title} isSelected={item?.isSelected} onSelect={() => onSelect(item, "paymentTypesTabs")} />
                                        </View>
                                        <View style={{flexDirection: "row", justifyContent: "space-between", flex: 0.25}}>
                                            {(index !== 0) ?
                                                <Text onPress={() => onUpAndDown(item, "paymentTypesTabs", "up")} style={styles.titleText}>{"Up"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                            {(index !== (settingData["paymentTypesTabs"].length - 1)) ?
                                                <Text onPress={() => onUpAndDown(item, "paymentTypesTabs", "down")} style={[styles.titleText,{color: StyleConfig.COLOR.pink}]}>{"Down"}</Text>
                                                : <Text style={{flex: 0.1}}>{""}</Text>
                                            }
                                        </View>
                                    </View>
                                    <View style={styles.horizontalLine} />
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: StyleConfig.COLOR.white,
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
    },
    headerStyle: {
        fontSize: StyleConfig.FONT.fontSizeH3,
        fontWeight: "600",
        marginBottom: StyleConfig.countPixelRatio(14),
        marginTop: StyleConfig.countPixelRatio(20)
    },
    cardView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: StyleConfig.FONT.fontSizeH3_4,
    },
    horizontalLine: {
        height: 1,
        borderWidth: 0.6,
        borderColor: "grey",
        marginVertical: StyleConfig.countPixelRatio(14)
    }
});