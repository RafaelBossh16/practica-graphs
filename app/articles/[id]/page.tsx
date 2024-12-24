export default async function Articles({
  params
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Page Page</h1>
      <p>
        This is a page will be generated for each article with 
        the id: {id}
      </p>
    </div>
  );
}
