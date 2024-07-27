import { portfolioItems } from "@/consts/portfolio";
import type { Portfolio } from "../../_types/types";
import { PortfolioItem } from "./_components";

export default function Portfolio() {
  const items = [...portfolioItems] as Portfolio[];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          My Portfolio
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-center">
          Below are a couple of my portfolio projects that showcase my skills
          and experience.
        </p>
        <div className="flex flex-wrap -mx-4">
          {items.map((item) => {
            return <PortfolioItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
