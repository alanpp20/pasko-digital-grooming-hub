import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Plus, TrendingUp } from "lucide-react";

const communityPosts = [
  {
    id: 1,
    author: "Carlos Silva",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2h atrás",
    content: "Acabei de fazer um corte incrível na Pasko! O Pedro Santos é um artista! 🔥",
    image: "/placeholder.svg?height=300&width=400",
    likes: 23,
    comments: 8,
    tags: ["#PaskoStyle", "#CortePerfeito"]
  },
  {
    id: 2,
    author: "João Mendes",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "5h atrás",
    content: "Dica para quem tem barba: usem o óleo da Pasko! Faz toda a diferença na hidratação.",
    likes: 17,
    comments: 12,
    tags: ["#DicaDeBarba", "#ProdutosPasko"]
  },
  {
    id: 3,
    author: "Rafael Costa",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "1 dia atrás",
    content: "Primeira vez na Pasko e já virei cliente! Ambiente incrível e profissionais top.",
    likes: 31,
    comments: 15,
    tags: ["#PrimeiraVez", "#Recomendo"]
  }
];

const trendingTopics = [
  { tag: "#PaskoStyle", posts: 127 },
  { tag: "#CorteModerno", posts: 89 },
  { tag: "#BarbaPerfeta", posts: 64 },
  { tag: "#DicasDeBarbeiro", posts: 45 },
  { tag: "#EstiloMasculino", posts: 38 }
];

export function CommunitySection() {
  const [newPost, setNewPost] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);

  const handleLike = (postId: number) => {
    // Simulate like action
    console.log(`Liked post ${postId}`);
  };

  const handleComment = (postId: number) => {
    // Simulate comment action
    console.log(`Comment on post ${postId}`);
  };

  const handleShare = (postId: number) => {
    // Simulate share action
    console.log(`Shared post ${postId}`);
  };

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comunidade <span className="text-gold">Pasko</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte-se com outros clientes, compartilhe seu estilo e descubra as últimas tendências
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* New Post */}
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    Compartilhe com a comunidade
                  </h3>
                  <Button
                    variant="luxury"
                    size="sm"
                    onClick={() => setShowNewPost(!showNewPost)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Postagem
                  </Button>
                </div>
              </CardHeader>
              
              {showNewPost && (
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Compartilhe sua experiência, dicas ou fotos..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      📷 Adicionar Foto
                    </Button>
                    <Button variant="outline" size="sm">
                      🏷️ Adicionar Tag
                    </Button>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowNewPost(false)}>
                      Cancelar
                    </Button>
                    <Button variant="luxury">
                      Publicar
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <Card key={post.id} className="bg-card border-border hover:border-gold/50 transition-all">
                  <CardContent className="p-6">
                    {/* Post Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{post.author}</h4>
                        <p className="text-sm text-muted-foreground">{post.time}</p>
                      </div>
                    </div>

                    {/* Post Content */}
                    <p className="text-foreground mb-4">{post.content}</p>

                    {/* Post Image */}
                    {post.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={post.image}
                          alt="Post content"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    )}

                    {/* Post Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Post Actions */}
                    <div className="flex items-center gap-6 pt-4 border-t border-border">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button
                        onClick={() => handleComment(post.id)}
                        className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button
                        onClick={() => handleShare(post.id)}
                        className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                      >
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">Compartilhar</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="h-5 w-5 text-gold" />
                  Trending
                </CardTitle>
                <CardDescription>
                  Tópicos mais populares da semana
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gold font-medium">{topic.tag}</span>
                    <span className="text-sm text-muted-foreground">{topic.posts} posts</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Estatísticas da Comunidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">1,247</div>
                  <p className="text-sm text-muted-foreground">Membros ativos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">3,891</div>
                  <p className="text-sm text-muted-foreground">Posts este mês</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold">89%</div>
                  <p className="text-sm text-muted-foreground">Satisfação geral</p>
                </div>
              </CardContent>
            </Card>

            {/* Join Community CTA */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Junte-se à Comunidade</h3>
                <p className="text-sm mb-4 opacity-90">
                  Faça parte da maior comunidade de estilo masculino da região
                </p>
                <Button variant="secondary" className="w-full">
                  Criar Conta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}