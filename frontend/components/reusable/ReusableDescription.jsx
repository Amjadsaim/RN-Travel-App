import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TEXT } from '../../theme/theme';
import { useState } from 'react';

const ReusableDescription = ({ text, lines }) => {

  const [fullDescription, setFullDescription] = useState(false);

  return (
    <View>
      {fullDescription ? (
        <TouchableWithoutFeedback onPress={() => setFullDescription(prev => !prev)}>
          <Text style={styles.ReusableDescriptionBox}>{text}</Text>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setFullDescription(prev => !prev)}>
          <Text numberOfLines={lines} style={styles.ReusableDescriptionBox}>{text}</Text>
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}

export default ReusableDescription

const styles = StyleSheet.create({
  ReusableDescriptionBox: {
    paddingVertical: 10,
    fontWeight: "300",
    fontSize: TEXT.medium,
  }
})