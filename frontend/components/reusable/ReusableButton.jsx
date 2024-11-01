import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SIZES } from '../../theme/theme';

const ReusableButton = ({onPress, title, textColor, width, bgColor, borderColor, borderWidth}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.ButtonStyle, {width: width, backgroundColor: bgColor, borderColor: borderColor, borderWidth: borderWidth}]}>
        <Text style={[styles.ButtonText , {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ReusableButton

const styles = StyleSheet.create({
    ButtonStyle:{
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: SIZES.small
    },
    ButtonText:{
        fontWeight: "medium",
        fontSize: SIZES.medium 
    }  
})