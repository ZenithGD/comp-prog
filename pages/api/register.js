import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function register(req, res) {

    const { username, email, password } = req.body

    await prisma.users.create({
        data: {
            mail: email,
            user_name: username,
            passwd: password
        },
    }).then((user) => {
        res.status(200).json({ok: true})
    })
    .catch((err) => {
        res.status(409).json({ok: false})
    })
}