import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, TEXT } from '../../theme/theme';
import ReusableText from '../reusable/ReusableText';
import { AntDesign } from '@expo/vector-icons';

const SettingTile = ({onPress, title, title1 }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.TileBox}>
        <ReusableText text={title} family={"400"} size={TEXT.medium} color={COLORS.black}/>

        {title === "Language" ? (
            <View style={styles.TileRowwithSpace}>
                <Image source={require("../../assets/countries/usa.png")} style={styles.TileImage} />
                <View style={{width: 5}}/>
                <ReusableText text={"English"} family={"400"} size={TEXT.medium } color={COLORS.gray}/>
                <View style={{width: 5}}/>
                <AntDesign name='right' size={20} color={COLORS.dark}/>
            </View>
        ): (
            <View style={[styles.TileRowwithSpace, {justifyContent: "flex-start"}]}>
                 <ReusableText text={title1} family={"400"} size={TEXT.medium} color={COLORS.gray}/>
                <View style={{width: 5}}/>
                <AntDesign name='right' size={20} color={COLORS.dark}/>
            </View>
        )}
    </TouchableOpacity>
  )
}

export default SettingTile

const styles = StyleSheet.create({
    TileBox:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        borderBottomWidth: 1,
        borderColor: COLORS.lightGray,
        paddingVertical: 15
    },
    TileRowwithSpace:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    TileImage:{
        width: 40,
        height: 30,
        resizeMode: "contain"
    }
})