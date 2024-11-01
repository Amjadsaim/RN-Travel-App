import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from "react-native-maps";
import { SIZES } from '../../theme/theme';

const HotelMap = ({ coordinates }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => { navigation.navigate("Location", {coordinates}) }}>
            <MapView style={styles.Maps} region={{ ...coordinates, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
                <Marker coordinate={coordinates} title={coordinates.title} />
            </MapView>
        </TouchableOpacity>
    )
}

export default HotelMap

const styles = StyleSheet.create({
    Maps:{
        marginVertical:10,
        height: 180,
        width: SIZES.width -60,
        borderRadius: 12
    }
})