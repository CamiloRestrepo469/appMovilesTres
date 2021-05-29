import { StyleSheet, Dimensions } from 'react-native';

const RegistroStyles = StyleSheet.create({

    container: {
        flex: 1,
    },
    logoContainer: {
        backgroundColor: "orange",
        height: Dimensions.get("screen").height * 0.27,
        borderBottomRightRadius: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 65,
        height: 65
    },
    logoFlecha:{
        width: 25,
        height: 25

    },
    title: {
        position: "absolute",
        right: 25,
        bottom: 20,
        fontSize: 19,
        color: "black",
        alignContent: 'center',
        textAlign: 'center'

    },
    inputDataContainer: {
        height: Dimensions.get("screen").height * 0.60,
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10
    },
    inputData: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width * 0.80,
        borderRadius: 50,
        paddingLeft: 30,
        marginTop: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
    },
    titleSubtitulo: {
        position: "absolute",
        left: 12,
        bottom: 0,
        top:299,
        fontSize: 15,
        color: "black"
    },
    titleSubtitulodos: {
        position: "absolute",
        left: 15,
        bottom: 20,
        fontSize: 19,
        color: "black",
        alignContent: 'center',
        textAlign: 'center'
    },
    inputDataingresar: {
        backgroundColor: '#a8acb1',
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 50,
        marginTop: 30,
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
    },
    
    facebookStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#485a96",
        borderWidth: 0.5,
        borderColor: "#fff",
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 5,
        position: "relative",
        marginBottom: 10,
        marginTop:0,
        left: 30,
        bottom: 55,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 10,
      },
      imageIconStyle: {
        padding: 10,
        marginLeft: 50,
        height: 25,
        width: 25,
        resizeMode: "stretch",
        alignSelf: "center"
      },
      textStyle: {
        color: "#fff",
        marginLeft: 10,
        marginRight: 40,
      },
      googleStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderWidth: 0.5,
        borderColor: "#fff",
        height: 50,
        width: 50,
        borderRadius: 50,
        margin: 5,
        marginTop:10,
        right: 40,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 4.65,
        shadowRadius: 4.65,
        elevation: 10,
        
      },
      imageIconStyleGoogle: {
        padding: 10,
        marginLeft: 50,
        height: 25,
        width: 25,
        resizeMode: "stretch"
      },
      textStyleGoogle: {
        color: "#fff",
        marginLeft: 10,
        marginRight: 40,
      },
      textButton: {
          color: 'white',
          fontWeight: '900',
          alignContent: 'center',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center'
          
      },
      loginButton: {
          width:Dimensions.get("screen").width * 0.85,
          marginTop: 40,
          padding: 16,
          borderRadius: 50,
          alignContent: 'center',
          alignItems: 'center'
           
      }

});


export default RegistroStyles;