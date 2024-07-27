import Image from "next/image";
import { Inter } from "next/font/google";

import { MetaHead, Hero, About, Portfolio, Contact } from "./_components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaHead />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
