// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const nome = "Next";
  let nome1 = "Css";
  return (
    <main>
      <div>{nome}</div>
      <div>{nome1}</div>
      <div>TypeScript</div>
      <div>Node</div>
      <div>React</div>
    </main>
  );
}
