export default function ArticleDetail({ params }) {
  return (
    <div>
      <h1>Artikel: {decodeURIComponent(params.slug)}</h1>
      <p>Ini adalah artikel dengan slug: {params.slug}</p>
    </div>
  );
}
