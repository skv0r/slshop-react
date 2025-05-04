import { Button } from "@/shared/ui/components/button";
import { ChevronRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="rounded-[12px] bg-[#6366F1]  mx-[22px] mb-16">
      <div className="flex max-h-[500px] px-[190px]">
        <div className="flex flex-col justify-between py-[110px]">
          <h1 className="font-extrabold text-5xl text-white leading-1.25em">
            Бьюти-зона с<br />
            гаджетами
          </h1>
          <p className="text-[#E5E7EB] text-[32px] leading-1.25em">
            Профессиональная укладка
            <br />
            от стилистов
          </p>
          <Button className="max-w-50 text-[14px] !important" variant="default">
            Перейти к товару <ChevronRight />
          </Button>
        </div>
        <img className="ml-auto" src="/dyson-banner.svg" alt="dyson" />
      </div>
    </div>
  );
}
