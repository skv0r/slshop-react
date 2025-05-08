import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="">
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
            <p className="text-">+7 (495) 123-45-67</p>
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
    </div>
  );
};

export default ContactInfo;