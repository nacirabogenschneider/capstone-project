import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyASuZZP18gjcZxNBvTx__2ubudTD9UdFus',
  authDomain: 'schoolway.firebaseapp.com',
  databaseURL: 'https://schoolway.firebaseio.com',
  projectId: 'schoolway',
  storageBucket: 'schoolway.appspot.com',
  messagingSenderId: '987539394137',
  appId: '1:987539394137:web:3ca0e90d04245dd078ab48',
  measurementId: 'G-PSEJ2HRPWE',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const schoolRef = db.collection('school')
schoolRef.add({
  schoolname: 'Schule Heidacker',
  address: 'Heidacker 13, 22523 Hamburg',
})
