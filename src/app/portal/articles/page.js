import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import dayjs from 'dayjs';

  export const metadata = {
  title: "Dimas Nugroho Putro | -",
  description: `Seorang Web dan iOS Developer enthusiast lulusan Sarjana Teknik Informatika Universitas Maritim Raja Ali Haji. Memiliki Pengalaman sebagai iOS Developer di Apple Developer Academy @Infinite Learning Batam dan Web Developer di Dinas Komunikasi dan Informatika Kabupaten Bintan selama 2 tahun. Memiliki pengalaman menggunakan PHP, MySQL, Codeigniter, Laravel, Javascript, REST API, dan Swift. Memiliki pengetahuan arsitektur seperti Repository Patterns, MVC, dan MVVM serta tertarik pada segala hal yang berhubungan dengan teknologi dan App Development.`,
  openGraph: {
    title: 'Dimas Nugroho Putro | Mobile and Web Developer',
    description: 'Seorang Web dan iOS Developer enthusiast lulusan Sarjana Teknik Informatika Universitas Maritim Raja Ali Haji. Memiliki Pengalaman sebagai iOS Developer di Apple Developer Academy @Infinite Learning Batam dan Web Developer di Dinas Komunikasi dan Informatika Kabupaten Bintan selama 2 tahun. Memiliki pengalaman menggunakan PHP, MySQL, Codeigniter, Laravel, Javascript, REST API, dan Swift. Memiliki pengetahuan arsitektur seperti Repository Patterns, MVC, dan MVVM serta tertarik pada segala hal yang berhubungan dengan teknologi dan App Development',
  }
}


async function getArticles() {
  const postsDirectory = path.join(process.cwd(), 'src/articles-posted');
  const files = fs.readdirSync(postsDirectory);

  let articles = []
  let articlesSorted = []

  files.forEach(file => {
    const filePath = path.join(process.cwd(), 'src/articles-posted', `${file}`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    articles.push({
      slug: file.replace('.md', ''),
      ...data
    })
  })

  articlesSorted = articles.sort((a, b) => {
    const dateA = dayjs(a.date)
    const dateB = dayjs(b.date)

    return dateB.diff(dateA);
  })

  console.log(articlesSorted)

  return articlesSorted
}

export default async function ArticleIndex() {
  
  const articles = await getArticles()

  return (
    <div className='grid grid-cols-1 px-5 md:px-80 py-5'>
      <div>
        <h1 className='text-4xl font-bold'>Artikel saya</h1>

        <p className='mt-2 text-gray-400'>Isinya kadang tutorial, kadang tips, news, dll.</p>

        <hr className='mt-5 border-b-2 w-[130px]' style={{
        borderImage: 'repeating-linear-gradient(to right, rgba(0,0,0,.5) 0, rgba(0,0,0,.5) 5px, transparent 5px, transparent 12px) 100% 1',
      }} />
      </div>

      <div className='mt-10'>
        {articles.map((article, index) => {
          return <Link href={`articles/${article.slug}`} key={index} className='grid grid-cols-3 gap-7 mb-9'>
            <div>
              <img src={article.cover} className='rounded-2xl img-cover-article w-[100%]' />
            </div>
            <div className='col-span-2'>
              <h2>{article.title}</h2>
              <p className='text-sm mt-1 text-gray-500'>{article.subtitle}</p>
            </div>
          </Link>
        })}
      </div>
    </div>
  );
}