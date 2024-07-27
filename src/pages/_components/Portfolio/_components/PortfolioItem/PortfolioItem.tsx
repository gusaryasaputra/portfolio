import Image from "next/image";
import type { Portfolio } from "../../../../_types/types";
import { Button as CustomButton } from "../../..";

type PortfolioItemProps = {
  item: Portfolio;
};

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const buttonIsDisabled = !item.link;

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative w-full h-48">
          <Image
            src={item.src}
            alt="Portfolio Item"
            fill
            sizes="(400px, 300px)"
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <a href={item.link} target="_blank">
            <CustomButton disabled={buttonIsDisabled}>
              View Project
            </CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
}
