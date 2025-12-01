import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Консультации по маркетплейсам</h2>
            <div className="flex gap-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Консультации по Wildberries и Ozon
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Помогаю продавцам улучшить карточки, увеличить продажи и избежать типичных ошибок на маркетплейсах.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection("contact")}
              >
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/3289efda-8210-47c2-8944-b0e62fc188b7/files/a9ef5a13-e673-49ac-ab1e-e7026f16bf0a.jpg"
                alt="Консультации по маркетплейсам"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Форматы консультаций</h2>
            <p className="text-xl text-gray-600">Выберите подходящий вариант работы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">40 минут</h3>
                  <p className="text-primary font-medium">Аудит карточек</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Разбор до 5 карточек</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Анализ SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Ошибки в оформлении</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Рекомендации по фото/видео</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Быстрый план правок</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">1,5 часа</h3>
                  <p className="text-primary font-medium">Полный разбор</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Анализ ниши</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Изучение конкурентов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Разбор карточек и SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Настройка рекламы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Детальный план действий</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Rocket" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">60 минут</h3>
                  <p className="text-primary font-medium">Запуск товара</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Проверка спроса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Расчёт экономики</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Анализ рисков</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Упаковка карточки</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Стратегия продвижения</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">1 месяц</h3>
                  <p className="text-primary font-medium">Сопровождение</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>4 консультации</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Помощь в реализации правок</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Ответы на вопросы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Разбор проблем в процессе</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Постоянная поддержка</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты для связи</h2>
            <p className="text-xl text-gray-600 mb-8">Если у вас возникли вопросы по оплате или консультациям — вы можете связаться со мной:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-none shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <a href="mailto:iria.rybakova@yandex.ru" className="text-lg text-primary hover:underline">
                    iria.rybakova@yandex.ru
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-none shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Телефон / WhatsApp</p>
                  <a href="tel:+79156348900" className="text-lg text-primary hover:underline">
                    +7 (915) 634-89-00
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 border-none shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Оставьте заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    placeholder="Расскажите, чем могу помочь..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-32 resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-8 text-center text-sm text-gray-600">
            <p>Исполнитель: Швецова Ирина Валерьевна, самозанятая</p>
            <p>ИНН: 672402526831</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Email: <a href="mailto:iria.rybakova@yandex.ru" className="text-primary hover:underline">iria.rybakova@yandex.ru</a></p>
                <p>Телефон: <a href="tel:+79156348900" className="text-primary hover:underline">+7 (915) 634-89-00</a></p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Реквизиты</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Швецова Ирина Валерьевна</p>
                <p>ИНН: 672402526831</p>
                <p>Самозанятая</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Документы</h3>
              <div className="space-y-2 text-sm">
                <Link to="/offer" className="block text-primary hover:underline">Публичная оферта</Link>
                <Link to="/privacy" className="block text-primary hover:underline">Политика конфиденциальности</Link>
                <Link to="/refund" className="block text-primary hover:underline">Политика возврата</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>© 2025. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
