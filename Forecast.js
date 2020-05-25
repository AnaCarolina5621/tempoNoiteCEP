import React,{Component} from 'react';
import{ StyleSheet,Text, View} from 'react-native';

export default class Forecast extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.bigText}>
                    {this.props.main}
                </Text>
                <Text style={styles.mainText}>
                    Condições Atuais:{this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}°C
                </Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:100,
        marginTop:-50
    },
    bigText:{
        flex:2,
        fontSize:20,
        textAlign:"center",
        margin: 2,
        color: '#FFFFFF'
    },
    mainText:{
        flex:2,
        fontSize:16,
        textAlign:"center",
        color: '#FFFFFF',
    }
});
