import { Image, StyleSheet, Text, View } from 'react-native';

const ImageBox = ({source, height, width, radius}) => {
  return (
    <View>
      <Image source={source} style={[styles.CountryImageBox, {height: height, width: width, borderRadius: radius}]} />
    </View>
  )
}

export default ImageBox

const styles = StyleSheet.create({
    CountryImageBox:{
        resizeMode: "cover"
    }
})