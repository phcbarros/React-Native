const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const fs = require('fs')
const uuid = require('uuid-v4')
const { Storage } = require('@google-cloud/storage')
const storage = new Storage({
  projectId: 'lambe-99df9',
  keyFileName: 'lambe-99df9.json',
})

const IMAGE_PATH = '/tmp/imageToSave.jpg'
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.uploadImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    try {
      fs.writeFileSync(IMAGE_PATH, request.body.image, 'base64')
      const bucket = storage.bucket('lambe-99df9.appspot.com')
      const id = uuid()
      bucket.upload(
        IMAGE_PATH,
        {
          uploadType: 'media',
          destination: `/posts/${id}.jpg`,
          metadata: {
            metadata: {
              contentType: 'image/jpeg',
              firebaseStorageDownloadTokens: id,
            },
          },
        },
        (error, file) => {
          if (error) {
            console.log(error)
            return response.status(500).json({ error })
          }

          const fileName = encodeURIComponent(file.name)
          const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${fileName}?alt=media&token=${id}`
          return response.status(201).json({ imageUrl })
        },
      )
    } catch (error) {
      console.log(error)
      return response.status(500).json({ error })
    }
  })
})
