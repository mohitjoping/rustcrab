import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

type Item = {
  icon?: string;
  cover?: string;
  title?: string;
  link: string;
  name?: string;
  description: string;
};

type CardProps = {
  item: Item;
  key: number;
};

const Card: FC<CardProps> = ({ item, key }) => {
  const updateCursor = (event: PointerEvent) => {
    document.documentElement.style.setProperty("--x", event.clientX + "px");
    document.documentElement.style.setProperty("--y", event.clientY + "px");
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", updateCursor);

    return () => {
      document.body.removeEventListener("pointermove", updateCursor);
    };
  }, []);

  return (
    
    <Link
      target="_blank"
      href={item.link}
      key={key}
      className="bg-foreground/5 border-2 border-foreground/10 rounded-3xl shadow-lg transition duration-300 hover:shadow-xl min-w-full toolsInnerCard"
    >
      <div className="group flex items-center gap-5 sm:gap-10 relative hover:scale-105 p-6 px-10 transition duration-300">
        <div className="flex flex-col md:flex-col gap-5 items-start w-full">
           <div className="md:flex flex-col">
            <Image
              src={item.icon ?? item.cover ?? ""}
              alt={item.name ?? item.title ?? ""}
              width={75}
              height={75}
              className="rounded-md min-w-20  h-30 p-2 object-contain"
            />
            <div className="grid gap-2 text-left text-wrap">
              <h3 className="text-xl font-semibold text-current ">
                {item.name ?? item.title}
              </h3>
              <p className=" text-accent-foreground/70 mb-4">
                {item.description}
              </p>
            </div>
          </div>
        </div>
        <FaArrowRight className="text-foreground/40 opacity-0 group-hover:opacity-100 transform -translate-x-10 group-hover:translate-x-0 transition duration-300" />
      </div>
    </Link>
    
  );
};

export default Card;
