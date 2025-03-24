import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"
import { blogPosts, categories } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | TSA",
  description: "Descubra insights e tendências do marketing para empresas",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black flex align-middle justify-center items-center">
      <div className="w-4/5 bg-white rounded-xl mt-32 mb-16">
        {/* Hero Section */}
        <section className="mx-auto px-4 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-regular mb-4">
              Blog TSA
              <br />
              Business & Hub
            </h1>
            <h2 className="text-2xl text-black my-7">
              Descubra <span className="text-orange-500 font-semibold">insights e tendências</span>
              <br/>do marketing para empresas
            </h2>
            <p className="max-w-2xl mx-auto text-black">
              Aqui você encontra conteúdos exclusivos que fazem a diferença. <strong>De dicas práticas a estratégias avançadas,
              mostramos o que realmente funciona no mercado.</strong> <br/>Acompanhe estudos de caso e tendências que impulsionam o crescimento do seu negócio. Aqui, seu sucesso é a nossa prioridade!
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto px-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category} variant="outline" className="rounded-full text-sm">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mx-auto px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
      
    </main>
  )
}

