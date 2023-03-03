const express = require('express')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const csv = require('csv-parser')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs')


router.post('/signup', async (req, res) => {

    const { email, password, confirmPassword } = req.body

    if (!email || !password || !confirmPassword) {
        return res.status(400).json({
            message: 'All field are required'
        })
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            message: 'Passwords do not match'
        })
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds)
    let hashedPassword = await bcrypt.hash(password, salt)

    const client = new MongoClient(process.env.uri)

    const userCollection = client.db('Contacts-Manager').collection('Users')


    let newUser = {
        email: email,
        password: hashedPassword
    }

    try {
        let data = await userCollection.insertOne(newUser)
        res.status(201).json({
            message: 'User created successfully',
            data
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
    finally {
        await client.close()
    }
})



router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            message: 'Email and password are required'
        })
    }

    const client = new MongoClient(process.env.uri)
    const userCollection = client.db('Contacts-Manager').collection('Users')

    try {
        const user = await userCollection.findOne({ email })

        if (!user) {
            return res.status(401).json({
                message: 'Authentication failed. User not found.'
            })
        }

        const passwordMatches = await bcrypt.compare(password, user.password)

        if (!passwordMatches) {
            return res.status(401).json({
                message: 'Authentication failed. Invalid credentials.'
            })
        }


        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({
            message: 'Authentication successful',
            token
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    } finally {
        await client.close()
    }
})



router.get('/contacts', async (req, res) => {

    try {
        if (req.headers.hasOwnProperty('authorization')) {
            var token = req.headers.authorization.split(' ')[1]
        } 
        else {
            return res.status(401).json({
                message: 'Missing authorization header'
            })
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        const userEmail = decodedToken.email

        const client = new MongoClient(process.env.uri)
        const userCollection = client.db('Contacts-Manager').collection('Users')

        const user = await userCollection.findOne({ email: userEmail })

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        const contacts = user.contacts || []

        res.status(200).json({
            message: 'User contacts retrieved successfully',
            contacts
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})





router.post('/contacts', upload.single('csv'), async (req, res) => {  // INCOMPLETE
    try {
      if (!req.file) {
        return res.status(400).json({
          message: 'No CSV file provided'
        })
      }
  
      // Parse the CSV file and store its data in an array
      const results = []
      fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', async () => {
          // Insert the data into the user's contacts collection
          const client = new MongoClient(process.env.uri)
          const userCollection = client.db('Contacts-Manager').collection('Users')
          const decodedToken = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET)
          const userEmail = decodedToken.email
          const user = await userCollection.findOne({ email: userEmail })
  
          if (!user) {
            return res.status(404).json({
              message: 'User not found'
            })
          }
  
          const contactsCollection = client.db('Contacts-Manager').collection('user-contacts')
          const insertedData = await contactsCollection.insertMany(results)
  
          res.status(200).json({
            message: 'Contacts inserted successfully',
            data: insertedData
          })
  
          await client.close()
        })
    } catch (err) {
      res.status(500).json({
        message: err.message
      })
    }
  })




module.exports = router

