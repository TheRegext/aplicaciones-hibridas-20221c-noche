function authorization (req, res, next) {
  if (req.headers.authorization === 'Brian Lara') {
    next()
  } else {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
}

export {
  authorization
}
