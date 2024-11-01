import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from '../../screens';
import { COLORS, SIZES} from '../../theme/theme';
import ReusableBar from '../reusable/ReusableBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ReusableText from '../reusable/ReusableText';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View style={{ marginHorizontal: 20 }}>
          <ImageBackground source={require("../../assets/profile.jpg")} style={[styles.imageBackground, { marginLeft: -20 }]} resizeMode="cover">
            <View style={styles.overlay} />
          </ImageBackground>
          <ReusableBar title={""} bgColor={COLORS.white} icon={"logout"} color={COLORS.white} onPressBack={() => navigation.goBack()} onPressSearch={() => { navigation.navigate("") }} />
        </View>

        <View style={styles.ProfileBox}>
          <Image source={require("../../assets/person/saim.jpg")} style={styles.ProfileImage} />
         
          <View style={{ height: 8 }} />
          <View style={[styles.ProfileName,]}>
            <View style={{ alignItems: "center" }}>
              <ReusableText text={"Amjad Ali"} family={"bold"} size={SIZES.large} color={COLORS.white} />
            </View>
          </View>

          <View style={{ height: 2 }} />
          <View style={styles.ProfileName}>
            <View style={{ alignItems: "center" }}>
              <ReusableText text={"45amjad45@gmail.com"} family={"400"} size={SIZES.medium} color={COLORS.white} />
            </View>
          </View>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name='Bookings' component={TopBookings} />
        <Tab.Screen name='Trips' component={TopTrips} />
        <Tab.Screen name='Info' component={TopInfo} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default TopTab

const styles = StyleSheet.create({
  imageBackground: {
    width: SIZES.width,
    height: 300,
    borderRadius: 0,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  ProfileBox: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    alignItems: "center"
  },
  ProfileImage: {
    resizeMode: "cover",
    height: 100,
    width: 100,
    borderColor: COLORS.lightWhite,
    borderWidth: 2,
    borderRadius: 90
  },
  ProfileName: {
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 12,
  }
})
