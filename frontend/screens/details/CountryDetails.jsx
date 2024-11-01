import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBox, PopularList, ReusableBar, ReusableButton, ReusableDescription, ReusableText } from '../../components';
import { useFetchPlaces } from '../../data/fetchData';
import { COLORS, SIZES } from "../../theme/theme";
import { Feather } from "@expo/vector-icons";
import { images } from "../../images";

const CountryDetails = ({ navigation }) => {
    const route = useRoute()
    const { item } = route.params;

    const id = item._id

    const { places } = useFetchPlaces(id)

    return (
        <SafeAreaView style={styles.CountryDetailContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ position: "relative" }}>
                    <ImageBox source={images[item.country.toLowerCase()]} width={SIZES.width - 20} height={250} radius={30} />
                    <View style={styles.BarFixed}>
                        <ReusableBar title={item.country} bgColor={COLORS.white} icon={"search1"} color={COLORS.white} onPressBack={() => navigation.goBack()} onPressSearch={() => { navigation.navigate("Search") }} />
                    </View>
                </View>

                <View style={styles.CountryDetailDescription}>
                    <ReusableText text={places.region} family={"300"} size={SIZES.xLarge} color={COLORS.black} />
                    <ReusableDescription text={places.description} lines={4} />

                    <View style={{ alignContent: "center" }}>
                        <View style={{}}>
                            <View style={styles.CountryDetailBoxRowwithSpace}>
                                <ReusableText text={"Popular Destinations"} family={"300"} size={SIZES.large} color={COLORS.black} />
                                <TouchableOpacity onPress={() => navigation.navigate("Recommendations", { item })}>
                                    <Feather name='list' size={20} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: 10 }} />
                            <PopularList data={places.popular} />
                            <ReusableButton title={"Find Best Hotels"} onPress={() => navigation.navigate("HotelSearch", item.id)} textColor={COLORS.white} width={(SIZES.width - 60)} bgColor={COLORS.green} borderColor={COLORS.green} borderWidth={0} />
                            <View style={{ height: 10 }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CountryDetails

const styles = StyleSheet.create({
    CountryDetailContainer: {
        backgroundColor: "#F3F4F8",
        marginHorizontal: 10,
    },
    CountryDetailDescription: {
        marginHorizontal: 20,
        paddingTop: 20
    },
    CountryDetailBoxRowwithSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    BarFixed: {
        marginHorizontal: 12,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    }
})