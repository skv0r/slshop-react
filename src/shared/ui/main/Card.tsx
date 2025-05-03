import { ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";

interface CardProps {
  imageUrl: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title = "Заголовок",
  description = "Описание карточки - многострочное",
  buttonText = "Перейти к товару",
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={imageUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <Button
            className=" max-w-50 text-[14px] font-medium"
            variant="default"
          >
            {buttonText} <ChevronRight />
          </Button>

          <div className="flex items-center justify-between rounded-[6px] border-[CBD5E1] w-[109px] h-[40px] border-1 p-1">
            <button className="size-8">-</button>
            <span className="rounded-md bg-[#F1F5F9] px-3 py-1.5">0</span>
            <button className="size-8 bg-white">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
