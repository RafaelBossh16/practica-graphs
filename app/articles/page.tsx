import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
    },
    {
      id: 2,
      title: "Article 2",
    },
    {
      id: 3,
      title: "Article 3",
    }
  ];
  return ( 
    <div>
      <h1>Listado de Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
    </ul>
  </div>
  );
}