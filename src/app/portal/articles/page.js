import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

async function getArticles() {
  const postsDirectory = path.join(process.cwd(), 'src/articles-posted');
  const files = fs.readdirSync(postsDirectory);

  let articles = []

  files.forEach(file => {
    const filePath = path.join(process.cwd(), 'src/articles-posted', `${file}`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    articles.push({
      slug: file.replace('.md', ''),
      ...data
    })
  })

  return articles
}

export default async function ArticleIndex() {
  const articles = await getArticles()
  return (
    <div className='grid grid-cols-1 px-5 md:px-80 py-5'>
      <div>
        <h1 className='text-4xl font-bold'>Artikel saya</h1>

        <p className='mt-4 text-gray-400'>Isinya kadang tutorial, kadang tips, news, dll.</p>

        <hr className='mt-3'></hr>
      </div>

      <div className='mt-10'>
        {articles.map((article, index) => {
          return <Link href={`articles/${article.slug}`} key={index} className='grid grid-cols-3 gap-7 mb-9'>
            <div>
              <img src={article.cover} className='rounded-2xl img-cover-article w-[100%]' />
            </div>
            <div className='col-span-2'>
              <h2>{article.title}</h2>
              <p className='text-gray-500'>{article.subtitle}</p>
            </div>
          </Link>
        })}
      </div>
    </div>
  );
}