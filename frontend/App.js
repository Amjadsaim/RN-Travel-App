import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryDetails, HotelDetails, HotelList, HotelSearch, Onboarding,Settings, PlaceDetails, RecommendationList, Search, SelectRoom, SelectedRoom, Successful } from './screens';
import BotttomTab  from './components/navigation/BottomTab';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Onboard' component={Onboarding} options={{headerShown: false}}/>
      <Stack.Screen name='Bottom' component={BotttomTab} options={{headerShown: false}}/>
      <Stack.Screen name='Search' component={Search} options={{headerShown: false}}/>
      <Stack.Screen name='HotelSearch' component={HotelSearch} options={{headerShown: false}}/>
      <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{headerShown: false}}/>
      <Stack.Screen name='CountryDetails' component={CountryDetails} options={{headerShown: false}}/>
      <Stack.Screen name='HotelDetails' component={HotelDetails} options={{headerShown: false}}/>
      <Stack.Screen name='HotelList' component={HotelList} options={{headerShown: false}}/>
      <Stack.Screen name='Recommendations' component={RecommendationList} options={{headerShown: false}}/>
      <Stack.Screen name='SelectRoom' component={SelectRoom} options={{headerShown: false}}/>
      <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{headerShown: false}}/>
      <Stack.Screen name='Successful' component={Successful} options={{headerShown: false}}/>
      <Stack.Screen name='Settings' component={Settings} options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

