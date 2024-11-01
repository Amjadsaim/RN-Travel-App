import { StyleSheet, View, Image } from 'react-native';
import { ReusableButton, ReusableText, ReusableTile } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { COLORS, SIZES } from '../../theme/theme';

const Successful = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    return (
        <SafeAreaView>
            <View style={{ position: "relative" }}>
                <View style={styles.SuccessfulContainer}>
                    <ReusableText text={"Booking Successful"} family={"bold"} size={SIZES.large} color={COLORS.black} />
                    <View style={{ height: 5 }} />
                    <ReusableText text={"you can find your booking details below"} family={"300"} size={SIZES.medium} color={COLORS.gray} />
                    <View style={{ height: 10 }} />

                    <View style={{ marginHorizontal: 30, }}>
                        <ReusableText text={"Room Details"} family={"400"} size={SIZES.large} color={COLORS.black} />
                        <View style={{ height: 10 }} />
                        <ReusableTile item={item} />
                        <View style={{ height: 10 }} />
                        <ReusableButton onPress={() => navigation.navigate("Bottom")} title={"Done"} width={SIZES.width - 50} bgColor={COLORS.green} borderColor={COLORS.green} borderWidth={0} textColor={COLORS.white} />
                    </View>
                </View>
                <Image source={require("../../assets/successful.png")} style={styles.SuccessfulImage} />
            </View>
        </SafeAreaView>
    )
}

export default Successful

const styles = StyleSheet.create({
    SuccessfulImage: {
        resizeMode: "contain",
        width: SIZES.width,
        height: SIZES.height - 240,
        paddingHorizontal: 20
    },
    SuccessfulContainer: {
        position: "absolute",
        top: SIZES.height - 400,
        left: 0,
        right: 0,
        alignItems: "center"
    }
})