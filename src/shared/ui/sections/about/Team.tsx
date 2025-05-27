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

const Team = () => {
    return (
        <div className="bg-brand-light px-52 py-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-12 text-center">Наша команда</h2>
        <div className="grid grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img
                  src={`/медвед.jpg?height=256&width=384&text=${member.name}`}
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
    )
}

export default Team;