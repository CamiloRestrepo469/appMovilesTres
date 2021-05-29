import { StyleSheet, Dimensions } from 'react-native';

const LoginStyles = StyleSheet.create({

    container: {
        flex: 1,
    },
    logoContainer: {
        backgroundColor: "orange",
        height: Dimensions.get("screen").height * 0.3,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100
    },
    logoemail: {
        width: 10,
        height: 10
    },
    title: {
        position: "absolute",
        right: 30,
        bottom: 50,
        fontSize: 20,
        color: "white"
    },
    inputDataContainer: {
        height: Dimensions.get("screen").height * 0.60,
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 10,
        padding: 10,
    },
    inputData: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 100,
        marginTop: 0,
        padding: 10,
        alignContent: 'center',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
    },
    inputDatafacebook: {
        backgroundColor: "#a8acb1",
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textStyleIngresar: {
        color: "red",
        marginLeft: 20,
        marginRight: 20,
      },
      imageIconStyleIngresar: {
        padding: 10,
        marginLeft: 15,
        height: 25,
        width: 25,
        resizeMode: "stretch",
        alignSelf: "center"
      },
    titleSubtitulo: {
        position: "absolute",
        left: 10,
        bottom: 35,
        fontSize:15,
        color: "black"
    },
    inputDataingresar: {
        backgroundColor: '#a8acb1',
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 50,
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
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
        shadowOpacity: 4.65,
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
        marginTop:50,
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
      loginButton: {
          width:Dimensions.get("screen").width * 0.85,
          marginTop: 50,
          padding: 15,
          borderRadius: 50,
          alignContent: 'center',
          alignItems: 'center'
           
      },
      textButton: {
          color: 'white',
          fontWeight: '900',
          alignContent: 'center',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center'
          
      }


});

export default LoginStyles;