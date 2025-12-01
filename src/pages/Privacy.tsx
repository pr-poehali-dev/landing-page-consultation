import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Privacy = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            Исполнитель гарантирует сохранность персональных данных клиента.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Использование данных</h2>
            <p>Информация (имя, телефон, email, данные о бизнесе) используется только для:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Связи с клиентом</li>
              <li>Проведения консультаций</li>
              <li>Отправки материалов</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Защита данных</h2>
            <p>
              Данные не передаются третьим лицам и используются исключительно для оказания консультационных услуг.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="font-medium">Исполнитель: Швецова Ирина Валерьевна</p>
            <p>Email: <a href="mailto:iria.rybakova@yandex.ru" className="text-primary hover:underline">iria.rybakova@yandex.ru</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
