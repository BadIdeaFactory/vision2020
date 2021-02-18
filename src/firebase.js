// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// Disable this module because it breaks on build
// import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

console.log('[Firebase] Importing module ...')

function init (config) {
  // If config is not provided, quit
  if (
    typeof config.apiKey === 'undefined' ||
    typeof config.authDomain === 'undefined' ||
    typeof config.databaseURL === 'undefined' ||
    typeof config.projectId === 'undefined' ||
    typeof config.storageBucket === 'undefined' ||
    typeof config.messagingSenderId === 'undefined' ||
    typeof config.appId === 'undefined' ||
    typeof config.measurementId === 'undefined'
  ) {
    return
  }

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
