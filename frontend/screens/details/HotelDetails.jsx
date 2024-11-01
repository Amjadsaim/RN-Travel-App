import { useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { HotelMap, ImageBox, ReusableBar, ReusableButton, ReusableDescription, ReusableText, Review } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFetchHotelById } from '../../data/fetchData';
import { Rating } from "react-native-stock-star-rating";
import { COLORS, SIZES } from '../../theme/theme';
import { Feather } from "@expo/vector-icons";
import { imageHotels } from '../../images';

const HotelDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  const { hotel, hotelAvailabilityStart, hotelAvailabilityEnd } = useFetchHotelById(item._id);

  let coordinates = {
    id: item._id,
    title: item.title,
    latitude: hotel?.coordinates?.latitude,
    longitude: hotel?.coordinates?.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  return (
    <SafeAreaView style={styles.HotelDetailContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 40, marginHorizontal: 12 }}>
          <ReusableBar title={item.country} bgColor={COLORS.white} icon={"search1"} color={COLORS.white} onPressBack={() => navigation.goBack()} onPressSearch={() => navigation.navigate("HotelList")} />
        </View>

        <View style={{}}>
          <View style={styles.Container}>
            <ImageBox source={imageHotels[item.title.toLowerCase()]} width={SIZES.width - 60} height={250} radius={30} />
            <View style={styles.TitleContainer}>
              <View style={styles.TitleColumn}>
                <ReusableText text={item.title} color={COLORS.black} size={SIZES.large} family={"300"} />
                <View style={{ height: 8 }} />
                <ReusableText text={item.location} color={COLORS.black} size={SIZES.medium} family={"300"} />
                <View style={{ height: 5 }} />

                <View style={styles.ContainerRowwithSpace}>
                  <Rating maxStars={5} stars={3.5} bordered={false} color={'#FD9942'} />
                  <ReusableText text={item.review} color={COLORS.gray} size={SIZES.medium} family={"300"} />
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.Container, { paddingTop: 70 }]}>
            <ReusableText text={"Description"} color={COLORS.black} size={SIZES.large} family={"400"} />
            <View style={{ height: 10 }} />
            <ReusableDescription text={hotel.description} lines={4} />
            <View style={{ height: 10 }} />
            <ReusableText text={"Location"} color={COLORS.black} size={SIZES.large} family={"400"} />
            <View style={{ height: 5 }} />
            <ReusableText text={hotel.location} color={COLORS.gray} size={SIZES.medium} family={"300"} />
            {coordinates.latitude && coordinates.longitude && (
              <HotelMap coordinates={coordinates} />
            )}
            <View style={{ height: 10 }} />
            <View style={styles.ContainerRowwithSpace}>
              <ReusableText text={"Reviews"} color={COLORS.black} size={SIZES.large} family={"400"} />
              <TouchableOpacity>
                <Feather name='list' size={20} />
              </TouchableOpacity>
            </View>
            <View style={{ height: 15 }} />
            <Review reviews={hotel.reviews} />
          </View>

          <View style={[styles.ContainerRowwithSpace, styles.Bottom]}>
            <View>
              <ReusableText text={`$ ${hotel.price}`} color={COLORS.gray} size={SIZES.large} family={"bold"} />
              <ReusableText text={`${hotelAvailabilityStart} - ${hotelAvailabilityEnd}`} color={COLORS.gray} size={SIZES.medium} family={"300"} />
            </View>
            <View style={{ width: 10 }} />
            <ReusableButton title={"Select"} width={(SIZES.width - 60) / 2.2} bgColor={COLORS.green} color={COLORS.green} textColor={COLORS.white} borderWidth={0} onPress={() => { navigation.navigate("SelectRoom") }} />
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HotelDetails

const styles = StyleSheet.create({
  HotelDetailContainer: {
    backgroundColor: "#F3F4F8",
    marginHorizontal: 10,
  },
  Container: {
    paddingTop: 10,
    marginHorizontal: 20
  },
  TitleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 120,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20
  },
  TitleColumn: {
    padding: 15
  },
  ContainerRowwithSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  Bottom: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.lightWhite,
    height: 90,
    paddingVertical: 20
  }
})