export default function Articles({ params }: { params: { id: number } }) {
  return (
    <div>
      <h1>Page Page</h1>
      <p>
        This is a page will be generated for each article with
        the id: {params.id}
      </p>
    </div>
  );
}