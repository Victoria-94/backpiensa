import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function main() {
  await prisma.article.createMany({
    data: [
      {
        title: 'Advancements in Solar Energy',
        authors: 'Alice Johnson, Bob Brown',
        year: 2021,
        journal: 'Renewable Energy Journal',
        description: 'A comprehensive study on the latest advancements in solar energy technologies and their applications.'
      },
      {
        title: 'The Future of Wind Power',
        authors: 'Chris Green, Pat Yellow',
        year: 2020,
        journal: 'Energy Technology',
        description: 'An analysis of the future prospects of wind power and the innovations driving the industry forward.'
      },
      {
        title: 'Innovations in Battery Storage',
        authors: 'Mary White, Tom Black',
        year: 2019,
        journal: 'Journal of Energy Storage',
        description: 'Exploring the latest innovations in battery storage technology and their impact on renewable energy systems.'
      },
      {
        title: 'Hydropower: Challenges and Opportunities',
        authors: 'John Doe, Jane Smith',
        year: 2018,
        journal: 'Hydro Review',
        description: 'A detailed review of the challenges and opportunities facing the hydropower sector in the coming decades.'
      },
      {
        title: 'The Role of AI in Smart Grids',
        authors: 'Michael Blue, Sarah Red',
        year: 2022,
        journal: 'Technology and Innovation',
        description: 'Investigating the role of artificial intelligence in the development and optimization of smart grids for renewable energy.'
      }
    ]
  });

  const articles = await prisma.article.findMany();
  console.log(articles);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
