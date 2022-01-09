import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <a
        className="flex-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"Powered by "}
        <span className="ml-2 expanded filled center">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={24} />
        </span>
      </a>
    </footer>
  );
};