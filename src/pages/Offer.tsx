import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Offer = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <Icon name="ArrowLeft" size={20} />
            <span>Вернуться на главную</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Публичная оферта на оказание консультационных услуг</h1>
        
        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <p>
            Настоящая публичная оферта является официальным предложением самозанятой 
            Швецовой Ирины Валерьевны (ИНН 672402526831) о предоставлении консультационных услуг по маркетплейсам.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Предмет оферты</h2>
            <p>Исполнитель оказывает информационные консультации по работе с маркетплейсами в онлайн-формате.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Порядок оказания услуг</h2>
            <p>
              После оплаты клиент получает подтверждение и согласование даты и времени консультации. 
              Услуга считается оказанной после проведения консультации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Стоимость услуг</h2>
            <p>Стоимость услуг указана на сайте в разделе «Услуги» и составляет:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Консультация 40 минут — 2 500 ₽</li>
              <li>Консультация 1,5 часа — 4 500 ₽</li>
              <li>Запуск товара — 4 000 ₽</li>
              <li>Сопровождение 1 месяц — 14 000 ₽</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Возврат средств</h2>
            <p>
              Возврат возможен при отмене услуги не позднее чем за 12 часов до времени консультации. 
              После проведения консультации возврат невозможен.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Ответственность сторон</h2>
            <p>
              Исполнитель предоставляет рекомендации на основе опыта и данных, предоставленных клиентом. 
              Исполнитель не несёт ответственность за действия клиента после консультации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Конфиденциальность</h2>
            <p>Все данные клиента используются только для оказания услуг и не передаются третьим лицам.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Акцепт оферты</h2>
            <p>Оплата услуги означает полное согласие клиента с условиями настоящей оферты.</p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="font-medium">Исполнитель: Швецова Ирина Валерьевна, самозанятая</p>
            <p>ИНН: 672402526831</p>
            <p>Email: <a href="mailto:iria.rybakova@yandex.ru" className="text-primary hover:underline">iria.rybakova@yandex.ru</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
