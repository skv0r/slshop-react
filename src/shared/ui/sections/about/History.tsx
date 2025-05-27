const historyEvents = [
    {
      year: "2025",
      title: "Основание компании",
      description:
        "SL & GROUP была основана с целью предоставления качественных технологических решений для повседневной жизни.",
    },
    {
      year: "2026",
      title: "Открытие первого шоурума",
      description:
        "Мы открыли наш первый физический магазин в Москве, где клиенты могли лично протестировать все представленные продукты.",
    },
    {
      year: "2027",
      title: "Запуск собственной линейки продуктов",
      description:
        "Мы представили первую линейку продуктов под собственным брендом, разработанную с учетом потребностей наших клиентов.",
    },
    {
      year: "2028",
      title: "Международная экспансия",
      description:
        "Компания вышла на международный рынок, открыв представительства в трех странах и запустив доставку по всему миру.",
    },
    {
      year: "2029",
      title: "Технологический прорыв",
      description:
        "Внедрение инновационных технологий в нашу продукцию и получение нескольких патентов на собственные разработки.",
    },
  ]

const History = () => {
    return (
        <div className="mb-16 px-52 py-8">
        <h2 className="text-3xl font-bold mb-12 text-center">История компании</h2>
        <div className="space-y-12">
          {historyEvents.map((event, index) => (
            <div key={index} className="flex gap-8">
              <div className="w-32 flex-shrink-0 text-right">
                <span className="text-xl font-bold text-brand-primary">{event.year}</span>
              </div>
              <div className="relative border-l-2 border-brand-secondary pl-8 pb-12">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-brand-primary -translate-x-1/2"></div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-brand-muted">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default History