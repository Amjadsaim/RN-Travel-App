import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBox, ReusableBar, ReusableButton, ReusableCounter, ReusableText, Rating} from '../../components';
import { COLORS, SIZES } from '../../theme/theme';
import { imageHotels } from '../../images';

const SelectedRoom = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <SafeAreaView>
            <View style={styles.Bar}>
                <ReusableBar title={item.title} bgColor={COLORS.white} onPressBack={() => navigation.goBack()} />
            </View>

            <View style={styles.SelectedRoomContainer}>
                <View>
                    <ImageBox source={imageHotels[item.title.toLowerCase()]} width={SIZES.width - 50} height={200} radius={15} />
                </View>

                <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                    <View style={styles.RowwithSpace}>
                        <ReusableText text={item.title} family={"400"} size={SIZES.medium} color={COLORS.black} />
                        <View style={[styles.RowwithSpace, { justifyContent: "flex-start" }]}>
                            <Rating rating={item.rating} />
                            <View style={{ width: 10 }} />
                            <ReusableText text={`(${item.review})`} family={"300"} size={SIZES.small} color={COLORS.gray} />
                        </View>
                    </View>

                    <View style={{ height: 10 }} />
                    <ReusableText text={item.location} size={SIZES.medium} color={COLORS.gray} family={"300"} />

                    <View style={styles.Box}>
                    </View>

                    <ReusableText text={"Room Requirements"} size={SIZES.medium} color={COLORS.black} family={"400"} />
                    <View style={{ height: 30 }} />

                    <View style={styles.RowwithSpace}>
                        <ReusableText text={"Price per night"} size={SIZES.medium} color={COLORS.black} family={"400"} />
                        <ReusableText text={"$ 400"} size={SIZES.medium} color={COLORS.black} family={"300"} />
                    </View>

                    <View style={{ height: 10 }} />

                    <View style={styles.RowwithSpace}>
                        <ReusableText text={"Payment Method"} size={SIZES.medium} color={COLORS.black} family={"400"} />
                        <ReusableText text={"Visa"} size={SIZES.medium} color={COLORS.black} family={"300"} />
                    </View>
                    <View style={{ height: 10 }} />

                    <View style={styles.RowwithSpace}>
                        <ReusableText text={"4 Guest"} size={SIZES.medium} color={COLORS.black} family={"400"} />
                        <ReusableCounter />
                    </View>

                    <View style={{ height: 20 }} />
                    <ReusableButton onPress={() => { navigation.navigate("Successful", {item}) }} title={"Book Now"} width={SIZES.width - 70} bgColor={COLORS.green} borderColor={COLORS.green} borderWidth={0} textColor={COLORS.white} />
                    <View style={{ height: 20 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SelectedRoom

const styles = StyleSheet.create({
    Bar:{
        height: 50, 
        marginHorizontal: 20 
    },
    SelectedRoomContainer:{ 
        marginHorizontal: 20, 
        backgroundColor: COLORS.lightWhite, 
        borderRadius: 12,
        padding: 5
    },
    RowwithSpace:{
        flexDirection:"row", 
        justifyContent:"space-between" , 
        alignItems: "center"
    },
    Box:{
        borderWidth: 0.5,
        borderColor: COLORS.lightGray,
        marginVertical: 15
    }
})