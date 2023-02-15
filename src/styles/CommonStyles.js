import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      paddingTop: 23,
    },
    input: {
      margin: 14,
      borderColor: '#FFFFFF',
      borderWidth: 1,
      marginHorizontal: 20,
      backgroundColor: '#FFFFFF',
      paddingVertical: 17,
      padding: 10,
    },
    textButton: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
    },
    buttonTitle: {
      color: 'white',
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 22,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DB3022',
      borderRadius: 10,
      height: 55,
      justifyContent: 'center',
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: '#D32626',
      borderRadius: 25,
      paddingVertical: 13,
      marginHorizontal: 20,
    },
    appButtonContainerTop: {
      elevation: 8,
      backgroundColor: '#D32626',
      borderRadius: 25,
     width:'30%',
     height:'3%',
    alignSelf:'flex-end',
    margin:5

    },
    appButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
    forgotcontainer: {
      padding: 20,
      justifyContent: 'flex-end',
    },
    txtstyle: {
      paddingTop: 40,
      paddingLeft: 30,
      fontWeight: 'bold',
      fontSize: 30,
    },
    containerRound: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      alignSelf: 'center',
      color: 'white',
    },
    roundshape: {
      backgroundColor: 'white',
      height: 60, //any of height
      width: 60, //any of width
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20, // it will be height/2
    },
  });
  
  export default styles;
  