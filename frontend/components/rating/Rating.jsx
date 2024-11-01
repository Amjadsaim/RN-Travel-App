import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReusableText from '../reusable/ReusableText';

const Rating = ({ rating }) => {
    return (
        <View style={styles.RatingRowwithSpace}>
            <MaterialCommunityIcons name='star' size={20} color={'#fd9942'} />
            <View style={{ width: 5 }} />
            <ReusableText text={rating} family={'300'} size={15} color={'#fd9942'} />
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    RatingRowwithSpace: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
})