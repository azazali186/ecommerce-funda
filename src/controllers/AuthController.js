import User from "../models/User.js"
import CryptoJS from "crypto-js";

// Encrypt

export const LoginController = async (req, res) => {

    const body = req
    console.log(body)
    const userData = await User.find({
        email : body.email
    });

    if(userData){
        // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
        // Decrypt
        var password  = CryptoJS.AES.decrypt(userData.password, 'secret key 123');

        if(body.password === password){
            const [password , ...other] = userData._doc
            return res.status(200).json(other) 
        }
    }

  return res.status(400).json({
    error : "User Not Found"
  }) 
}

export const RegisterController =  async (req, res) => {
    const body = req.body

    console.log(body)

    const userData = User.find({
        email : body.email
    });

    if(!userData){
        // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
        // Decrypt
        body.password  = CryptoJS.AES.encrypt(body.password, 'secret key 123').toString()

        const createUser = await User.create({
            email: body.email,
            password: body.password,
            name: body.name || "",
        }).save()

        const [password , ...other] = createUser._doc

        return res.status(200).json(other) 
    }

  return res.status(400).json({
    error : "User already registered"
  }) 
  }