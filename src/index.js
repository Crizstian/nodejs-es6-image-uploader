'use strict'
const uploads = require('./server/uploader')
const config = require('./config')

console.log('--- Front End Server ---')

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})

console.log('----------------------------------------------------------------------------')
console.log(`ENV VARS => : UPLOADER: ${process.env.PORT2}.`)
console.log('----------------------------------------------------------------------------')

uploads.start(config)
  .then(app => {
    console.log('----------------------------------------------------------------------------')
    console.log(`Uploader Server started succesfully, running on port: ${app.address().port}.`)
    console.log('----------------------------------------------------------------------------')
  })
  .catch(err => console.log(err))
