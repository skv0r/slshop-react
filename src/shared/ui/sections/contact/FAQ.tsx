const FAQSection = () => {
    return (
      <div className="bg-brand-light px-52 py-16 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
        <div className="grid grid-cols-2 gap-8">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">{item.question}</h3>
              <p className="text-brand-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const faqItems = [
    {
      question: "Как оформить заказ?",
      answer:
        "Вы можете оформить заказ через наш сайт, добавив товары в корзину и следуя инструкциям по оформлению, или позвонив нам по телефону.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer:
        "Мы принимаем оплату банковскими картами, электронными деньгами, банковским переводом и наличными при получении.",
    },
    {
      question: "Как долго осуществляется доставка?",
      answer:
        "Сроки доставки зависят от вашего региона. В Москве доставка осуществляется в течение 1-2 дней, в регионы - от 3 до 10 дней.",
    },
    {
      question: "Есть ли у вас гарантия на товары?",
      answer:
        "Да, на все товары предоставляется официальная гарантия производителя. Срок гарантии указан в карточке каждого товара.",
    },
  ];
  
  export default FAQSection;