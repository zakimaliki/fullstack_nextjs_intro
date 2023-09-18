import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { id } = req.query
    if (req.method === 'PUT') {
        const { name, stock, price } = req.body
        const product = await prisma.product.update({
            where: {
                id : Number(id)
            },
            data: {
                name,
                price,
                stock
            },
        })
        res.status(200).send("Product updated")
    } else if (req.method === 'DELETE') {
        const product = await prisma.product.delete({
            where: {
                id : Number(id)
            },
        })
        res.status(200).send("Product deleted")
    }
}