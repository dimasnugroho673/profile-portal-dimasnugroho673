import Link from "next/link";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';

async function getProjects(category) {
  const postsDirectory = path.join(process.cwd(), 'src/projects-posted');
  const files = fs.readdirSync(postsDirectory);

  let articles = []
  let articlesSorted = []

  files.forEach(file => {
    const filePath = path.join(process.cwd(), 'src/projects-posted', `${file}`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    if (data.category === category) {
      articles.push({
        slug: file.replace('.md', ''),
        ...data
      })
    }
  })

  // articlesSorted = articles.sort((a, b) => {
  //   const dateA = dayjs(a.date)
  //   const dateB = dayjs(b.date)

  //   return dateB.diff(dateA);
  // })

  // console.log(articlesSorted)

  return articles
}

export default async function ProjectPage() {

    const mobileProjects = await getProjects('mobile')

    return (
    <div className='grid grid-cols-1 px-5 md:px-80 py-5'>
      <div>
        <Link href={`/portal/profile`} className='bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:text-primary hover:cursor-pointer p-2 rounded-full text-base px-3'><i className="bi bi-arrow-left me-1"></i> Kembali</Link>

       <h1 className='mt-8 text-4xl font-bold'>Projects</h1>

        <p className='mt-2 text-gray-400'>Project yang pernah saya kerjakan.</p>
      </div>

      <div className="mt-10">
        <h2 className="text-neutral-500">Mobile</h2>
        {mobileProjects.map((project, index) => {
          return <h3>{project.title}</h3>
          // return <Link href={`projects/${project.slug}`} key={index} className='grid grid-cols-3 gap-7 mt-4'>
          //   <div>
          //     <img src={project.cover} className='rounded-2xl img-cover-article w-[100%]' />
          //   </div>
          //   <div className='col-span-2'>
          //     <h3>{project.title}</h3>
          //     <p className='text-sm mt-1 text-gray-500'>{project.subtitle}</p>
          //   </div>
          // </Link>
        })}
        <h2 className="mt-5">Web</h2>
      </div>
    </div>
  );
  }