import Cart from '../models/Cart.js'
import User from '../models/User.js'

// Add Product to Cart
const addProductToCart = async (req, res) => {
  const { productId } = req.body

  console.log('req.user', req.user)

  const userId = req.user.id

  try {
    let cart = await Cart.findOne({ userId })

    if (!cart) {
      cart = new Cart({ userId, products: [{ productId, quantity: 1 }] })
    } else {
      const existingProduct = cart.products.find(
        (p) => p.productId.toString() === productId
      )
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        cart.products.push({ productId, quantity: 1 })
      }
    }

    await cart.save()
    res.status(200).json({ message: 'Product added to cart', cart })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Get Cart
const getCart = async (req, res) => {
  const userId = req.user.id

  try {
    const cart = await Cart.findOne({ userId }).populate('products.productId')
    if (!cart) return res.status(404).json({ message: 'Cart is empty' })

    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Remove Product from Cart
const removeProductFromCart = async (req, res) => {
  let { productId } = req.params
  productId  = productId.replace(":", "");
  console.log('productId', productId)
  const userId = req.user.id

  try {
    const cart = await Cart.findOne({ userId })
    if (!cart) return res.status(404).json({ message: 'Cart not found' })

      console.log('Received productId', productId);
      console.log('Cart Products', cart.products);

    cart.products = cart.products.filter(
      (p) => p.productId.toString() !== productId
    )
    console.log(cart.products)
    await cart.save()
    res.status(200).json({ message: 'Product removed from cart', cart })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export { getCart, addProductToCart, removeProductFromCart }
