import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
// import ModalLogin from  '../Authentication/Modal.js'
import SignupForm from '../Authentication/SignupForm.js'
import SigninForm from '../Authentication/SigninForm.js';


export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isSignupVisible, setIsSignupVisible] = React.useState(false);
  const [isSigninVisible, setIsSigninVisible] = React.useState(false);

  const toggleSignup = () => {
    setIsSignupVisible(!isSignupVisible);
  };
  
  const toggleSignin = () => {
    setIsSigninVisible(!isSigninVisible);
  };


  return (
    <View style={styles.container}>
      {/* TODO: Conditionally render login/Logout buttons */}
      {isLoggedIn === true?
      <>
      <Button title='Profile' />
      <Button title='Log out' />
      </>
      :
      <>
      <Button onPress={ toggleSignup } title='SignUp' />
      <View View style={styles.centeredView}>
        <Modal 
        visible = { isSignupVisible } 
        animationType="slide"
        transparent={true}>  
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Button title='X' onPress={ toggleSignup } />
            <SignupForm toggleSignup={ toggleSignup } />
            </View>
          </View>
        </Modal>
      </View>
      <Button onPress={ toggleSignin } title='Sign In' />
      <View View style={styles.centeredView}>
        <Modal 
        visible = { isSigninVisible } 
        animationType="slide"
        transparent={true}>  
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Button title='X' onPress={ toggleSignin } />
            <SigninForm toggleSignin={ toggleSignin } />
            </View>
          </View>
        </Modal>
      </View>
      </>
    }

    {/* {modalShown === true ?
    <>
      <ModalLogin />
    </>
    :null} */}

   </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor:'#F8F8F8',
  //   justifyContent:'space-in',
  //   alignItems:'baseline',
  //   height: 60,
  //   borderWidth:0,
  //   shadowColor:'#F8F8F8',
  //   shadowOffset:{ width:0, height:2 },
  //   shadowOpacity:0.5,
  //   elevation:2,
  //   position: 'absolute'
  // },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});