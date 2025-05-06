import { Button } from "@/shared/ui/components"
import { Input } from "@/shared/ui/components"
import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react'

const Contacts = () => {
  return (
    <div className="flex flex-col gap-16 bg-blue-400">
      {/* Hero Section */}
      <div className="rounded-lg bg-brand-primary px-52 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Контакты</h1>
          <p className="text-xl text-white">
            Мы всегда рады помочь вам с выбором продукта или ответить на любые вопросы. Свяжитесь с нами удобным для вас
            способом.
          </p>
        </div>
      </div>

      {/* Contact Info and Form */}
      <div className="px-52">
        <div className="grid grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Наши контакты</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light rounded-md">
                  <MapPin className="text-brand-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                  <p className="text-brand-muted">г. Москва, п-кт Ленина д. 15</p>
                  <p className="text-brand-muted">Бизнес-центр "Технополис", 3 этаж</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light rounded-md">
                  <Phone className="text-brand-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                  <p className="text-brand-muted">+7 (495) 123-45-67</p>
                  <p className="text-brand-muted">+7 (800) 123-45-67 (бесплатно по России)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light rounded-md">
                  <Mail className="text-brand-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-brand-muted">info@slgroup.ru</p>
                  <p className="text-brand-muted">support@slgroup.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-light rounded-md">
                  <Clock className="text-brand-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Режим работы</h3>
                  <p className="text-brand-muted">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-brand-muted">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-brand-light rounded-md hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-brand-light rounded-md hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-brand-light rounded-md hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-brand-secondary">
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="block text-sm font-medium">
                    Имя
                  </label>
                  <Input id="first-name" placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="block text-sm font-medium">
                    Фамилия
                  </label>
                  <Input id="last-name" placeholder="Введите вашу фамилию" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Введите ваш email" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Телефон
                </label>
                <Input id="phone" type="tel" placeholder="Введите ваш телефон" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full min-h-[120px] rounded-md border border-brand-secondary p-3 text-sm focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Отправить сообщение <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-52 mb-16">
        <h2 className="text-3xl font-bold mb-8">Как нас найти</h2>
        <div className="rounded-lg overflow-hidden border border-brand-secondary h-[400px] bg-brand-light flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-brand-primary mx-auto mb-4" />
            <p className="text-lg font-medium">
              Здесь будет карта с расположением офиса SL & GROUP
            </p>
            <p className="text-brand-muted mt-2">
              г. Москва, п-кт Ленина д. 15, Бизнес-центр "Технополис", 3 этаж
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end rounded-lg px-52 py-16 mb-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором подходящего продукта.
        </p>
        <Button variant="secondary" size="lg">
          Заказать звонок
        </Button>
      </div>
    </div>
  )
}

// Sample FAQ data
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
]

export default Contacts

