import{StyleSheet, Dimensions} from 'react-native'

const ButtonStyles = StyleSheet.create({
    small: {
        width:Dimensions.get("screen").width * 0.5,
          marginTop: 20,
          padding: 16,
          borderRadius: 50,
          alignContent: 'center',

    },
    medium: {
        width:Dimensions.get("screen").width * 0.7,
          marginTop: 20,
          padding: 16,
          borderRadius: 50,
          alignContent: 'center',

    },
    large: {
        width:Dimensions.get("screen").width * 0.85,
          marginTop: 20,
          padding: 16,
          borderRadius: 50,
          alignContent: 'center',
    }
})
export default ButtonStyles;