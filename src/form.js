import React, { Component } from 'react';
import {

  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet

} from 'react-native';

export default class InputForm extends Component {
//props are provided by the parent component BMI
//this.props.weightKG
//this.props.heightCM

    render(){

      const props = this.props;

      var info = {

          weightString: props.weight.toString(),

          heightString: props.height.toString(),

          weight: props.weight,

          height: props.height

      }

      return(
          <View style={styles.view}>
              <View style={styles.input}>
                <Text style={styles.text}>Length in CM</Text>
                <TextInput
                  style={styles.textInput}
                  keyBoardType="numeric"
                  value={info.heightString}
                  onChangeText={(text)=> this.props.changeHeight({text})}
                >
                </TextInput>
              </View>
              <View style={styles.input}>
                <Text style={styles.text}>Weight in KG</Text>
                <TextInput
                  style={styles.textInput}
                  keyBoardType="numeric"
                  value={info.weightString}
                  onChangeText={(text)=> this.props.changeWeight({text})}
                ></TextInput>
              </View>
              <TouchableHighlight
              style={styles.button}
              onPress={this.props.showBMI}
              //use showBMI function when pressed
              >
                <Text style={styles.buttonText}>Calculate BMI</Text>
              </TouchableHighlight>
          </View>
      )//return

    }//render

};//InputForm class

const styles = StyleSheet.create({

  view: {
  //default flow direction is column
      paddingTop: 50,
      paddingLeft: 30,
      paddingRight: 30,
      paddingBottom: 50,
      flex:1,

  },
  //text and textInput live inside input(view)
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {

    color: "white",
    marginBottom: 30,
    fontWeight: "bold",
    flex:1,
    paddingTop: 10
  },
  textInput:{

    height: 40,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 6,
    //marginBottom: 5,
    flex:2,
    color: "white",
    paddingLeft: 10

  },
  button: {
    padding:12,
    borderRadius:18,
    backgroundColor: "#9b59b6"
  },
  buttonText: {

    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"

  }


});
