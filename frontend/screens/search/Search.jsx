import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import { AntDesign, Feather } from '@expo/vector-icons';
import { ReusableTile } from '../../components';
import { useFetchRecommendations } from '../../data/fetchData';

const Search = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  const {recommendations: places} = useFetchRecommendations();

  const handleSearch = () => {
    const filteredResults = places.filter(place =>
      place.title.toLowerCase().includes(searchKey.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsNotFound(filteredResults.length === 0 && searchKey !== "");
  };

  return (
    <SafeAreaView style={styles.SearchPage}>
      <View style={styles.SearchContainer}>
        <TouchableOpacity style={styles.SearchButton} onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={24} />
        </TouchableOpacity>
        <View style={styles.SearchWrapper}>
          <TextInput style={[styles.inputBox]} value={searchKey} onChangeText={(text) => { setSearchKey(text); handleSearch() }} placeholder='Where you want to visit' />
        </View>
        <TouchableOpacity style={styles.SearchButton} onPress={handleSearch}>
          <Feather name='search' size={24} color={`${isNotFound ? ("red") : (searchResults.length > 0 ? ("green") : ("black"))}`} />
        </TouchableOpacity>
      </View>

      {isNotFound ? (
        <View style={{ position: "relative"}}>
          <View style={styles.NotFoundContainer}>
            <Text style={styles.NotFoundText}>Not Found</Text>
          </View>
          <Image source={require("../../assets/search.png")} style={styles.SearchImage} />
        </View>
      ) : (
        searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}
            renderItem={({ item }) => (
              <View style={styles.tileBox}>
                <ReusableTile item={item} onPress={() => navigation.navigate("PlaceDetails", { item })} />
              </View>
            )}
          />
        ) : (
          <FlatList
            data={places}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}
            renderItem={({ item }) => (
              <View style={styles.tileBox}>
                <ReusableTile item={item} onPress={() => navigation.navigate("PlaceDetails", { item })} />
              </View>
            )}
          />
        )
      )}

    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  SearchPage: {
    marginHorizontal: 20
  },
  SearchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    marginVertical: SIZES.medium,
    borderRadius: SIZES.medium,
    height: 50
  },
  SearchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small
  },
  inputBox: {
    paddingHorizontal: 20,
    width: "100%",
    height: "100%"
  },
  SearchButton: {
    width: 42,
    height: 42,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite
  },
  SearchImage: {
    resizeMode: "contain",
    width: SIZES.width - 40,
    height: SIZES.height,
    paddingHorizontal: 20
  },
  tileBox: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  NotFoundContainer: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 0
  },
  NotFoundText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.red,
    textAlign: "center"
  }
})