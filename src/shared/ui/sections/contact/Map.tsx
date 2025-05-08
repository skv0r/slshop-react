import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="px-52">
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
  );
};

export default MapSection;