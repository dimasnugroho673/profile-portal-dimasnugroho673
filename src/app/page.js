import CardProfileItem from "@/components/card-profile-item";
import ButtonActionProfileItem from "@/components/button-action-profile-item";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start py-10 lg:mx-72 mx-6">
        <div className="flex ...">
          <div className="hidden sm:inline w-60 flex-none ...">
            <img src="https://avatars.githubusercontent.com/u/46320757?v=4" className="avatar-modern-rounded w-44" />
          </div>
          <div className="flex-1 mb-3">
            <div className="">
              <div className="flex justify-center mb-7 sm:hidden">
              <img src="https://avatars.githubusercontent.com/u/46320757?v=4" className=" avatar-modern-rounded w-44" />
              </div>
             

              <div className="lg:text-5xl text-3xl font-bold mb-4">Dimas Nugroho Putro</div>
              <div className="dark:text-gray-400 text-gray-600 mb-4">Seorang <strong>Web dan iOS Developer</strong> Enthusiast lulusan Sarjana Teknik Informatika Universitas Maritim Raja Ali Haji. Memiliki Pengalaman sebagai iOS Developer di Apple Developer Academy @Infinite Learning Batam dan Web Developer di Dinas Komunikasi dan Informatika Kabupaten Bintan selama 2 tahun. Memiliki pengalaman menggunakan PHP, MySQL, Codeigniter, Laravel, Javascript, REST API, dan Swift. Memiliki pengetahuan arsitektur seperti Repository Patterns, MVC, dan MVVM serta tertarik pada segala hal yang berhubungan dengan teknologi dan App Development.</div>
              <div>

                <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-5 bg-red-700">
                  <div>
                    <ButtonActionProfileItem title={"Github"} externalLink={'https://github.com/dimasnugroho673'} icon={<i className="bi bi-github me-1"></i>} />
                  </div>
                  <div>
                    <ButtonActionProfileItem title={"LinkedIn"} externalLink={'https://linkedin.com/in/dimasnp/'} icon={<i className="bi bi-linkedin me-1"></i>} />
                  </div>
                  <div>
                    <ButtonActionProfileItem title={"Email"} externalLink={'mailto:dimasnugroho673@gmail.com'} icon={<i className="bi bi-envelope-fill me-1"></i>} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-flow-col grid-cols-3 gap-4">
          <CardProfileItem title={"Experience"} subtitle={"All the experiences I've been through"} />

          <CardProfileItem title={"Projects"} subtitle={"All completed project"} />

          <CardProfileItem title={"Skills"} subtitle={"All the skills i have"} externalLink={"s"} />

        </div>
      </main>
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
