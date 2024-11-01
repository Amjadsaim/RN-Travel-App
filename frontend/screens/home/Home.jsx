import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, TEXT } from '../../theme/theme';
import { AntDesign } from '@expo/vector-icons';
import { Places, ReusableText, Recommendations, BestHotel } from '../../components';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.HomeContainer}>
      <View>
        
         <View style={styles.HomeBoxRowWithSpace}>
              <ReusableText  text={"Hi User!"} family={400} size={TEXT.large} color={COLORS.black} />
              <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate("Search")}>
                  <AntDesign name='search1' size={26} />
              </TouchableOpacity>
         </View>

        <View style={{height: SIZES.xLarge}}/>

        <ReusableText text={"Places"} family={"medium"} size={TEXT.large} color={COLORS.black} />

        <Places />

        <View style={{height: 15}}/>

        <Recommendations />

        <View style={{height: 15}}/>

    	  <BestHotel />

      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  HomeContainer:{
    flex: 1,
    marginHorizontal: 20
  },
  HomeBoxRowWithSpace:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  Box:{
    backgroundColor: COLORS.white,
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  }
})