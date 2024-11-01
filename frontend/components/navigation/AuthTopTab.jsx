import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Registration, Signin } from '../../screens';
import { COLORS, SIZES } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
                 <Image source={require("../../assets/bg1.jpg")} style={[styles.imageBackground, { }]} />
                
                <View style={{height: 600}}>
                    <Tab.Navigator>
                        <Tab.Screen name='Signin' component={Signin} />
                        <Tab.Screen name='Registration' component={Registration} />
                    </Tab.Navigator>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AuthTopTab

const styles = StyleSheet.create({
    imageBackground:{
        width: SIZES.width,
        height: 300,
        borderRadius: 0,   
    }
})