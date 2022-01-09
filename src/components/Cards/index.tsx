export const Cards = () => {
  return (
    <div className="grid md:grid-cols-2">
      <a href="https://nextjs.org/docs" className="card">
        <h4>Documentation &rarr;</h4>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h4>Learn &rarr;</h4>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className="card"
      >
        <h4>Examples &rarr;</h4>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h4>Deploy &rarr;</h4>
        <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  );
};