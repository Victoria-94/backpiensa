import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {

  await prisma.article.createMany({
    data: [
      {
        id: uuidv4(),
        title: 'Breaking News: AI Takes Over',
        description: 'An in-depth look at how AI is changing the world.',
        imagenUrl: 'https://example.com/image1.jpg',
        authors: 'John Doe, Jane Smith',
        createDate: new Date('2024-01-01T00:00:00Z'),
        magazine: 'Tech Monthly',
      },
      {
        id: uuidv4(),
        title: 'The Future of Space Travel',
        description: 'Exploring the next frontier.',
        imagenUrl: 'https://example.com/image2.jpg',
        authors: 'Alice Johnson',
        createDate: new Date('2024-02-01T00:00:00Z'),
        magazine: 'Science Today',
      },
    ],
  });

  console.log('Articles seeded successfully');
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
