// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default (req, res) => {

  if (req.method === 'POST') {
    const { username, password } = req.body


    const userExist = [{username: 'hamid@gmail.com', password: '123456'}].find(user => {
      return user.username == username && user.password == password
    })

    if (userExist) {
      res.status(200).json({ status: 200, message: `${userExist.username} خوش آمدید` })
    } else {
      res.status(401).json({ message: 'کاربری یافت نشد', usersss: username, status: 401 })
    }
  }
}
