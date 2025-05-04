import AboutCard from "./AboutCard";

const defaultData = [
  {
    title: "100+ Отзывов",
    description: "Каждый наш клиент остается довольным.",
  },
  {
    title: "Средний рейтинг 95 баллов",
    description:
      "Каждый проданный товар удовлетворяет наших клиентов полностью",
  },
  {
    title: "Низкий процент возвратов",
    description: "Мы тщательно проверяем каждый товар перед отправкой ",
  },
];

const About = () => {
  return (
    <div className="border-1 rounded-xl border-[#CBD5E1] px-[52px] py-8 mb-16">
      <h1 className="mb-7.5 font-bold">О нас</h1>
      <div className="flex justify-between items-center py-5 mb-32">
        <AboutCard defaultData={defaultData} />
        <AboutCard defaultData={defaultData} isBordered={true} />
        <AboutCard defaultData={defaultData} />
      </div>
    </div>
  );
};

export default About;