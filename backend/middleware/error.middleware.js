// base configuration
export function authenticateApiSecret(req, res, next) {
  const auth_header = req.headers['authorization']

  if (!auth_header || !auth_header.startsWith('Bearer '))
    return res.status(401).json({ message: 'Unauthorized: No token provided.' })

  const token = auth_header.split(' ')[1]

  if (token !== process.env.API_SECRET)
    return res.status(403).json({ error: 'Invalid API token' })

  next()
}

export function errorHandler(err, req, res, next) {
  const status = err.status || 500
  const message = err.message || 'Internal Server Error'
  res.status(status).json({ error: message })
}