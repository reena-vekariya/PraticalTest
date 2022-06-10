import React,{} from "react";
import {View, TouchableOpacity, FlatList, StyleSheet, Text} from "react-native";
import StyleConfig from "../common/StyleConfig";
import Header from "../components/Header";
import Feather from "react-native-vector-icons/Feather";
import LocalStorage from "../common/LocalStorage";

export default function DeviceSettings({navigation}) {
    const listItems = [{id: 1, title: "PRINTERS AND CASH DRAWER", iconName: "printer"}, {id: 2, title: "CARD READER", iconName: "credit-card"},
        {id: 3, title: "FUNCTIONALITIES SETTINGS", iconName: "settings"}];

        const onPressItem = async(item) => {
            let data = await LocalStorage.getLocalData("functionalityData");
            switch(item?.id) {
                case 1:
                    // navigation.navigate("");
                    break;
                case 2:
                    // navigation.navigate("");
                    break;
                case 3:
                    if(data === null || data === undefined || data === "") {
                        await LocalStorage.setLocalData("functionalityData", LocalStorage.SETTING_DATA);
                    }
                    await navigation.navigate("FunctionalitiesSettings");
                    break;
                default:
                    break;
            }
        }

    return(
        <View style={styles.mainContainer}>
            <View>
                <Header title={"DEVICE SETTINGS"} isBack onBackPress={() => navigation.goBack()} />
                <View style={{paddingHorizontal: StyleConfig.countPixelRatio(20), paddingTop: StyleConfig.countPixelRatio(15)}}>
                    <FlatList
                        contentContainerStyle={{flexGrow:1}}
                        contentInset={{top: 0, bottom: 60}}
                        keyExtractor={item => item?.id}
                        key={item => item?.id}
                        extraData={listItems}
                        data={listItems}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => onPressItem(item)} key={index} style={styles.cardContainer}>
                                <Feather name={item?.iconName} size={(StyleConfig.isTablet) ? 50 : 30} color={StyleConfig.COLOR.purple} />
                                <Text style={styles.titleStyle}>{item?.title}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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