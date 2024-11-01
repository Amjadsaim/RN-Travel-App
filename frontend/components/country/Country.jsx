import { StyleSheet,TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { COLORS, TEXT } from '../../theme/theme';
import { images } from '../../images';
import ImageBox from '../Imagebox/ImageBox';
import ReusableText from '../reusable/ReusableText';

const Country = ({item}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate("CountryDetails", {item})}>
        <View>
            <ImageBox source={images[item.country.toLowerCase()]} height={85} width={85} radius={12} />
            <View style={{height: 5}}/>
            <ReusableText text={item.country} family={"500"} size={TEXT.medium} color={COLORS.medium} align={"center"}/>
        </View>
    </TouchableOpacity>
  )
}

export default Country

const styles = StyleSheet.create({})