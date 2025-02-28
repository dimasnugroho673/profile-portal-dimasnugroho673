import { Geist, Geist_Mono } from "next/font/google";
import "@/app/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dimas Nugroho Putro | Mobile and Web Developer",
  description: `Seorang Web dan iOS Developer enthusiast lulusan Sarjana Teknik Informatika Universitas Maritim Raja Ali Haji. Memiliki Pengalaman sebagai iOS Developer di Apple Developer Academy @Infinite Learning Batam dan Web Developer di Dinas Komunikasi dan Informatika Kabupaten Bintan selama 2 tahun. Memiliki pengalaman menggunakan PHP, MySQL, Codeigniter, Laravel, Javascript, REST API, dan Swift. Memiliki pengetahuan arsitektur seperti Repository Patterns, MVC, dan MVVM serta tertarik pada segala hal yang berhubungan dengan teknologi dan App Development.`,
  openGraph: {
    title: 'Dimas Nugroho Putro | Mobile and Web Developer',
    description: 'Seorang Web dan iOS Developer enthusiast lulusan Sarjana Teknik Informatika Universitas Maritim Raja Ali Haji. Memiliki Pengalaman sebagai iOS Developer di Apple Developer Academy @Infinite Learning Batam dan Web Developer di Dinas Komunikasi dan Informatika Kabupaten Bintan selama 2 tahun. Memiliki pengalaman menggunakan PHP, MySQL, Codeigniter, Laravel, Javascript, REST API, dan Swift. Memiliki pengetahuan arsitektur seperti Repository Patterns, MVC, dan MVVM serta tertarik pada segala hal yang berhubungan dengan teknologi dan App Development',
  },
};

export default function ProfileLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* <nav className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
              <div className="container">
                <div className="flex items-center justify-between relative">
                  <div className="px-4 left-0">
                    <Image
                      aria-hidden
                      src="/icon-app.png"
                      alt="Icon app"
                      width={40}
                      height={40}
                      className="py-6"
                    />
                  </div>
                  <div className="flex items-center px-4">
                    <button id="hamburger" name="hamburger" type="button" className="block absolute right-0">
                      <span className="w-[30px] h-[2px] my-2 block bg-black rounded"></span>
                      <span className="w-[30px] h-[2px] my-2 block bg-black rounded"></span>
                      <span className="w-[30px] h-[2px] my-2 block bg-black rounded"></span>
                    </button>
                  </div>
                </div>
              </div>
            </nav> */}

        {/* <nav className="flex justify-center h-[100px] ">
              <div className="w-[1240px] flex items-center justify-between">
                <div className="flex items-center w-[577px] justify-between">
                  <Image
                    aria-hidden
                    src="/icon-app.png"
                    alt="Icon app"
                    width={40}
                    height={40}
                    className=""
                  />
                  <div className="flex w-[340px] justify-between">
                    <p className="">Home</p>
                    <p className="text-purple-700">Artikel</p>
                  </div>
                </div>
              </div>
            </nav> */}

        {/* <nav className="flex justify-center h-[80px] bg-red-600">
              <div className="flex items-center">
                <div className="flex items-center">
                <Image
                  aria-hidden
                  src="/icon-app.png"
                  alt="Icon app"
                  width={40}
                  height={40}
                />
                </div>
                
              </div>
            </nav> */}



        <nav class="bg-transparent border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-40 sm:py-10 p-4">
            <Link href={'/portal/profile'}>
              <Image
                aria-hidden
                src="/icon-app.png"
                alt="Icon app"
                width={40}
                height={40}
                className=""
              />
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href={`/portal/profile`} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                </li>
                <li>
                  <Link href={`/portal/articles`} className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 font-bold" aria-current="page">Artikel</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        {children}

        <footer className="row-start-3 pb-10 flex gap-6 flex-wrap items-center justify-center">
          <small className="font-medium dark:text-white text-gray-800">@{new Date().getFullYear()} Dimas Nugroho Putro, Build with Next JS and Tailwind</small>
        </footer>
      </body>
    </html>
  );
}
