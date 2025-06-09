import CardProfileItem from "@/components/card-profile-item";
import ButtonActionProfileItem from "@/components/button-action-profile-item";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function ProfilePage() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mx-6 lg:mx-72">
        <div className="flex">

          <div className="hidden sm:inline w-60 flex-none">
            <Image
              aria-hidden
              src="/img-profile.jpg"
              alt="Window icon"
              width={120}
              height={120}
              className="avatar-modern-rounded w-44"
            />
          </div>

          <div className="mb-3">
            <div className="flex justify-center mb-7 sm:hidden">
              <Image
              aria-hidden
              src="/img-profile.jpg"
              alt="Window icon"
              width={120}
              height={120}
              className="avatar-modern-rounded w-44"
            />
            </div>

            <div className="text-3xl md:text-5xl font-bold text-center md:text-start mb-4">Dimas Nugroho Putro</div>
            <div className="dark:text-gray-400 text-gray-600 mb-4">Seorang <strong>Web dan iOS Developer</strong> Enthusiast lulusan Sarjana Teknik Informatika Universitas Maritim Raja Ali Haji. Memiliki Pengalaman sebagai iOS Developer di Apple Developer Academy @Infinite Learning Batam dan Web Developer di Dinas Komunikasi dan Informatika Kabupaten Bintan selama 2 tahun. Memiliki pengalaman menggunakan PHP, MySQL, Codeigniter, Laravel, Javascript, REST API, dan Swift. Memiliki pengetahuan arsitektur seperti Repository Patterns, MVC, dan MVVM serta tertarik pada segala hal yang berhubungan dengan teknologi dan App Development.</div>

            <div className="flex gap-3 md:gap-4">
              <ButtonActionProfileItem title={"Github"} externalLink={''} icon={<i className="bi bi-github me-1"></i>} />
              <ButtonActionProfileItem title={"LinkedIn"} externalLink={'https://linkedin.com/in/dimasnp/'} icon={<i className="bi bi-linkedin me-1"></i>} />
              <ButtonActionProfileItem title={"Email"} externalLink={'mailto:dimasnugroho673@gmail.com'} icon={<i className="bi bi-envelope-fill me-1"></i>} />
            </div>
          </div>
        </div>

        <hr className='mt-5 border-b-2 w-[130px] md:hidden' style={{
        borderImage: 'repeating-linear-gradient(to right, rgba(0,0,0,.5) 0, rgba(0,0,0,.5) 5px, transparent 5px, transparent 12px) 100% 1',
      }} />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 w-100">
          <CardProfileItem title={"Experiences"} subtitle={"All the experiences I've been through"} link={'/portal/profile/experience'} />
          <CardProfileItem title={"Projects"} subtitle={"All completed project"} link={'/portal/profile/project'} />
          <CardProfileItem title={"Skills"} subtitle={"All the skills i have"} externalLink={"https://github.com/dimasnugroho673"} />
        </div>
      </main>

      <footer className="mt-40 row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <small className="text-gray-500">Diperbarui terakhir pada 9 Juni 2025</small>
      </footer>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
