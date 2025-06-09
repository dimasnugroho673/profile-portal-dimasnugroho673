import Link from 'next/link'

export default function CardProfileItem({ title, subtitle, link, externalLink }) {

    if (externalLink) {
        return (
            <a href={externalLink} target='_blank' className="p-4 rounded-2xl border border-gray-800 dark:bg-gray-800 bg-white hover:shadow-md hover:cursor-pointer min-h-[100px]">
                <div className="flex mb-2">
                    <div className="flex-1"><h1 className="text-lg font-bold">{title}</h1></div>
                    {externalLink ? <div className="">
                        <i className="bi bi-box-arrow-up-right force-bi-bold-1"></i>
                    </div> : <div className=""><i className="bi bi-arrow-right force-bi-bold-1"></i></div>}
                    {/* <div className=""><i className="bi bi-arrow-right force-bi-bold-1"></i></div> */}
                </div>

                <p className="text-sm dark:text-gray-400 text-black text-opacity-40">{subtitle}</p>
            </a>
        );
    } else {
        return (
            <Link href={link} className="p-4 rounded-2xl border border-gray-800 dark:bg-gray-800 bg-white hover:shadow-md hover:cursor-pointer min-h-[100px]">
                <div className="flex mb-2">
                    <div className="flex-1"><h1 className="text-lg font-bold">{title}</h1></div>
                    {externalLink ? <div className="">
                        <i className="bi bi-box-arrow-up-right force-bi-bold-1"></i>
                    </div> : <div className=""><i className="bi bi-arrow-right force-bi-bold-1"></i></div>}
                    {/* <div className=""><i className="bi bi-arrow-right force-bi-bold-1"></i></div> */}
                </div>

                <p className="text-sm dark:text-gray-400 text-black text-opacity-40">{subtitle}</p>
            </Link>
        );
    }

}