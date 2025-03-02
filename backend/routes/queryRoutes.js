import { Router } from 'express'

import User from '../models/User.js'
import Query from '../models/Query.js'
import sendEmail from '../config/email.js'
import { authorize } from '../middleware/authMiddleware.js'

const queryRoutes = Router()

// Send Query When Buying Product
queryRoutes.post('/send', authorize, async (req, res) => {
  try {
    const { cart, message } = req.body
    const user = req.user

    const foundUser = await User.findOne({ _id: user.id })
    // console.log("user", foundUser)

    if (!foundUser) {
        return res.status(404).json({ error: "User not found" });
      }


    // Store query in database
    const query = new Query({ user: user.id, cart: cart, message })
    await query.save()

    const products = cart.join(', ')

    console.log("products", products)

    // 📧 Send email to Admin
    await sendEmail(
        process.env.ADMIN_EMAIL,
        'Mini Mart - New Product Query',
        `User has sent a query.`,
        `User <strong>${foundUser.email} </strong> has sent a query:${message}.<br> <p>User has shown interest for these products: ${products}.</p>`
      );

    // 📧 Send email to User
    await sendEmail(
      foundUser.email,
      'Mini Mart - Query Received',
      'Your query has been received. Our admin will contact you soon.',
      `<p>Hi ${foundUser.firstName},</p><p>We have received your query for the product. Our team will respond shortly.</p>`
    )

    res.status(200).json({ message: 'Query sent successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default queryRoutes
