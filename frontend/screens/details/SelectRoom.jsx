import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReusableTile, ReusableBar, ReusableButton } from '../../components';
import { useFetchHotels } from '../../data/fetchData';
import { COLORS, SIZES } from '../../theme/theme';

const SelectRoom = ({ navigation }) => {
    const { hotels } = useFetchHotels();
    return (
        <SafeAreaView style={{ marginHorizontal: 20 }} >
            <View style={{ height: 50 }}>
                <ReusableBar title={"Select Room"} bgColor={COLORS.white} onPressBack={() => navigation.goBack()} />
            </View>

            <View style={{ paddingTop: 10 }}>
                <FlatList
                    data={hotels}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 120 }}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 10, paddingVertical: 10, backgroundColor: COLORS.lightWhite, borderRadius: 20 }}>
                            <ReusableTile item={item} />

                            <View style={{ marginHorizontal: 10 }}>
                                <ReusableButton onPress={() => { navigation.navigate("SelectedRoom", { item }) }} title={"Select Room"} width={SIZES.width - 60} bgColor={COLORS.green} borderColor={COLORS.green} borderWidth={0} textColor={COLORS.white} />
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default SelectRoom

const styles = StyleSheet.create({})