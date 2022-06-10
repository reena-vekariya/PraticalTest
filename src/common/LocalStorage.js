import AsyncStorage from "@react-native-community/async-storage";

const terminalSettings = [{id: 1, title: "Keypad", isSelected: false}, {id: 2, title: "Menu", isSelected: false},
        {id: 3, title: "Tabs", isSelected: false}, {id: 4, title: "Mobile", isSelected: false}];
const sidebarSettings = [{id: 1, title: "Instant Stock Management", isSelected: false}, {id: 2, title: "Cash Drawer", isSelected: false},
        {id: 3, title: "View Reports", isSelected: false}];
const paymentTypesCounter = [{id: 1, title: "Cash", isSelected: false}, {id: 2, title: "Cards", isSelected: false},
        {id: 3, title: "Telesales", isSelected: false}, {id: 4, title: "Other", isSelected: false}, {id: 5, title: "Training", isSelected: false}];
const paymentTypesTabs = [{id: 1, title: "Cash", isSelected: false}, {id: 2, title: "Cards", isSelected: false},
        {id: 3, title: "Other", isSelected: false}];

const SETTING_DATA = {"terminalSettings": [...terminalSettings], "sidebarSettings": [...sidebarSettings], 
    "paymentTypesCounter": [...paymentTypesCounter], "paymentTypesTabs": [...paymentTypesTabs]};

const setLocalData = async(key, data) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
}

const getLocalData = async(key) => {
    let data = await AsyncStorage.getItem(key);
    return data;
}

export default {
    SETTING_DATA,
    setLocalData,
    getLocalData,
};