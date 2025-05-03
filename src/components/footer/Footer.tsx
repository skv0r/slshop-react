import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#6366F1] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="min-w-[300px] p-3 rounded-md bg-white">
            <h3 className="text-black text-[14px] font-semibold mb-1 text-left">
              Почта
            </h3>
            <a
              href="mailto:slgroup@slshop.ru"
              className="font-normal text-[#64748B] hover:text-gray-600 transition-colors text-[14px] block text-left"
            >
              slgroup@slshop.ru
            </a>
          </div>

          <div className="min-w-[300px] p-3 rounded-md bg-white">
            <h3 className="text-black text-[14px] font-semibold mb-1 text-left">
              Физический адрес
            </h3>
            <p className="text-[#64748B] text-[14px] text-left">
              г.Москва, п-кт Ленина д. 15
            </p>
          </div>

          <div className="min-w-[300px] p-3 rounded-md bg-white">
            <h3 className="text-black text-[14px] font-semibold mb-1 text-left">
              Документы
            </h3>
            <a
              href="/docs/offer-2025.pdf"
              className="text-blue-600 hover:text-blue-700 transition-colors text-[14px] block text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              Договор офферты на 2025 г.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
