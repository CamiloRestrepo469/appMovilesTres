import * as React from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Modal,
    Image,
    StatusBar,

}from 'react-native';
import GaleriaStyles from './GaleriaStyles';



export default class GaleriaScreen extends React.Component {

    state = {
        modalVisible: false,
        madalImagen: require('./img/imgenUUno.png'),
        images: [
            require('./img/imgenUUno.png'),
            require('./img/ImagenDosss.png'),
            require('./img/ImganTRes.png'),
            require('./img/ImagenCuatro.png'),
            require('./img/ImagenCinco.png'),
            require('./img/ImagenSeis.png'),
            require('./img/ImagenDosss.png'),
            require('./img/ImagenSeis.png'),

        ]
    }

    setModalVisible(visible,imageKey) {
        this.setState({ madalImagen: this.state.images[imageKey] });
        this.setState({ modalVisible: visible});
    }


    render() {

        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback key={key} 
                        onPress={() =>{this.setModalVisible(true, key)}}>      
                        <View style={styles.imagewrap}>
                            
                        <StatusBar backgroundColor="#00c4b3">
                            <Text style={styles.galeria}>Galeria</Text>
                        </StatusBar>
                            <GaleriaStyles imgsource={val}></GaleriaStyles>
                            
                        </View>
                        </TouchableWithoutFeedback>
                       
        });
        return (
            <View style={styles.container}>

                <Modal style={styles.modal} animationType={'fade'} 
                                transparent={true} visible={this.state.modalVisible}
                                onRequestClose={() => {}}>

                                <View style={styles.modal}>
                                    <Text style={styles.text}
                                    onPress={() => {this.setModalVisible(false)}}><Image source={require('./img/icons8-wide-left-arrow-64.png')} style={styles.logoFlecha}></Image></Text>
                                    <GaleriaStyles imgsource={this.state.madalImagen}></GaleriaStyles>
                                </View>

                </Modal>


                {images}

            </View>
            

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#00c4b3',
    },
    imagewrap: {
        margin : 2,
        padding: 2,
        height: (Dimensions.get('window').height/3)-12,
        width:(Dimensions.get('window').width/2)-4 ,
        backgroundColor: '#00c4b3',
        
    },
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    text: {
        color: '#a8acb1',
        width: 40,
        height: 40,
        color: '#a8acb1',
        top:5,
        bottom: 50,
        right:0,
    

    },
    galeria:{
        // color: '#a8acb1'
    },
    
    logoContainer: {
        backgroundColor: "orange",
        height: Dimensions.get("screen").height * 0.3,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    
    logoFlecha: {
        width: 20,
        height: 10,
        // color: '#a8acb1',
        top:5,
        bottom: 20,
        right:15,
        flex:1
        
    }
    

});

AppRegistry.registerComponent('GaleriaScreen', () => GaleriaScreen);
