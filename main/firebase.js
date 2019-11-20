// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// Disable this module because it breaks on build
// import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyC2pKf7gPdUB8M9QwKZxrKcwFoa37GCEKw',
  authDomain: 'vision2020-8ee3c.firebaseapp.com',
  databaseURL: 'https://vision2020-8ee3c.firebaseio.com',
  projectId: 'vision2020-8ee3c',
  storageBucket: 'vision2020-8ee3c.appspot.com',
  messagingSenderId: '586031075770',
  appId: '1:586031075770:web:36309cd12e85e5a33f0d83',
  measurementId: 'G-P0S4CG3BS5'
}

console.log('[Firebase] Importing module ...')

function init (config) {
  // Initialize Firebase
  console.log('[Firebase] Initializing ...')
  firebase.initializeApp(config)
  // firebase.analytics()
  firebase
    .firestore()
    .enablePersistence({ synchronizeTabs: true })
    .then(() => {
      console.log('[Firebase] Database persistence enabled!')
    })
    .catch(function (err) {
      if (err.code === 'failed-precondition') {
        console.error(
          '[Firebase] Multiple tabs open, persistence can only be enabled in one tab at a time.'
        )
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
      } else if (err.code === 'unimplemented') {
        console.error(
          '[Firebase] The current browser does not support all of the features required to enable persistence'
        )
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
      } else {
        console.error(err)
      }
    })

  return firebase
}

export default !firebase.apps.length ? init(config) : firebase
