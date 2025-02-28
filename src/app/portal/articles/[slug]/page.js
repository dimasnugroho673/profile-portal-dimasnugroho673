import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
// import marked from 'marked';

const { marked } = await import('marked');

async function getArticleBySlug(slug) {
  const filePath = path.join(process.cwd(), 'src/articles-posted', `${slug}.md`);
  const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : false;

  if (!fileContent) {
    return {
      data: {}
    }
  }

  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return {
    data: {
      ...data,
      content: htmlContent
    }
  };
}

export default async function ArticleDetail({ params }) {
  const { slug } = params;
  const { data } = await getArticleBySlug(slug);

  function getTitle() {
    // return params.slug.replaceAll('-', ' ')
    const isDraft = data.draft ? ` [Not published]` : ''
    const isArchived = data.archived ? ` [Archived]` : ''
    return data.title + isDraft + isArchived
  }

  function getDate() {
    const date = new Date(data.date)
    const yearIndo = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    return `${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()} ${yearIndo[date.getMonth() - 1]} ${date.getFullYear()}`
  }

  function getCategory() {
    return `<a href="/portal/category/${data.category}" class="hover:text-primary">${data.category}</a>`
  }

  function getTags() {
    let tags = ``

    data.tags.map(tag => {
      tags += `<a href="/portal/tag/${tag}" class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:text-primary hover:cursor-pointer p-2 rounded-full text-xs px-3 me-2">#${tag}</a> `
      // rounded-full bg-white text-slate border-slate border-gray-700 dark:bg-gray-700  hover:bg-slate-800 hover:text-white border text-base px-4 py-2
    })

    return tags
  }

  if (data == {}) {
    return (<div>Artikel tidak ditemukan</div>)
  } else {
    return (
      <div className='grid grid-cols-1 px-5 md:px-80 py-5'>
        <div>

          <Link href={`/portal/articles`} className='bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:text-primary hover:cursor-pointer p-2 rounded-full text-base px-3'><i class="bi bi-arrow-left me-1"></i> Kembali</Link>

          <h1 className="font-bold text-4xl m-0 p-0 mt-8">{getTitle()}</h1>
          <p className='mt-3'>{getDate() + ' • '} <span dangerouslySetInnerHTML={{ __html: getCategory() }} /></p>
          <div className='mt-2' dangerouslySetInnerHTML={{ __html: getTags() }} />

          <img src={data.cover} className="rounded-2xl mt-10 w-100 img-cover-article" />

          <div className='mt-10' dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    );
  }

}
