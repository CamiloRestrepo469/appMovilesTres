import * as React from 'react';
import{
    AppRegistry,
    StyleSheet,
    Image

}from 'react-native'

export default class GaleriaStyles extends React.Component {
    render() {
        return (
            <Image source={this.props.imgsource} style={styles.imagen}></Image>

        );
    }
}
const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }

});
