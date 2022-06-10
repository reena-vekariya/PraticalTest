import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = (isIphone && height === 812) || (isIphone && height === 896);
const screen_unused_height = isIphone ? (iPhoneX ? 78 : 28) : 24;
const screen_height = height - screen_unused_height;
const ratioCount = screen_height / 667; //smartScale
const widthPer = width / 100;
const heightPer = height / 100;

export default {
    FONT: {
        fontSizeH0: (deviceType == 'phone' ? 33 : 43) * ratioCount,
        fontSizeH1_1: (deviceType == 'phone' ? 30 : 40) * ratioCount,
        fontSizeH1: (deviceType == 'phone' ? 26 : 36) * ratioCount,
        fontSizeH1_2: (deviceType == 'phone' ? 24 : 33) * ratioCount,
        fontSizeH2: (deviceType == 'phone' ? 20 : 26) * ratioCount,
        fontSizeH2_3: (deviceType == 'phone' ? 18 : 22) * ratioCount,
        fontSizeH3: (deviceType == 'phone' ? 15 : 18) * ratioCount,
        fontSizeH3_1_4: (deviceType == 'phone' ? 14 : 17) * ratioCount,
        fontSizeH3_4: (deviceType == 'phone' ? 12 : 15) * ratioCount,
        fontSizeH4: (deviceType == 'phone' ? 10 : 12) * ratioCount,
        fontSizeH5: (deviceType == 'phone' ? 8 : 10) * ratioCount,
        fontSizeParagraph: (deviceType == 'phone' ? 13 : 15) * ratioCount,
    },
    isTablet: DeviceInfo.isTablet(),
    countPixelRatio: (size) => size * ratioCount,
    responsiveHeight: (size) => size * heightPer,
    responsiveWidth: (size) => size * widthPer,
    COLOR: {
        purple: "#5924AB",
        pink: "#F26DFF",
        green: "#6E884F",
        white: "#FFFFFF",
    }
}