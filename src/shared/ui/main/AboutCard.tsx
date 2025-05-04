interface CardProps {
  defaultData?: {
    title: string;
    description: string;
  }[];
  isBordered?: boolean;
}

const AboutCard: React.FC<CardProps> = ({
  defaultData = [
    {
      title: "Заголовок",
      description: "Описание карточки",
    },
    {
      title: "Заголовок",
      description: "Описание карточки",
    },
    {
      title: "Заголовок",
      description: "Описание карточки",
    },
  ],
  isBordered = false,
}) => {
  return (
    <div
      className={`max-w-[433px] p-6 flex border-1 rounded-md ${
        isBordered ? "border-indigo-500" : "border-slate-300"
      }`}
    >
      <div
        className="
        min-h-[270px] w-[180px] mr-3 px-6 pb-4 flex flex-col justify-end rounded-md
        bg-gradient-to-r 
        from-[#DB4E66] 
        via-[#A24688] 
        to-[#4E3ABA]"
      >
        <div className="size-5 rounded-full bg-white mb-4"></div>
        <h2 className="text-[18px] text-white font-medium">SL & GROUP</h2>
        <p className="text-[14px] text-[#E2E8F0] max-w-[180px]">
          Наша команда работает с 2025 года, радуя каждый день тысячи
          пользователей.
        </p>
      </div>
      <div>
        {defaultData.map((item, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-[14px] mb-2 font-bold">{item.title}</h2>
            <p className="text-[14px] text-[#64748B] max-w-[180px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
