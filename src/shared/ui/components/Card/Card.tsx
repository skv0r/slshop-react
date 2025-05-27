import { ChevronRight, Heart } from "lucide-react";
import { Button } from "../button";
import { Link } from "react-router-dom"

interface CardProps {
  imageUrl: string;
  title?: string;
  price?: string;
  description?: string;
  buttonText?: string;
  variant?: "default" | "compact";
  productId?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title = "Заголовок",
  price = "0$",
  description = "Описание карточки - многострочное",
  buttonText = "Перейти к товару",
  variant = "default",
  productId,
}) => {


  
  return (
    <div
      className={`${
        variant === "compact" ? "max-w-72.5" : "max-w-sm"
      } bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}
    >
      <a href="#">
        <div className="h-[230px] bg-gray-500 flex items-center justify-center rounded-t-lg">
          <img
            className="w-full h-full object-contain rounded-t-lg"
            src={imageUrl}
            alt={title}
          />
        </div>
      </a>
      <div className="flex flex-col justify-between p-5">
          <a href="#">
            {variant === "compact" ? (
              <h5 className="flex justify-between mb-2 text-[20px] font-semibold tracking-tight dark:text-white">
                <span className="text-gray-900 overflow-hidden" style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
                <span className="text-gray-900">{price}</span>
              </h5>
            ) : (
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            )}
          </a>


        {variant !== "compact" && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <Link to={`/product/${productId}`} className={`${
                variant === "compact" ? "w-full" : "max-w-50"
              }`} >
            <Button
              className={`${
                variant === "compact" ? "w-full" : "max-w-50"
              } text-[14px] font-medium`}
              variant="default"
            >
              {buttonText} <ChevronRight />
            </Button>
          </Link>
          {variant !== "compact" && (
            <div className="rounded-[8px] border-[CBD5E1] border-1">
              <Button className="h-[40px]" variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Card };
