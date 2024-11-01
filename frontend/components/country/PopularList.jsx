import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import ReusableTile from '../reusable/ReusableTile';

const PopularList = ({data}) => {
    const navigation = useNavigation();

    const renderItem = ({item})=>(
        <View style={{marginBottom: 20}}>
            <ReusableTile item={item} onPress={() =>  navigation.navigate("PlaceDetails", {item})}/>
        </View>
    )

  return (
    <FlatList 
        data={data}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
    />
  )
}

export default PopularList

const styles = StyleSheet.create({})