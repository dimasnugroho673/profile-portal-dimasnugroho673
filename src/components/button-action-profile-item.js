export default function ButtonActionProfileItem({ title, icon, link, externalLink }) {
    return (
        <a target="_blank" rel="noopener" href={link ?? externalLink} className="rounded-full bg-white text-slate border-slate border-gray-800 dark:bg-gray-800  hover:bg-slate-900 hover:text-white border text-base px-4 py-2">{icon} {title}</a>
    );
}