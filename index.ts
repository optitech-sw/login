// index.ts
// Query your database using the Prisma Client with Accelerate

import 'dotenv/config'
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL
});

// Example query to create a user based on the example schema

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })

  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
