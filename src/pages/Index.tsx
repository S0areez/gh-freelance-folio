import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [typingText, setTypingText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const texts = ['presença online', 'negócio digital', 'ideia em realidade'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const typeText = () => {
      const currentText = texts[currentTextIndex];
      let currentIndex = 0;
      
      const typing = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setTypingText(currentText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, 2000);
        }
      }, 100);
    };

    typeText();
  }, [currentTextIndex]);

  const skills = ['JavaScript', 'React', 'Node.js', 'ColdFusion', 'SQL Server', 'Tailwind CSS', 'API Integration'];
  
  const projects = [
    {
      id: 'project1',
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de vendas online com painel administrativo',
      tech: 'React + Node.js',
      icon: '💻',
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 'project2', 
      title: 'App de Gestão',
      description: 'Sistema de gestão empresarial responsivo e intuitivo',
      tech: 'ColdFusion + SQL',
      icon: '📱',
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 'project3',
      title: 'Dashboard Analytics',
      description: 'Painel de controle com visualização de dados em tempo real',
      tech: 'React + API',
      icon: '📊',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'project4',
      title: 'Site Corporativo',
      description: 'Website institucional moderno e responsivo',
      tech: 'React + Tailwind',
      icon: '🌐',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'project5',
      title: 'Sistema CRM',
      description: 'Gestão completa de relacionamento com clientes',
      tech: 'ColdFusion + React',
      icon: '👥',
      color: 'from-red-400 to-purple-500'
    },
    {
      id: 'project6',
      title: 'API Gateway',
      description: 'Microserviços e integrações de alta performance',
      tech: 'Node.js + SQL Server',
      icon: '🔗',
      color: 'from-indigo-400 to-cyan-500'
    }
  ];

  const services = [
    {
      icon: '🚀',
      title: 'Desenvolvimento Full Stack',
      description: 'Criação completa de aplicações web modernas e escaláveis'
    },
    {
      icon: '🔌',
      title: 'Integrações de API',
      description: 'Conecte seus sistemas com APIs robustas e seguras'
    },
    {
      icon: '🛠️',
      title: 'Manutenção de Sites',
      description: 'Mantenha seu site sempre atualizado e funcionando perfeitamente'
    },
    {
      icon: '⚡',
      title: 'Otimização de Performance',
      description: 'Melhore a velocidade e experiência do usuário'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      company: 'Tech Solutions',
      text: 'Guilherme entregou um projeto excepcional. Profissionalismo e qualidade técnica impecáveis!'
    },
    {
      name: 'Ana Costa',
      company: 'Digital Marketing',
      text: 'Trabalho de alta qualidade, prazos cumpridos e comunicação excelente. Recomendo!'
    },
    {
      name: 'Roberto Lima',
      company: 'E-commerce Plus',
      text: 'Nossa plataforma ficou perfeita! Guilherme superou todas as expectativas.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-primary">Guilherme</span> Henrique
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projetos</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Transforme sua<br />
              <span className="text-primary border-r-2 border-primary animate-pulse">{typingText}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Desenvolvedor Full Stack experiente em <strong>ColdFusion</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>SQL Server</strong> e integrações de API
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 text-lg rounded-full"
                onClick={() => window.open('https://wa.me/5511943290966?text=Olá! Gostaria de conversar sobre um projeto', '_blank')}
              >
                💬 Vamos conversar
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-full"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre mim</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="p-8">
                  <div className="w-full h-64 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-primary-foreground text-6xl font-bold">
                    GH
                  </div>
                </Card>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Guilherme Henrique Santos Soares</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Formado em <strong>Ciência da Computação</strong> pela Universidade São Judas Tadeu, sou um desenvolvedor Full Stack com experiência sólida em diversas tecnologias.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Minha trajetória profissional inclui passagens pela <strong>IT Power</strong> (Fev 2023 – Dez 2023), <strong>Positivo Tecnologia</strong> (Mar 2024 – Ago 2024) e atualmente no <strong>Mercado Livre</strong> (Nov 2024 – presente).
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Principais Tecnologias:</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <span key={skill} className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    📧 Entre em contato
                  </Button>
                  <Button variant="outline">
                    📄 Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Projetos em Destaque</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi e se inspire para seu próximo site
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => setActiveModal(project.id)}
              >
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <span className="text-6xl">{project.icon}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">{project.tech}</span>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Serviços Oferecidos</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Depoimentos</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary">
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Vamos trabalhar juntos</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground">
                ⚡ <strong>Vagas limitadas para novos projetos este mês!</strong> Entre em contato agora.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">+55 11 94329-0966</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-semibold text-foreground">E-mail</p>
                      <p className="text-muted-foreground">guihenriquesantossoares@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-foreground">Localização</p>
                      <p className="text-muted-foreground">Barueri, São Paulo, Brasil</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/5511943290966?text=Olá! Gostaria de conversar sobre um projeto', '_blank')}
                  >
                    💬 Chamar no WhatsApp
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('mailto:guihenriquesantossoares@gmail.com', '_blank')}
                  >
                    📧 Enviar E-mail
                  </Button>
                </div>
              </div>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Envie uma mensagem</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const message = formData.get('message');
                  const whatsappMessage = `Olá! Meu nome é ${name} (${email}). ${message}`;
                  window.open(`https://wa.me/5511943290966?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                }}>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Descreva seu projeto..."
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    📤 Enviar Mensagem
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span>Guilherme</span> Henrique
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Desenvolvedor Full Stack | Transformando ideias em realidade digital
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">GitHub</a>
              <a href="mailto:guihenriquesantossoares@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">E-mail</a>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 Guilherme Henrique Santos Soares. Todos os direitos reservados. | Feito com React e Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setActiveModal(null)}>
          <Card className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {projects.find(p => p.id === activeModal)?.title}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)}>
                  ✕
                </Button>
              </div>
              <div className={`h-64 bg-gradient-to-r ${projects.find(p => p.id === activeModal)?.color} rounded-lg flex items-center justify-center text-6xl mb-4`}>
                {projects.find(p => p.id === activeModal)?.icon}
              </div>
              <p className="text-muted-foreground mb-6">
                {projects.find(p => p.id === activeModal)?.description}
              </p>
              <div className="flex space-x-4">
                <Button 
                  onClick={() => window.open('https://wa.me/5511943290966?text=Olá! Tenho interesse no projeto ' + projects.find(p => p.id === activeModal)?.title, '_blank')}
                >
                  💬 Peça este site
                </Button>
                <Button variant="outline" onClick={() => setActiveModal(null)}>
                  Fechar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
