interface CardProps {
    aboutDataArray?: {
        title: string;
        description: string;
    }[];
}

const AboutCard: React.FC<CardProps> = ({ 
    aboutDataArray = [
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
]
}) => {
    return (
        <div className="flex p-6">
            <div className="">
                здесь будет градиент карточки
            </div>
            <div>
                {aboutDataArray.map((item, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <p className="mt-2 text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutCard;