export const WelcomeMessage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className="text-center font-size-3">
        {"Get started by editing "}
        <code className="code">pages/index.js</code>.
      </p>
    </div>
  );
};