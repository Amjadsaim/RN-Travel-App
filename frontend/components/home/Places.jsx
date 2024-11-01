import { ActivityIndicator, StyleSheet, View, VirtualizedList } from 'react-native';
import { useFetchAllCountries } from "../../data/fetchData";
import { SIZES } from '../../theme/theme';
import Country from '../country/Country';



const Places = () => {
  const { countries, isLoading } = useFetchAllCountries();

  return (
    <View>
      <View style={{ height: 20 }} />
      {isLoading ? (
        <ActivityIndicator size={24} color={"red"} />
      ) : (
        <VirtualizedList
          data={countries}
          horizontal
          keyExtractor={(item) => item._id}
          showsHorizontalScrollIndicator={false}
          getItemCount={(data) => data.length}
          getItem={(data, index) => data[index]}
          renderItem={({ item, index }) => (
            <View style={{ marginRight: SIZES.medium }}>
              <Country item={item} />
            </View>
          )}
        />)}

    </View>
  )
}

export default Places

const styles = StyleSheet.create({})