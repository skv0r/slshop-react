import { Button } from "../../components";

const missionAndValues = [
    {
      title: "Наша миссия",
      content: [
        "Наша миссия - делать современные технологии доступными для всех. Мы тщательно отбираем каждый продукт в нашем каталоге, чтобы гарантировать высочайшее качество и инновационность.",
        "Мы верим, что правильно подобранные технологии могут значительно улучшить качество жизни наших клиентов, сделать их быт комфортнее и эффективнее."
      ],
      button: "Узнать больше"
    },
    {
      title: "Наши ценности",
      content: [
        "Качество. Мы никогда не идем на компромисс в вопросах качества продукции.",
        "Инновации. Мы постоянно ищем новые технологии и решения.",
        "Клиентоориентированность. Удовлетворенность клиента - наш главный приоритет.",
        "Честность. Мы всегда прозрачны в своих действиях и коммуникациях."
      ]
    }
  ];
  

const Mission = () => {
    return (
        <div className="py-8 flex justify-around m-auto">
            {missionAndValues.map((item, index) => (
                <div className="max-w-1/3 p-8 border-1 border-[#6366F1] rounded-md bg-[#ffffff]" key={index}>
                    <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
                    {item.content.map((text, idx) => (
                        <p key={idx} className="mb-4">{text}</p>
                    ))}
                    {item.button && (
                        <Button variant="default" className="mt-4">
                        {item.button}
                        </Button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Mission;