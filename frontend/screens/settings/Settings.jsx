import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import { ReusableBar, ReusableText, SettingTile } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.SettingContainer}>
            <View style={{ height: 60, marginHorizontal: 10 }}>
                <ReusableBar bgColor={COLORS.lightWhite} onPressBack={() => navigation.goBack()} />
            </View>
            <View style={{marginHorizontal: 20}}>
              
                <ReusableText text={"Account Settings"} family={"400"} size={SIZES.xLarge} color={COLORS.black} />
                <View style={{height: 10}}/>
                <SettingTile title={"Language"}/>
                <View style={{height: 3}}/>
                <SettingTile title={"Country"} title1={"USA"}/>
                <View style={{height: 3}}/>
                <SettingTile title={"Currency"} title1={"USD"}/>

                <View style={{height: 10}}/>
                <ReusableText text={"Support"} family={"400"} size={SIZES.xLarge} color={COLORS.black} />
                <View style={{height: 10}}/>
                <SettingTile title={"Get Help"} title1={""}/>
                <View style={{height: 3}}/>
                <SettingTile title={"Give a feedback"} title1={""}/>

                <View style={{height: 10}}/>
                <ReusableText text={"Legal"} family={"400"} size={SIZES.xLarge} color={COLORS.black} />
                <View style={{height: 10}}/>
                <SettingTile title={"Terms of service"} title1={""}/>
                <View style={{height: 3}}/>
                <SettingTile title={"Privacy Policy"} title1={""}/>
            </View>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({
    SettingContainer: {
        flex: 1,
    }
})