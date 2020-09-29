import React from 'react';
import {View, StyleSheet, Alert, TouchableHighlight, Dimensions,Image} from 'react-native';

const button1 = () =>{
  Alert.alert("I'm card first");
}

const button2 = () =>{
  Alert.alert("I'm card second");
}

const button3 = () =>{
  Alert.alert("I'm card third");
}

const button4 = () =>{
  Alert.alert("I'm card fourth");
}

const button5 = () =>{
  Alert.alert("GANAMOS EL PARCIAL :)");
}

const App = () =>{
  return(
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.card1}>
          <Image source={require('./assets/moviles.png')} style={styles.image}></Image>
          <TouchableHighlight style={styles.alertButton} onPress={button1}>
            <Image source={require('./assets/carpeta.png')} style={styles.imageButton}></Image>
          </TouchableHighlight>
            <Image source={require('./assets/flecha.png')} style={styles.imageArrow}></Image>
        </View>
        <View style={styles.card2}>
          <Image source={require('./assets/arawaza.png')} style={styles.image}></Image>
          <TouchableHighlight style={styles.alertButton} onPress={button2}>
            <Image source={require('./assets/carpeta.png')} style={styles.imageButton}></Image>
          </TouchableHighlight>
            <Image source={require('./assets/flecha.png')} style={styles.imageArrow}></Image>
        </View>
      </View>    

      <View style={styles.view2}>
        <View style={styles.card3}>
          <Image source={require('./assets/parmessano.jpg')} style={styles.image}></Image>
          <TouchableHighlight style={styles.alertButton} onPress={button3}>
            <Image source={require('./assets/carpeta.png')} style={styles.imageButton}></Image>
          </TouchableHighlight>
            <Image source={require('./assets/flecha.png')} style={styles.imageArrow}></Image>
        </View>
        <View style={styles.card4}>
          <Image source={require('./assets/bbcCerveza.png')} style={styles.image}></Image>
          <TouchableHighlight style={styles.alertButton} onPress={button4}>
            <Image source={require('./assets/carpeta.png')} style={styles.imageButton}></Image>
          </TouchableHighlight>
            <Image source={require('./assets/flecha.png')} style={styles.imageArrow}></Image>
        </View>
      </View>

      <View style={styles.view3}>
        <View style={styles.card5}>
          <Image source={require('./assets/lavocaderia.jpg')} style={styles.image}></Image>
          <TouchableHighlight style={styles.alertButton} onPress={button5}>
            <Image source={require('./assets/carpeta.png')} style={styles.imageButton}></Image>
          </TouchableHighlight>
            <Image source={require('./assets/flecha.png')} style={styles.imageArrow}></Image>
        </View>
        <View style={styles.card6}></View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  view1: {
    flex: 1,
    flexDirection: "row",
    margin:20,
    borderRadius: 20
  },
  card1: {
    flex: 1,
    backgroundColor: "#64b5f6",
    margin:20,
    borderRadius: 15,
  },
  card2: {
    flex: 1,
    backgroundColor: "#f44336",
    margin:20,
    borderRadius: 15
  },
  view2: {
    flex: 1,
    flexDirection: "row",
    margin:20,
    borderRadius: 20
  },
  card3: {
    flex: 1,
    backgroundColor: "#8d6e63",
    margin:20,
    borderRadius: 15
  },
  card4: {
    flex: 1,
    backgroundColor: "#ce93d8",
    margin:20,
    borderRadius: 15
  },
  view3: {
    flex: 1,
    flexDirection: "row",
    margin:20,
    borderRadius: 20
  },
  card5: {
    flex: 1,
    backgroundColor: "#66bb6a",
    margin:20,
    borderRadius: 15
  },
  card6: {
    flex: 1,
    backgroundColor: "white",
    margin:20,
    borderRadius: 20
  },
  image: {
    width: 165, 
    height: 50, 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15
  },
  alertButton:{
    marginTop: 10,
    width: Dimensions.get("screen").width*0.1,
    alignItems: "center",
    left: 120,
    top: 80,
  },
  imageButton:{
    width: 25, 
    height: 20,
  },
  imageArrow: {
    width: 20, 
    height: 20, 
    left: 105,
    top: 60,
  }
})

export default App;