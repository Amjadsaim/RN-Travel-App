import { Text } from 'react-native';

const ReusableText = ({text, color, size , family, align}) => {
  return (
    <Text style={{color: color, fontSize: size, fontWeight: family, textAlign: align}}>{text}</Text>
  )
}

export default ReusableText
