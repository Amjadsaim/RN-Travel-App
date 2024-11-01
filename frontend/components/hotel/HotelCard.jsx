import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import { imageHotels } from '../../images';
import ImageBox from "../Imagebox/ImageBox";
import ReusableText from '../reusable/ReusableText';
import Rating from '../rating/Rating';

const HotelCard = ({ item, margin, onPress }) => {
  
    return (
        <TouchableOpacity style={[styles.CardContainer, { marginRight: margin }]} onPress={onPress}>
            <View>
                <View style={styles.CardImageContainer}>
                    <ImageBox source={imageHotels[item.title.toLowerCase()]} width={170} height={150} radius={16} />
                </View>

                <View style={{ height: 5 }} />

                <View style={{ paddingVertical: 2, paddingHorizontal: 15 }}>
                    <ReusableText text={item.title} family={"400"} size={SIZES.medium} color={COLORS.black} />
                    <View style={{ height: 5 }} />
                    <ReusableText text={item.location} family={"300"} size={SIZES.medium} color={COLORS.gray} />
                    <View style={{ height: 5 }} />
                    <Rating rating={item.rating} />
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default HotelCard

const styles = StyleSheet.create({
    CardContainer: {
        width: SIZES.width / 2.2,
        height: 270,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
    },
    CardImageContainer: {
        alignItems: "center",
        marginTop: 10,
        width: "100%",
        height: 150,
    }
})