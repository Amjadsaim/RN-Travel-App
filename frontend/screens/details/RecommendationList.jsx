import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/theme';
import { ReusableTile, ReusableBar } from '../../components';
import { useFetchRecommendations } from '../../data/fetchData';

const RecommendationList = ({ navigation }) => {

    const {recommendations: places , isLoading} = useFetchRecommendations();

    return (
        <SafeAreaView style={{ marginHorizontal: 20 }} >
            <View style={{ height: 50 }}>
                <ReusableBar title={"Recommendations"} bgColor={COLORS.white} icon={"search1"} color={COLORS.white} onPressBack={() => navigation.goBack()} onPressSearch={() => navigation.navigate("Search")} />
            </View>

            <View style={{ paddingTop: 10 }}>
                {isLoading ? (
                    <ActivityIndicator style={{flex:1 ,justifyContent:"center", alignItems: "center", marginTop: 400}} size={64} color={"red"} />
                ) : (
                    <FlatList
                        data={places}
                        keyExtractor={(item) => item._id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 100}}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 10 }}>
                                <ReusableTile item={item} onPress={() => navigation.navigate("PlaceDetails", { item })} />
                            </View>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default RecommendationList

const styles = StyleSheet.create({})