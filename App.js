import React, { Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render(){
    return(
      <View style={style.container}>
      <View style={style.container1}>
      <Text style={style.text}> Hello World!</Text>
      <Image style ={style.img} source={logo} />
      
      </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#5ef7f5",
  alignItems: 'center',
  padding: "20px",
},

container1: {
  backgroundColor: "#ed72e9",
},
text: {
  color: "white",
  fontFamily: "Impact",
  fontSize: 50,
},

img:{
  width: 50,
  height: 50,
}
});

export default App;
