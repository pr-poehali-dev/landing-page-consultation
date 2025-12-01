import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Refund = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Политика возврата средств</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Условия возврата</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Возврат возможен до начала оказания услуги.</li>
              <li>Клиент имеет право отменить консультацию, уведомив Исполнителя минимум за 12 часов.</li>
              <li>После проведения консультации возврат невозможен.</li>
              <li>
                Для оформления возврата необходимо написать на Email: <a href="mailto:iria.rybakova@yandex.ru" className="text-primary hover:underline">iria.rybakova@yandex.ru</a>
              </li>
              <li>Срок обработки запроса — до 5 рабочих дней.</li>
            </ul>
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

export default Refund;
