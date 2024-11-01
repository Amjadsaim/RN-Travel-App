import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {COLORS , SIZES, TEXT} from '../../theme/theme';
import ReusableText from '../reusable/ReusableText';
import ReusableButton from '../reusable/ReusableButton';

const Slide = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={item.image} style={styles.SlideImage} />
      <View style={styles.SlideStack}>
        <ReusableText text={item.title} size={TEXT.xxLarge} color={COLORS.white} family={"medium"} />
        <View height={30}/>
        <ReusableButton title={"Let's go"} onPress={()=>{navigation.navigate("Bottom")}} textColor={COLORS.white} width={(SIZES.width - 50)/ 2.2} bgColor={COLORS.red} borderColor={COLORS.red} borderWidth={0}/>
      </View>
    </View>
  )
}

export default Slide

const styles = StyleSheet.create({
    SlideImage:{
        resizeMode: "cover",
        width: SIZES.width,
        height: SIZES.height
    },
    SlideStack:{
        position: "absolute",
        bottom: 0,
        marginBottom: 60,
        marginHorizontal: 20
    }
})