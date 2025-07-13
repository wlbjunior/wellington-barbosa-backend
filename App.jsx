import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Brain, Palette, Scale, Instagram, Menu, X, Church, Star, Cross, User, Feather, Handshake, Sofa, Compass, Sparkles, Mail, GraduationCap } from 'lucide-react'
import './App.css'

// Componente de navegação
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: 'Filosofia', icon: BookOpen, color: 'text-orange-600', route: '/filosofia' },
    { name: 'Mitologia', icon: Sparkles, color: 'text-blue-600', route: '/mitologia' },
    { name: 'Religião', icon: Church, color: 'text-gray-600', route: '/religiao' },
    { name: 'Artes', icon: Palette, color: 'text-pink-600', route: '/artes' },
    { name: 'Psicologia Jurídica', icon: Scale, color: 'text-gray-900', route: '/psicologia-juridica' },
    { name: 'Jung', icon: Brain, color: 'text-green-600', route: '/psicologia-junguiana' },
    { name: 'Sobre', icon: User, color: 'text-purple-600', route: '/sobre-mim' },
    { name: 'Psicoterapia', icon: Sofa, color: 'text-teal-600', route: '/psicoterapia' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">Wellington Barbosa</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.route}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${category.color}`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm">{category.name}</span>
              </Link>
            ))}
            <a 
              href="#newsletter" 
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Newsletter</span>
            </a>
            <a 
              href="https://www.instagram.com/wellterapia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden lg:inline">@wellterapia</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.route}
                  className={`w-full justify-start flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${category.color}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </Link>
              ))}
              <a 
                href="#newsletter" 
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 px-3 py-2"
              >
                <Mail className="w-5 h-5" />
                <span>Newsletter</span>
              </a>
              <a 
                href="https://www.instagram.com/wellterapia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 px-3 py-2"
              >
                <Instagram className="w-5 h-5" />
                <span>@wellterapia</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Página inicial
function HomePage() {
  const categories = [
    { 
      name: 'Filosofia', 
      icon: BookOpen, 
      color: 'bg-orange-500', 
      hoverColor: 'hover:bg-orange-600',
      description: 'Explore o pensamento filosófico através dos tempos',
      items: ['Linha do Tempo da Filosofia', 'Correntes Filosóficas', 'Grandes Pensadores'],
      route: '/filosofia',
      available: true
    },
    { 
      name: 'Mitologia', 
      icon: Sparkles, 
      color: 'bg-blue-500', 
      hoverColor: 'hover:bg-blue-600',
      description: 'Descubra mitos e lendas de diferentes culturas',
      items: ['Em breve...'],
      route: '/mitologia',
      available: false
    },
    { 
      name: 'Religião', 
      icon: Church, 
      color: 'bg-gray-500', 
      hoverColor: 'hover:bg-gray-600',
      description: 'Compreenda as tradições espirituais do mundo',
      items: ['Principais Religiões do Mundo'],
      route: '/religiao',
      available: true
    },
    { 
      name: 'Artes', 
      icon: Palette, 
      color: 'bg-pink-500', 
      hoverColor: 'hover:bg-pink-600',
      description: 'Aprecie a criatividade e expressão artística',
      items: ['Em breve...'],
      route: '/artes',
      available: false
    },
    { 
      name: 'Psicologia Jurídica', 
      icon: Scale, 
      color: 'bg-gray-900', 
      hoverColor: 'hover:bg-gray-800',
      description: 'Entenda a interseção entre psicologia e direito',
      items: ['Em breve...'],
      route: '/psicologia-juridica',
      available: false
    },
    { 
      name: 'Jung', 
      icon: Brain, 
      color: 'bg-green-500', 
      hoverColor: 'hover:bg-green-600',
      description: 'Explore o inconsciente coletivo e arquétipos',
      items: ['Em breve...'],
      route: '/psicologia-junguiana',
      available: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Plataforma de Conhecimento</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Uma plataforma dedicada ao conhecimento e à exploração de diferentes áreas do saber humano. 
            Descubra filosofia, mitologia, religião, artes e psicologia em um só lugar.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link 
              to="/sobre-mim"
              className="flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>Conheça Minha História</span>
            </Link>
            <Link 
              to="/psicoterapia"
              className="flex items-center space-x-2 bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
            >
              <Sofa className="w-5 h-5" />
              <span>Psicoterapia</span>
            </Link>
            <button 
              className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              onClick={() => alert('Link da newsletter será adicionado em breve!')}
            >
              <Mail className="w-5 h-5" />
              <span>Newsletter</span>
            </button>
            <a 
              href="https://www.instagram.com/wellterapia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@wellterapia</span>
            </a>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Áreas de Conhecimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${category.color} text-white group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {category.items.length} {category.items.length === 1 ? 'item' : 'itens'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {category.description}
                </CardDescription>
                <div className="space-y-2">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                {category.available && (
                  <Link to={category.route}>
                    <Button 
                      className={`w-full mt-4 ${category.color} ${category.hoverColor} text-white`}
                    >
                      Explorar {category.name}
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold mb-2">Wellington Barbosa</p>
          <p className="text-gray-400 mb-4">Plataforma de Conhecimento e Aprendizado</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.instagram.com/wellterapia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// // Página de Filosofia
function FilosofiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Filosofia</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore o pensamento filosófico através dos tempos e descubra as grandes questões da humanidade.
          </p>
        </div>

        {/* Botão de Curso em Destaque */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-orange-500 text-white hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-white text-orange-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">Curso de Filosofia</CardTitle>
                  <Badge variant="secondary" className="mt-1 bg-white text-orange-500">Disponível</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-orange-100 text-base mb-4">
                Aprofunde seus conhecimentos filosóficos com nosso curso completo do Instituto Dedalus.
              </CardDescription>
              <Button 
                className="w-full bg-white text-orange-500 hover:bg-orange-50"
                onClick={() => window.open('https://institutodedalus.com/cursos/filosofia4/', '_blank')}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Acessar Curso de Filosofia
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-orange-500 text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Linha do Tempo da Filosofia</CardTitle>
                  <Badge variant="secondary" className="mt-1">Disponível</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Uma jornada completa através da história do pensamento filosófico mundial, 
                desde os pré-socráticos até os pensadores contemporâneos.
              </CardDescription>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">12 períodos históricos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">70+ filósofos importantes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Filosofia mundial e brasileira</span>
                </div>
              </div>
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => window.open('https://ijjcdorp.manus.space', '_blank')}
              >
                Acessar Linha do Tempo
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300 opacity-60">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-gray-400 text-white">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Correntes Filosóficas</CardTitle>
                  <Badge variant="outline" className="mt-1">Em breve</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Explore as principais correntes e escolas de pensamento filosófico, 
                suas características e principais representantes.
              </CardDescription>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Idealismo, Materialismo, Existencialismo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Análise comparativa</span>
                </div>
              </div>
              <Button 
                className="w-full bg-gray-400 cursor-not-allowed"
                disabled
              >
                Em desenvolvimento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Página de Religião
function ReligiaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Religião</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore as tradições espirituais e religiosas do mundo através de diferentes recursos educacionais.
          </p>
        </div>

        {/* Botão de Curso em Destaque */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-gray-600 text-white hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-white text-gray-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">Curso de Religião</CardTitle>
                  <Badge variant="secondary" className="mt-1 bg-white text-gray-600">Disponível</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-100 text-base mb-4">
                Aprofunde seus conhecimentos sobre as tradições religiosas com nosso curso do Instituto Dedalus.
              </CardDescription>
              <Button 
                className="w-full bg-white text-gray-600 hover:bg-gray-50"
                onClick={() => window.open('https://institutodedalus.com/cursos/religiao/', '_blank')}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Acessar Curso de Religião
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-gray-500 text-white">
                  <Church className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Principais Religiões do Mundo</CardTitle>
                  <Badge variant="secondary" className="mt-1">Disponível</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Uma exploração abrangente das principais tradições religiosas mundiais, 
                suas crenças, práticas e influência na sociedade.
              </CardDescription>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">5 principais religiões</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Bilhões de seguidores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Tradições milenares</span>
                </div>
              </div>
              <Link to="/religiao/principais-religioes">
                <Button className="w-full bg-gray-500 hover:bg-gray-600">
                  Acessar Principais Religiões
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow duration-300 opacity-60">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-gray-400 text-white">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Tradições Espirituais</CardTitle>
                  <Badge variant="outline" className="mt-1">Em breve</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Explore tradições espirituais menores, práticas místicas e 
                movimentos religiosos contemporâneos.
              </CardDescription>
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Misticismo e espiritualidade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Movimentos contemporâneos</span>
                </div>
              </div>
              <Button 
                className="w-full bg-gray-400 cursor-not-allowed"
                disabled
              >
                Em desenvolvimento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Página de Principais Religiões do Mundo
function PrincipaisReligioesPage() {
  const religions = [
    {
      name: 'Cristianismo',
      followers: '2.4 bilhões',
      description: 'O Cristianismo é a maior religião do mundo, baseada nos ensinamentos de Jesus Cristo. Sua doutrina central gira em torno da fé em Jesus como o Filho de Deus e salvador da humanidade.',
      characteristics: [
        'Crença em Jesus Cristo como figura central',
        'Bíblia como texto sagrado',
        'Divindade trina (Pai, Filho e Espírito Santo)',
        'Prática de sacramentos (batismo, eucaristia, etc.)'
      ]
    },
    {
      name: 'Islamismo',
      followers: '1.9 bilhão',
      description: 'O Islamismo é a segunda maior religião do mundo, fundada por Maomé no século VII. Seus seguidores, os muçulmanos, acreditam em um único Deus (Allah) e seguem os ensinamentos do Alcorão.',
      characteristics: [
        'Crença em Allah como único Deus',
        'Alcorão como livro sagrado',
        'Cinco pilares do Islã',
        'Maomé como último profeta'
      ]
    },
    {
      name: 'Hinduísmo',
      followers: '1.2 bilhão',
      description: 'O Hinduísmo é uma das religiões mais antigas do mundo, originária do subcontinente indiano. É caracterizado por uma diversidade de crenças e práticas, incluindo a crença em múltiplas divindades.',
      characteristics: [
        'Múltiplas divindades (politeísmo)',
        'Conceito de dharma (dever religioso)',
        'Reencarnação e karma',
        'Textos sagrados como os Vedas'
      ]
    },
    {
      name: 'Budismo',
      followers: '520 milhões',
      description: 'O Budismo foi fundado por Siddhartha Gautama (Buda) no século V a.C. na Índia. Foca na busca pela iluminação através da eliminação do sofrimento e do ciclo de renascimentos.',
      characteristics: [
        'Quatro Nobres Verdades',
        'Nobre Caminho Óctuplo',
        'Conceito de nirvana',
        'Meditação como prática central'
      ]
    },
    {
      name: 'Judaísmo',
      followers: '14 milhões',
      description: 'O Judaísmo é uma das religiões monoteístas mais antigas, baseada na aliança entre Deus e o povo judeu. Seus ensinamentos estão contidos na Torá e outros textos sagrados.',
      characteristics: [
        'Monoteísmo estrito',
        'Torá como texto central',
        'Observância do Shabat',
        'Conceito de povo escolhido'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Principais Religiões do Mundo</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore as cinco maiores tradições religiosas que moldaram a história e a cultura da humanidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {religions.map((religion, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-gray-800">{religion.name}</CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    {religion.followers} seguidores
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 text-gray-700">
                  {religion.description}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Características principais:</h4>
                  {religion.characteristics.map((characteristic, charIndex) => (
                    <div key={charIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">{characteristic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/religiao">
            <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-50">
              Voltar para Religião
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Páginas placeholder para outras seções
function MitologiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Mitologia</h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Descubra mitos e lendas de diferentes culturas ao redor do mundo.
          </p>
        </div>
        
        {/* Botão de Curso em Destaque */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-blue-500 text-white hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-white text-blue-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">Curso de Mitologia</CardTitle>
                  <Badge variant="secondary" className="mt-1 bg-white text-blue-500">Disponível</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-100 text-base mb-4">
                Explore os mitos e lendas que moldaram as culturas humanas através dos tempos.
              </CardDescription>
              <Button 
                className="w-full bg-white text-blue-500 hover:bg-blue-50"
                onClick={() => window.open('https://institutodedalus.com/cursos/mitologia5/', '_blank')}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Acessar Curso de Mitologia
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300 opacity-60">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-blue-400 text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Conteúdo em Desenvolvimento</CardTitle>
                  <Badge variant="secondary" className="mt-1">Em breve</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Novos conteúdos sobre mitologia serão adicionados em breve.
              </CardDescription>
              <Button 
                className="w-full bg-blue-400 cursor-not-allowed"
                disabled
              >
                Em desenvolvimento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ArtesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-800 mb-4">Artes</h1>
          <p className="text-xl text-pink-700 max-w-3xl mx-auto">
            Aprecie a criatividade e expressão artística através dos tempos.
          </p>
        </div>
        
        {/* Botão de Curso em Destaque */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-pink-500 text-white hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-white text-pink-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">Curso de Artes</CardTitle>
                  <Badge variant="secondary" className="mt-1 bg-white text-pink-500">Disponível</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-pink-100 text-base mb-4">
                Descubra a história da arte e suas diferentes manifestações culturais.
              </CardDescription>
              <Button 
                className="w-full bg-white text-pink-500 hover:bg-pink-50"
                onClick={() => window.open('https://institutodedalus.com/cursos/arte/', '_blank')}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Acessar Curso de Artes
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300 opacity-60">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-pink-400 text-white">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Conteúdo em Desenvolvimento</CardTitle>
                  <Badge variant="secondary" className="mt-1">Em breve</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Novos conteúdos sobre artes serão adicionados em breve.
              </CardDescription>
              <Button 
                className="w-full bg-pink-400 cursor-not-allowed"
                disabled
              >
                Em desenvolvimento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function PsicologiaJuridicaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Psicologia Jurídica</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Entenda a interseção entre psicologia e direito.
          </p>
        </div>
        
        {/* Botão de Curso em Destaque */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-gray-800 text-white hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-white text-gray-800">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">Curso de Psicologia Jurídica</CardTitle>
                  <Badge variant="secondary" className="mt-1 bg-white text-gray-800">Disponível</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-100 text-base mb-4">
                Explore a aplicação da psicologia no contexto jurídico e legal.
              </CardDescription>
              <Button 
                className="w-full bg-white text-gray-800 hover:bg-gray-50"
                onClick={() => window.open('https://institutodedalus.com/cursos/juridica/', '_blank')}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Acessar Curso de Psicologia Jurídica
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-xl transition-shadow duration-300 opacity-60">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-lg bg-gray-600 text-white">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Conteúdo em Desenvolvimento</CardTitle>
                  <Badge variant="secondary" className="mt-1">Em breve</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Novos conteúdos sobre psicologia jurídica serão adicionados em breve.
              </CardDescription>
              <Button 
                className="w-full bg-gray-600 cursor-not-allowed"
                disabled
              >
                Em desenvolvimento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function PsicologiaJunguianaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Psicologia Junguiana</h1>
        <p className="text-xl text-green-700">Em breve...</p>
      </div>
    </div>
  )
}

function SobreMimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Sobre Mim</h1>
          <p className="text-xl text-purple-700">Conheça minha jornada e paixão pelo conhecimento</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wellington Barbosa</h2>
            <p className="text-gray-700 mb-6">
              Sou um apaixonado pelo conhecimento humano em suas mais diversas formas. Minha jornada acadêmica e profissional 
              me levou a explorar áreas fascinantes como filosofia, psicologia, religião, mitologia e artes, sempre buscando 
              compreender as complexidades da experiência humana.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Formação e Especialização</h3>
            <p className="text-gray-700 mb-6">
              Minha formação em Psicologia Junguiana me proporcionou uma visão profunda sobre o inconsciente coletivo, 
              arquétipos e a jornada de individuação. Esta abordagem terapêutica, desenvolvida por Carl Gustav Jung, 
              me permite auxiliar pessoas em sua busca por autoconhecimento e crescimento pessoal.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Missão e Objetivos</h3>
            <p className="text-gray-700 mb-6">
              Criei esta plataforma com o objetivo de democratizar o acesso ao conhecimento, oferecendo conteúdo 
              educacional de qualidade sobre diferentes áreas do saber humano. Acredito que o conhecimento deve ser 
              acessível a todos, independentemente de sua formação acadêmica.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Áreas de Interesse</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Filosofia: Desde os pré-socráticos até o pensamento contemporâneo</li>
              <li>Psicologia Junguiana: Terapia e desenvolvimento pessoal</li>
              <li>Religião: Tradições espirituais e suas influências culturais</li>
              <li>Mitologia: Narrativas universais e simbolismo</li>
              <li>Artes: Expressão criativa e estética</li>
              <li>Psicologia Jurídica: Interseção entre psicologia e direito</li>
            </ul>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link 
                to="/psicoterapia"
                className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                <Sofa className="w-5 h-5" />
                <span>Saiba mais sobre Psicoterapia</span>
              </Link>
              <a 
                href="https://www.instagram.com/wellterapia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-transparent border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Siga no Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PsicoterapiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-teal-800 mb-4">Psicoterapia Junguiana</h1>
          <p className="text-xl text-teal-700">Uma jornada de autoconhecimento e transformação pessoal</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">O que é a Psicoterapia Junguiana?</h2>
          <p className="text-gray-700 mb-6">
            A Psicoterapia Junguiana é uma abordagem terapêutica baseada nos conceitos desenvolvidos por Carl Gustav Jung. 
            Esta modalidade de terapia foca na integração dos aspectos conscientes e inconscientes da personalidade, 
            promovendo o processo de individuação - a jornada em direção à totalidade do ser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Principais conceitos:</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Inconsciente Coletivo:</strong> Camada mais profunda do inconsciente, compartilhada por toda a humanidade</li>
            <li><strong>Arquétipos:</strong> Padrões universais de comportamento e imagens presentes no inconsciente coletivo</li>
            <li><strong>Individuação:</strong> Processo de desenvolvimento psicológico em direção à realização do Self</li>
            <li><strong>Sombra:</strong> Aspectos reprimidos ou negados da personalidade</li>
            <li><strong>Anima/Animus:</strong> Aspectos femininos e masculinos presentes em cada indivíduo</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Para quem é indicado?</h2>
          <p className="text-gray-700 mb-4">
            A Psicoterapia Junguiana é especialmente indicada para pessoas que buscam:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Autoconhecimento profundo e desenvolvimento pessoal</li>
            <li>Compreensão de padrões repetitivos em relacionamentos</li>
            <li>Exploração do significado e propósito de vida</li>
            <li>Trabalho com sonhos e simbolismo</li>
            <li>Integração de aspectos rejeitados da personalidade</li>
            <li>Superação de crises existenciais</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Como funciona o processo?</h2>
          <p className="text-gray-700 mb-4">
            O processo terapêutico junguiano é uma jornada colaborativa entre terapeuta e paciente. Utiliza-se de ferramentas como a análise de sonhos, imaginação ativa, e a exploração de símbolos e mitos pessoais. O terapeuta atua como um guia, auxiliando o paciente a decifrar as mensagens do inconsciente e a integrar esses conteúdos na consciência.
          </p>
          <p className="text-gray-700 mb-6">
            As sessões são um espaço seguro e confidencial para você explorar suas questões, emoções e padrões de comportamento, buscando uma vida mais autêntica e plena.
          </p>

          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/wellterapia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Entre em Contato via Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filosofia" element={<FilosofiaPage />} />
        <Route path="/religiao" element={<ReligiaoPage />} />
        <Route path="/religiao/principais-religioes" element={<PrincipaisReligioesPage />} />
        <Route path="/mitologia" element={<MitologiaPage />} />
        <Route path="/artes" element={<ArtesPage />} />
        <Route path="/psicologia-juridica" element={<PsicologiaJuridicaPage />} />
        <Route path="/psicologia-junguiana" element={<PsicologiaJunguianaPage />} />
        <Route path="/sobre-mim" element={<SobreMimPage />} />
        <Route path="/psicoterapia" element={<PsicoterapiaPage />} />
      </Routes>
    </Router>
  )
}

export default App

