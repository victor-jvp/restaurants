import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Loading from '../../components/Loading';
import { getCurrentUser } from '../../utils/actions'
/*import { firebaseApp } from "../../utils/firebase";
import firebase from 'firebase';*/

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

export default function Account() {
  const [login, setLogin] = useState(null);
  
  useEffect(() => {
    const user = getCurrentUser()
    user ? setLogin(true) : setLogin(false)
  }, [])

    /*firebase.auth().onAuthStateChanged((user) => {
      user !== null ? setLogin(true) : setLogin(false);
    });*/

  if(login == null) {  
      return <Loading isVisible={true} text="Cargando..."/>
  }
  return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})