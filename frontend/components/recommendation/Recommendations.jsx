import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFetchRecommendations } from '../../data/fetchData';
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, TEXT } from '../../theme/theme';
import { Feather } from "@expo/vector-icons";
import ReusableText from '../reusable/ReusableText';
import ReusableTile from '../reusable/ReusableTile';

const Recommendations = () => {
    const navigation = useNavigation();
    const {recommendations, isLoading} = useFetchRecommendations();

    return (
        <View style={styles.RecommendationContainer}>
            <View style={[styles.RecommendationBoxRowWithSpace, { paddingBottom: 20 }]}>
                <ReusableText text={"Recommendation"} family={"medium"} size={TEXT.large} color={COLORS.black} />
                <TouchableOpacity onPress={() => navigation.navigate("Recommendations")}>
                    <Feather name='list' size={20} />
                </TouchableOpacity>
            </View>

            {isLoading ? (
                <ActivityIndicator size={24} color={"red"} />
            ) : (
                <FlatList
                    data={recommendations}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    renderItem={({ item }) => (
                        <View>
                            <ReusableTile item={item} onPress={() => navigation.navigate("PlaceDetails", { item })} />
                        </View>
                    )}
                />
            )}

        </View>
    )
}

export default Recommendations

const styles = StyleSheet.create({
    RecommendationContainer: {
        paddingTop: 30
    },
    RecommendationBoxRowWithSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})