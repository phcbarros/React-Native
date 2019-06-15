const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@goggle-cloud/storage')
const storage = new Storage({
  projectId: 'lambe-99df9',
  keyFileName: 'lambe-99df9.json',
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.uploadImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {})
})
