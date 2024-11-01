import { StyleSheet, Text, View } from 'react-native';
import { ProfileTile } from '../../components';

const TopInfo = ({ navigation }) => {
  return (
    <View style={styles.InfoContainer}>
      <ProfileTile title={"Personal Information"} icon={"person"} onPress={() => {}} />
      <ProfileTile title={"Payments"} icon={"payment"} onPress={() => navigation.navigate("Payments")} />
      <ProfileTile title={"Settings"} icon={"settings"} onPress={() => navigation.navigate("Settings")} />
    </View>
  )
}

export default TopInfo

const styles = StyleSheet.create({
  InfoContainer:{
    marginBottom: 10,
    flexDirection: "column",
    rowGap: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
})