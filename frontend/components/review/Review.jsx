import { FlatList, StyleSheet, View } from 'react-native';
import ReviewTile from './ReviewTile';

const Review = ({ reviews }) => {
    return (
        <FlatList
            data={reviews}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <View style={{ marginBottom: 15 }}>
                    <ReviewTile review={item} />
                </View>
            )}
        />
    )
}

export default Review

const styles = StyleSheet.create({})