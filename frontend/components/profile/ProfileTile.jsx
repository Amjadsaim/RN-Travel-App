import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather , MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../theme/theme";

const ProfileTile = ({ title, onPress, icon }) => {
    return (
        <TouchableOpacity style={styles.TileContainer} onPress={onPress}>
           <View style={styles.TileBox}>
              <MaterialIcons name={icon} size={24} />
              <Text>{title}</Text>
           </View>
            <Feather name='chevron-right' size={24} style={{paddingRight: 2}}/>
        </TouchableOpacity>
    )
}

export default ProfileTile

const styles = StyleSheet.create({
    TileContainer:{
        backgroundColor: COLORS.lightWhite,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderRadius: 20
    },
    TileBox:{
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    }
})