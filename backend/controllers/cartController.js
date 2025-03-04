import Cart from '../models/Cart.js'
import User from '../models/User.js'

// Add Product to Cart
const addProductToCart = async (req, res) => {
  const { productId } = req.body

  console.log('req.user', req.user)
  console.log('productId', productId)

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
  // USer id
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
  //Product id & user id
  let { productId } = req.params
  productId = productId.replace(':', '')
  const userId = req.user.id

  try {
    // find user cart
    const cart = await Cart.findOne({ userId })
    if (!cart) return res.status(404).json({ message: 'Cart not found' })

    console.log('Received productId', productId)
    console.log('Cart Products', cart.products)

    // Remove product from cart
    cart.products = cart.products.filter(
      (p) => p.productId.toString() !== productId
    )
    console.log(cart.products)

    //save cart
    await cart.save()
    res.status(200).json({ message: 'Product removed from cart', cart })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// Add Product Quantity to Cart
const addProductQuantity = async (req, res) => {
  //Product id & user id
  let { productId } = req.params
  productId = productId.replace(':', '')
  const userId = req.user.id

  try {
    // find user cart
    const cart = await Cart.findOne({ userId }).populate('products.productId')
    if (!cart) return res.status(404).json({ message: 'Cart not found' })

    // find product in user's cart
    const productIndex = cart.products.findIndex(
      (p) => p.productId._id.toString() === productId
    )
    if (productIndex === -1)
      return res.status(404).json({ message: 'Product not in cart' })

    // increase product quantity by 1
    cart.products[productIndex].quantity += 1

    // save cart
    await cart.save()
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


// Add Product Quantity to Cart
const subtractProductQuantity = async (req, res) => {
  //Product id & user id
  let { productId } = req.params
  productId = productId.replace(':', '')
  const userId = req.user.id;

  console.log("Product", productId)
  console.log("User", userId)

  try {
    // find user cart
    const cart = await Cart.findOne({ userId }).populate('products.productId')
    if (!cart) return res.status(404).json({ message: 'Cart not found' })

    // find product in user's cart
    const productIndex = cart.products.findIndex(
      (p) => p.productId._id.toString() === productId
    )
    if (productIndex === -1)
      return res.status(404).json({ message: 'Product not in cart' })

    // decrese product quantity by 1
    if (cart.products[productIndex].quantity > 1) {
      cart.products[productIndex].quantity -= 1;
    } else {
      // Remove product if quantity is 0
      cart.products.splice(productIndex, 1); 
    }

    // save cart
    await cart.save()
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export { getCart, addProductToCart, removeProductFromCart, addProductQuantity, subtractProductQuantity }
