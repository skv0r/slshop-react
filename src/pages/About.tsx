
import { Button } from "@/shared/ui/components"
import { ChevronRight } from "lucide-react"

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-1 bg-blue-400">
      {/* Hero Section */}
      <div className="rounded-lg bg-brand-primary px-52 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">О нашей компании</h1>
          <p className="text-xl text-white mb-8">
            SL & GROUP - ведущий поставщик высококачественной электроники и бьюти-гаджетов с 2025 года. Мы стремимся
            предоставлять нашим клиентам только лучшие продукты и исключительный сервис.
          </p>
          <Button className="mx-auto" variant="secondary" size="lg">
            Связаться с нами <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="px-52">
        <div className="grid grid-cols-2 gap-12">
          {missionAndValues.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
              {item.content.map((text, idx) => (
                <p key={idx} className="text-brand-muted mb-4">{text}</p>
              ))}
              {item.button && (
                <Button variant="outline" className="mt-4">
                  {item.button}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-brand-light px-52 py-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-12 text-center">Наша команда</h2>
        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src={`/placeholder.svg?height=256&width=384&text=${member.name}`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-brand-primary font-medium mb-3">{member.position}</p>
                <p className="text-brand-muted">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History Timeline */}
      <div className="px-52 py-8">
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

      {/* Stats Section */}
      <div className="border-1 rounded-xl border-brand-secondary px-52 py-16 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Наши достижения</h2>
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">{stat.value}</div>
              <div className="text-lg text-brand-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end rounded-lg px-52 py-16 mb-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Наша команда всегда готова помочь вам с выбором продукта или ответить на любые вопросы о нашей компании.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Написать нам
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
            Позвонить
          </Button>
        </div>
      </div>
    </div>
  )
}

// Sample data
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

const teamMembers = [
  {
    name: "Алексей Петров",
    position: "Генеральный директор",
    bio: "Основатель компании с 15-летним опытом в сфере электроники и технологий. Увлечен инновациями и развитием бизнеса.",
  },
  {
    name: "Елена Смирнова",
    position: "Директор по маркетингу",
    bio: "Специалист с международным опытом в digital-маркетинге. Отвечает за стратегию продвижения бренда и коммуникации.",
  },
  {
    name: "Дмитрий Иванов",
    position: "Технический директор",
    bio: "Эксперт в области технологий с опытом работы в ведущих IT-компаниях. Отвечает за техническую экспертизу продуктов.",
  },
]

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

const stats = [
  { value: "100K+", label: "Довольных клиентов" },
  { value: "500+", label: "Наименований товаров" },
  { value: "15", label: "Городов присутствия" },
  { value: "98%", label: "Положительных отзывов" },
]

export default AboutUs