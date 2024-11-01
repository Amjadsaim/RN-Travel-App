import { StyleSheet, View } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import ReusableComment from '../reusable/ReusableComment';
import ReusableText from '../reusable/ReusableText';
import ImageBox from '../Imagebox/ImageBox';
import Rating from '../rating/Rating';

const ReviewTile = ({ review }) => {
    
    const formatDate = (dateString) => {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "June", "July",
            "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const date = new Date(dateString);
        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const month = months[monthIndex];
        const day = String(date.getDate()).padStart(2, '0');

        return `${month} ${day}`;
    };

    return (
        <View style={styles.ReviewTileContainer}>
            <View style={styles.ReviewTileRowwithSpace}>
                <View style={[styles.ReviewTileRowwithSpace, { justifyContent: "flex-start" }]}>
                    <ImageBox source={require("../../assets/person/boy1.png")} width={54} height={54} radius={10} />
                    <View style={{ width: 20 }} />
                    <View style={{}}>
                        <View style={styles.ReviewTileRowwithSpace}>
                            <ReusableText text={review.user.username.charAt(0).toUpperCase() + review.user.username.slice(1)} color={COLORS.black} size={SIZES.medium} family={"400"} />
                            <View style={{ width: 130 }} />

                            <View style={styles.ReviewTileRowwithSpace}>
                                <Rating rating={review.rating} />
                                <View style={{ width: 10 }} />
                                <ReusableText text={formatDate(review.updatedAt)} color={COLORS.black} size={SIZES.small} family={"300"} />
                                <View style={{ width: 10 }} />
                            </View>
                        </View>
                        <View style={{ width: 280 }}>
                            <ReusableComment comment={review.review} lines={2} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReviewTile

const styles = StyleSheet.create({
    ReviewTileContainer: {
        padding: 6,
        borderRadius: 12,
        borderBottomWidth: 0.5,
        borderColor: COLORS.lightGray,
        backgroundColor: COLORS.lightWhite,
        marginBottom: 2        
    },
    ReviewTileRowwithSpace: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})