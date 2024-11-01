import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { ImageBox, PopularList, ReusableBar, ReusableButton, ReusableDescription, ReusableText } from '../../components';
import { useFetchPlaces } from '../../data/fetchData';
import { COLORS, SIZES } from '../../theme/theme';
import { Feather } from "@expo/vector-icons";
import { imagePlaces } from '../../images';

const PlaceDetails = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;

    const id = item.country_id;

    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const {popularPlaces}  = useFetchPlaces(id)

    useEffect(() => {
        if (popularPlaces) {
            const filtered = popularPlaces.filter(place => place._id !== item._id);
            setFilteredPlaces(filtered);
        }
    }, [id, popularPlaces, item._id]);

    return (
        <SafeAreaView style={styles.PlaceDetailContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ position: "relative" }}>
                    <ImageBox source={imagePlaces[item.title.toLowerCase()]} width={SIZES.width - 20} height={250} radius={30} />
                    <View style={styles.BarFixed}>
                        <ReusableBar title={item.country} bgColor={COLORS.white} icon={"search1"} color={COLORS.white} onPressBack={() => navigation.goBack()} onPressSearch={() => navigation.navigate("Search")} />
                    </View>
                </View>

                <View style={styles.PlaceDetailDescription}>
                    <ReusableText text={item.title} family={"300"} size={SIZES.xLarge} color={COLORS.black} />
                    <ReusableDescription text={item.description} lines={3} />

                    <View style={{ alignContent: "center" }}>
                        <View style={{}}>
                            <View style={styles.PlaceDetailBoxRowwithSpace}>
                                <ReusableText text={"Popular Destinations"} family={"300"} size={SIZES.large} color={COLORS.black} />
                                <TouchableOpacity onPress={() => navigation.navigate("Recommendations")}>
                                    <Feather name='list' size={20} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: 10 }} />
                            <PopularList data={filteredPlaces} />
                            <ReusableButton title={"Find Best Hotels"} onPress={() => navigation.navigate("HotelSearch", item._id)} textColor={COLORS.white} width={(SIZES.width - 60)} bgColor={COLORS.green} borderColor={COLORS.green} borderWidth={0} />
                            <View style={{ height: 10 }} />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default PlaceDetails

const styles = StyleSheet.create({
    PlaceDetailContainer: {
        backgroundColor: "#F3F4F8",
        marginHorizontal: 10,
    },
    BarFixed: {
        marginHorizontal: 12,
        position: "absolute",
        top: 2,
        left: 0,
        right: 0,
    },
    PlaceDetailBoxRowwithSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    PlaceDetailDescription: {
        marginHorizontal: 20,
        paddingTop: 20
    }
})