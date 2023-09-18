// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, stock, price } = req.body
    const product = await prisma.product.create({
      data: {
        name,
        price,
        stock
      }
    });
    res.status(201).send("Product created")
  } else {
    let product = await prisma.product.findMany()
    console.log(product);
    res.status(200).send(product)
  }
}
