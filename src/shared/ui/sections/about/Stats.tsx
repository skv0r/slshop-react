const stats = [
    { value: "100K+", label: "Довольных клиентов" },
    { value: "500+", label: "Наименований товаров" },
    { value: "15", label: "Городов присутствия" },
    { value: "98%", label: "Положительных отзывов" },
  ]

const Stats = () => {
    return (
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
)
}

export default Stats;