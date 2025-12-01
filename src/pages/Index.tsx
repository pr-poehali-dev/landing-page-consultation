import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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
            <h2 className="text-xl font-semibold text-gray-900">Консультации</h2>
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
                Профессиональные онлайн-консультации
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Получите экспертную помощь через видеозвонки и чаты. 
                Удобно, конфиденциально, эффективно.
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
                alt="Онлайн консультация"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600">Удобные форматы для вашего комфорта</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Video" className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Видеозвонки</h3>
              <p className="text-gray-600 leading-relaxed">
                Личное общение в реальном времени через удобные платформы. 
                Видите и слышите специалиста, как при встрече.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="MessageSquare" className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Чат-консультации</h3>
              <p className="text-gray-600 leading-relaxed">
                Переписка в мессенджерах для тех, кто ценит письменное общение. 
                Отвечайте в удобное время.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-white border-none">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Shield" className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Конфиденциально</h3>
              <p className="text-gray-600 leading-relaxed">
                Ваша информация защищена. Встречи проходят в приватном пространстве 
                с полной конфиденциальностью.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь со мной</h2>
            <p className="text-xl text-gray-600">Оставьте заявку, и я свяжусь с вами в ближайшее время</p>
          </div>

          <Card className="p-8 md:p-12 border-none shadow-xl">
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
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2024 Консультационные услуги. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
