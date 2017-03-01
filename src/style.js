//@flow

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

  rootContainer: {
    flex: 1

  },

  inputContainer:{

    flex: 1,
    backgroundColor: "#3E606F"

  },

  displayContainer:{

    flex: 1,
    backgroundColor: "#193441",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"

  },
  titleText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",

  },
  bmi: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold"

  }

});

export default Style;
