import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { COLORS, TEXT } from '../../theme/theme';
import ReusableText from './ReusableText';

const ReusableBar = ({ title, bgColor , color, icon, onPressBack, onPressSearch}) => {
    return (
        <View style={styles.BarContainer}>
            <View style={styles.BarRowwithSpace}>
                <TouchableOpacity style={[styles.BarBox, {backgroundColor: bgColor}]} onPress={onPressBack}>
                    <AntDesign name='left' size={26}/>
                </TouchableOpacity>
                    <ReusableText text={title} color={COLORS.black} size={TEXT.large} family={"medium"}/>
                <TouchableOpacity style={[styles.BarBox, {backgroundColor: color}]} onPress={onPressSearch}>
                    <AntDesign name={icon} size={26}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReusableBar

const styles = StyleSheet.create({
    BarContainer: {
        position: "absolute",
        top: 10,
        right: 0,
        left: 0,
        justifyContent: "center"
    },
    BarRowwithSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    BarBox:{
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center"
    }
})