import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReusableTile, ReusableBar } from '../../components';
import { useFetchHotels } from '../../data/fetchData';
import { COLORS } from '../../theme/theme';

const HotelList = ({ navigation }) => {
  const { hotels , isLoading } = useFetchHotels();
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }} >
      <View style={{ height: 50 }}>
        <ReusableBar title={"Nearby Hotels"} bgColor={COLORS.white} icon={"search1"} color={COLORS.white} onPressBack={() => navigation.goBack()} onPressSearch={() => navigation.navigate("HotelSearch")} />
      </View>

      <View style={{ paddingTop: 10 }}>

        {isLoading ? (
          <ActivityIndicator style={{flex:1 ,justifyContent:"center", alignItems: "center", marginTop: 400}} size={64} color={"red"} />
        ) : (
          <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile item={item} onPress={() => navigation.navigate("HotelDetails", { item })} />
            </View>
          )}/>
        ) }

      </View>
    </SafeAreaView>
  )
}

export default HotelList

const styles = StyleSheet.create({})