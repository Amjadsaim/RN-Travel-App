import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ReusableButton, ReusableTile } from '../../components';
import { COLORS, SIZES } from '../../theme/theme';

const TopBookings = ({navigation}) => {
    const bookings =[
        {
            id: 1,
            title: "Luxury Hotel Lahore",
            location: "Lahore, Pakistan",
            image: require("../../assets/hotels/luxury-hotel-lahore.jpg"),
            country: "Pakistan",
            reviews: "20202",
            rating: "4.9",
        },
        {
            id: 2,
            title: "Tokyo Luxury Hotel",
            location: "Tokyo, Japan",
            image: require("../../assets/hotels/tokyo-luxury-hotel.jpg"),
            country: "Japan",
            reviews: "23124",
            rating: "4.9",
        }
    ]

    return (
        <View>
          <FlatList 
            data={bookings}
            showsVerticalScrollIndicator= {false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style={{marginTop: 5, marginBottom: 10, marginHorizontal:20, borderRadius: 20, backgroundColor: COLORS.lightWhite, padding: 10}}>
                    <ReusableTile item={item} />
                    <View style={{flexDirection: "row", gap: 8, marginHorizontal: 10}}>
                        <ReusableButton title={"Details"} borderColor={COLORS.black} borderWidth={1} width={(SIZES.width - 60)/ 2.2} />
                        <ReusableButton onPress={()=> navigation.navigate("Failed", {item})} title={"Cancel"}  bgColor={COLORS.red} textColor={COLORS.white} borderColor={COLORS.red} borderWidth={1} width={(SIZES.width -60)/ 2.2}/>
                    </View>
                </View>
            )}
          />
        </View>
    )
}

export default TopBookings

const styles = StyleSheet.create({
    
})