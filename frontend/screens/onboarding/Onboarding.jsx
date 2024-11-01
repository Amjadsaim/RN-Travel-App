import { FlatList } from 'react-native';
import { Slide } from "../../components"

const Onboarding = () => {
    const slides = [
        {
            id: 1,
            image: require("../../assets/images/1.jpg"),
            title: "Find the perfect place to stay"
        },
        {
            id: 2,
            image: require("../../assets/images/2.jpg"),
            title: "Discover the world"
        },
        {
            id: 3,
            image: require("../../assets/images/3.jpg"),
            title: "Find the best Motels in the world"
        },
    ]

    return (
        <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Slide item={item}/>}
        />
    )
}

export default Onboarding
