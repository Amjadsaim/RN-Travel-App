import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Chat, Profile, Location } from '../../screens';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../../theme/theme';
import TopTab from './TopTab';
import AuthTopTab from './AuthTopTab';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor="#eb6a58"
            tabBarHideKeyBoard={true}
            headerShown={false}
            inactiveColor="#3e2465"
            barStyle={{ paddingBottom: 48 }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "grid" : "grid-outline"}
                        color={focused ? COLORS.red : COLORS.gray}
                        size={26}
                    />
                )
            }} />
            <Tab.Screen name='Location' component={Location} options={{
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "location" : "location-outline"}
                        color={focused ? COLORS.red : COLORS.gray}
                        size={26}
                    />
                )
            }} />
            <Tab.Screen name='Chat' component={AuthTopTab} options={{
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                        color={focused ? COLORS.red : COLORS.gray}
                        size={26}
                    />
                )
            }} />
            <Tab.Screen name='Profile' component={TopTab} options={{
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Ionicons
                        name={focused ? "person" : "person-outline"}
                        color={focused ? COLORS.red : COLORS.gray}
                        size={26}
                    />
                )
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
    tabBarStyle: {
        padding: 5,
        paddingTop: 0,
        borderRadius: 20,
        position: "absolute",
        bottom: 20,
        height: 80,
        left: 20,
        right: 20
    }
})