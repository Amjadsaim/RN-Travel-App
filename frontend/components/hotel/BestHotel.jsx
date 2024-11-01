import { StyleSheet, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { COLORS, SIZES, TEXT } from '../../theme/theme';
import { useNavigation } from "@react-navigation/native";
import { useFetchHotels } from '../../data/fetchData';
import { Feather } from "@expo/vector-icons";
import ReusableText from '../reusable/ReusableText';
import HotelCard from './HotelCard';

const BestHotel = () => {
    const navigation = useNavigation();

    const { hotels, isLoading } = useFetchHotels();

    return (
        <View>
            <View style={[styles.HotelContainer, { paddingBottom: 20 }]}>
                <ReusableText text={"Nearby Hotels"} family={"medium"} size={TEXT.large} color={COLORS.black} />
                <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>


            {isLoading ? (
                <ActivityIndicator size={24} color={"red"} />
            ): (
            <FlatList
                data = { hotels }
                horizontal
                showsHorizontalScrollIndicator = { false }
                keyExtractor = { (item) => item._id }
                contentContainerStyle = {{ columnGap: SIZES.medium }}
                renderItem={({ item }) => (
                <View>
                    <HotelCard item={item} margin={10} onPress={() => navigation.navigate("HotelDetails", { item })} />
                </View>
                )}
            />
            )}
        </View>
    )
}

export default BestHotel

const styles = StyleSheet.create({
    HotelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})