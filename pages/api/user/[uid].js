export default async function handler(req, res) {
  try {
    const { uid } = req.query
    const data = await fetch(`https://api.slingacademy.com/v1/sample-data/users/${uid}`)
    const response = await data.json()
    const { user } = response
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}