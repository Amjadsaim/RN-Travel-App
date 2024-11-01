import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TEXT } from '../../theme/theme';

const ReusableComment = ({ comment, lines }) => {
    const [fullDescription, setFullDescription] = useState(false);
    return (
        <View>
            {fullDescription ? (
                <TouchableWithoutFeedback onPress={() => setFullDescription(prev => !prev)}>
                    <Text style={styles.ReusableCommentBox}>{comment}</Text>
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => setFullDescription(prev => !prev)}>
                    <Text numberOfLines={lines} style={styles.ReusableCommentBox}>{comment}</Text>
                </TouchableWithoutFeedback>
            )}
        </View>
    )
}

export default ReusableComment

const styles = StyleSheet.create({
    ReusableCommentBox: {
        paddingVertical: 10,
        fontWeight: "300",
        fontSize: TEXT.small,
    }
})