"use strict";

//Import React library and components
import React, { Component } from 'react';
//Import React Native library and components
import {Text, AppRegistry, View, StyleSheet} from 'react-native'
//Import StyleSheet
import Style from './style.js';
//Import Form Component
import InputForm from './form.js';

class BMI extends Component {

    constructor(props){

        super(props);

        this.state = {

          heightCM: " ",

          weightKG: " ",

          myBMI: "?",

          showBMI: ""

        }

    //bind changeWeight to the BMI Component class
    this.changeWeight = this.changeWeight.bind(this);
    //bind changeHeight to the BMI Component class
    this.changeHeight = this.changeHeight.bind(this);
    this.showBMI = this.showBMI.bind(this);

    }//constructor

    //a function to change state here
    //pass to the InputForm component

  changeWeight(weight){
  //using this.state refers to function closure, so we need to bind the function to the class as above

      var weightNum = Number(weight.text);
      //convert the weight.text from a TextInput component to a number first

      if(isNaN(weightNum)){
      //check if the entry in TextInput is really a number

        alert("Please enter a number");

        return;

      }

      if(weightNum !== 0 && this.state.heightCM !==0){
      //updating WeightNum from TextInput
      //heightCM is from this.state
      //if both are not zero, calculate BMI

        var bmi = (weightNum / (this.state.heightCM * this.state.heightCM)) * 10000;

        var updateBMI = bmi.toFixed(2)

        this.setState({

            weightKG: weightNum,

            myBMI: updateBMI

        })

    } else {
    //if weightNum from TextInput or this.state.heightCM are zero

        this.setState({

            weightKG: weightNum,

            myBMI: "?"

        })


    }


  }

  changeHeight(height){
  //using this.state refers to function closure, so we need to bind the function to the class as above
  //updating height here

  var heightNum = Number(height.text);

  if(isNaN(heightNum)){
  //check if the entry in TextInput is a number

    //return;

    alert("Please enter a number");

    return;

  }

      if(heightNum !== 0 && this.state.weightKG !==0){
      //heightNum is from TextInput component and weight from this.state.weightKG
      //if both are not zero, we update the BMI

        var bmi = (this.state.weightKG / (heightNum * heightNum)) * 10000;

        var updateBMI = bmi.toFixed(2);

        this.setState({

          heightCM: heightNum,

          myBMI: updateBMI

        })

      } else {
      //if heightNum or this.state.weightKG are zero, we set BMI to ?

        this.setState({

          heightCM: heightNum,

          myBMI: "?"

        })

      }


  }

  showBMI(){
  //update the BMI shown using onPress event TouchableHighlight

    var myBMI = this.state.myBMI;

    this.setState({

        showBMI: myBMI

    })


  }

    render(){

        console.log(this.state);

        return(

          <View style={Style.rootContainer}>
            <View style={Style.displayContainer}>
              <Text style={Style.titleText}>BMI</Text>
              <Text style={Style.bmi}>{this.state.showBMI}</Text>
            </View>
            <View style={Style.inputContainer}>
              <InputForm weight={this.state.weightKG} height={this.state.heightCM} changeWeight={this.changeWeight} changeHeight={this.changeHeight} showBMI={this.showBMI}/>
            </View>
          </View>

        )

    }

}//BMI component

//register the BMI app
AppRegistry.registerComponent('BMI', () => BMI);
