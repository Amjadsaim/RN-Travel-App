import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import { AntDesign } from '@expo/vector-icons';
import ReusableText from './ReusableText';

const ReusableCounter = () => {
    const [count, setCount] = useState(1);
    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = () =>{
        if (count > 1) {
            setCount(count - 1);
        }
    }
  return (
    <View style={styles.RowwithSpace}>
      <AntDesign name='minussquareo' size={26} color={COLORS.gray} onPress={decrement} />
      <ReusableText text={`${count}`} size={SIZES.medium} color={COLORS.black} family={"300"} />
      <AntDesign name='plussquareo' size={26} color={COLORS.gray} onPress={increment} />
    </View>
  )
}

export default ReusableCounter

const styles = StyleSheet.create({
    RowwithSpace:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10
    }
})