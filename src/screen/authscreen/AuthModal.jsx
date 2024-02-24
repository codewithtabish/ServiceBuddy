import { StyleSheet, Text, View } from 'react-native';
import React, { forwardRef } from 'react';
import { Modalize } from 'react-native-modalize'
import ModalHeader from './components/ModalHeader';
import ModalLogin from './components/modallogin/ModalLogin';


const AuthModal =({myRef},ref) => {




  return (
      <>
      <Modalize ref={myRef}>
       <ModalHeader/>
       <ModalLogin/>

         



      
      </Modalize>
    </>
  );
}

export default AuthModal;

const styles = StyleSheet.create({});
