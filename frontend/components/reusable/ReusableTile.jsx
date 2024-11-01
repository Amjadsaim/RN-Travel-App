import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import { imagePlaces, imageHotels } from '../../images';
import ImageBox from '../Imagebox/ImageBox';
import ReusableText from './ReusableText';
import Rating from '../rating/Rating';

const ReusableTile = ({ item , onPress}) => {

    return (
        <TouchableOpacity style={styles.TileContainer} onPress={onPress}>
            <View style={styles.TileBoxRowwithSpace}>
                <ImageBox source={imagePlaces[item.title.toLowerCase()] || imageHotels[item.title.toLowerCase()]} width={80} height={80} radius={12} />

                <View style={{ width: 15 }} />

                <View>
                    <ReusableText text={item.title} family={"400"} color={COLORS.black} size={SIZES.medium} />
                    <View style={{ height: 8 }} />
                    <ReusableText text={item.location} family={"300"} color={COLORS.gray} size={14} />
                    <View style={{ height: 8 }} />
                    <View style={styles.TileBoxRowwithSpace}>
                        <Rating rating={item.rating} />
                        <View style={{ width: 5 }} />
                        <ReusableText text={`(${item.review}) `} family={"300"} color={COLORS.gray} size={14} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ReusableTile

const styles = StyleSheet.create({
    TileContainer: {
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12,
    },
    TileBoxRowwithSpace: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
})