import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tendências de Cortes Masculinos para 2024",
    excerpt: "Descubra os estilos que estão dominando o mundo da moda masculina e como adaptá-los ao seu rosto.",
    author: "Pedro Santos",
    date: "2024-01-10",
    readTime: "5 min",
    category: "Tendências",
    image: "/placeholder.svg?height=200&width=350",
    featured: true
  },
  {
    id: 2,
    title: "Como Cuidar da Barba no Inverno",
    excerpt: "Dicas essenciais para manter sua barba hidratada e bem cuidada durante os meses mais frios.",
    author: "João Silva",
    date: "2024-01-08",
    readTime: "3 min",
    category: "Cuidados",
    image: "/placeholder.svg?height=200&width=350",
    featured: false
  },
  {
    id: 3,
    title: "A História da Barbearia Clássica",
    excerpt: "Uma viagem no tempo para descobrir as origens e evolução da arte de barbear.",
    author: "Carlos Lima",
    date: "2024-01-05",
    readTime: "7 min",
    category: "História",
    image: "/placeholder.svg?height=200&width=350",
    featured: false
  },
  {
    id: 4,
    title: "Produtos Essenciais para o Homem Moderno",
    excerpt: "Guia completo dos produtos indispensáveis para cuidados masculinos em 2024.",
    author: "Pedro Santos",
    date: "2024-01-03",
    readTime: "4 min",
    category: "Produtos",
    image: "/placeholder.svg?height=200&width=350",
    featured: false
  }
];

const categories = [
  { name: "Tendências", count: 12 },
  { name: "Cuidados", count: 8 },
  { name: "Produtos", count: 6 },
  { name: "História", count: 4 },
  { name: "Dicas", count: 15 }
];

export function BlogSection() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog <span className="text-gold">Pasko</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dicas, tendências e conhecimento sobre o mundo da barbearia e cuidados masculinos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-12 bg-card border-2 border-gold shadow-gold overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-gold text-deep-black">
                      ⭐ Post em Destaque
                    </Badge>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button variant="luxury" className="w-fit">
                      Ler Artigo Completo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="bg-card border-border hover:border-gold transition-all hover:shadow-subtle group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-gold transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gold hover:text-gold">
                        Ler mais →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="premium" size="lg">
                Carregar Mais Artigos
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Categorias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-muted cursor-pointer group transition-colors"
                  >
                    <span className="text-foreground group-hover:text-gold transition-colors">
                      {category.name}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Newsletter Pasko</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Receba as últimas dicas e tendências direto no seu e-mail
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" className="w-full">
                  Inscrever-se
                </Button>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Posts Populares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="flex gap-3 group cursor-pointer">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}