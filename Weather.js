import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from "./src/open-weather-map";
import {translate} from './src/locales';
class WeatherProject extends Component {
    constructor(props){
          super(props);
          this.state={zip:'',forecast:null};
    }
    _handleTextChange= event =>{
      let zip = event.nativeEvent.text; 
      OpenWeatherMap.fetchForecast(zip).then(forecast =>{
        console.log(forecast);
        this.setState({forecast: forecast});
      }) ;

      };
    render(){
     
      let content= null;
      if(this.state.forecast != null){
       
        content= (
          <Forecast
          main = {this.state.forecast.main}
          description = {this.state.forecast.description}
          temp = {this.state.forecast.temp}
          />
        );
      }
        return(
        <View style={styles.container}>
          <ImageBackground
          source= {require("./novofundo.jpg")}
          resizeMode="cover"
          style={styles.backdrop}>
            <View style ={styles.overlay}>
              <View style = {styles.row}>
              <Text style={styles.mainText}>
                Condição atual para:
              </Text>
              <View style={styles.zipContainer}>
              <TextInput style={[styles.zipCode, styles.mainTextInput]}
               onSubmitEditing={event => this._handleTextChange(event)} 
               underlineColorAndroid="transparent">
               </TextInput>
              </View>
              </View>
              {content}
            </View>
          </ImageBackground>
         </View>
        );

  }
}

const basefontSize=16;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    paddingTop:30,
  },
  backdrop:{
    flex:1,
    flexDirection:'column',
    backgroundColor:"#fff",
    
  },

 overlay:{
   paddingTop:5,
   backgroundColor:"#a0aaaa",
   opacity:0.8,
   flexDirection:"column",
   alignItems:"center",
 },
 row:{
   flexDirection:"row",
   flexWrap: "nowrap",
   alignItems: "flex-start",
   padding:90,
 },
 zipContainer:{
   height: basefontSize +15,
   borderBottomColor:"#DDDDDD",
   borderWidth:1.5,
   backgroundColor:"#ccc",
   marginTop:1,
   marginLeft:8,
   borderRadius:9,
   
  },
  zipCode:{
    flex: 1,
    flexBasis:1,
    width:130,
    height:basefontSize,
    borderRadius:5,
   
  },
  mainText:{
    fontSize:basefontSize+6,
    color:"#fff",
    fontFamily:'sans-serif',
    opacity:1.0,     
  },
  mainTextInput:{
    fontSize:basefontSize+6,
    color:"#000",
    fontFamily:'sans-serif',
    opacity:1.0,
  
  }
});
export default WeatherProject;