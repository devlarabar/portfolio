import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const POST = async (req, res) => {
    const newproj = await prisma.project.create({ data: { name: 'hello', description: 'testing', image: '', tools: '', demo: '', repository: '' } })
    console.log(newproj)
}