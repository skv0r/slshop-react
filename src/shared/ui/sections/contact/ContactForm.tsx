import { Button } from "@/shared/ui/components"
import { Input } from "@/shared/ui/components"
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 border border-brand-secondary">
      <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="block text-sm font-medium">Имя</label>
            <Input id="first-name" placeholder="Введите ваше имя" />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="block text-sm font-medium">Фамилия</label>
            <Input id="last-name" placeholder="Введите вашу фамилию" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input id="email" type="email" placeholder="Введите ваш email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">Телефон</label>
          <Input id="phone" type="tel" placeholder="Введите ваш телефон" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium">Сообщение</label>
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
  );
};

export default ContactForm;