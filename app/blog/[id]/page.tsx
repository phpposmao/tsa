import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blog-card"
import { blogPosts } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return {
      title: "Post não encontrado | TSA",
      description: "O post que você procura não foi encontrado.",
    }
  }

  return {
    title: `${post.title} | TSA Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.id !== params.id).slice(0, 3)

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="max-w-[1180px] mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para o blog
          </Link>

          <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <h2 className="text-xl text-gray-400 mb-6">{post.subtitle}</h2>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-gray-400">
                  {new Date(post.date).toLocaleDateString("pt-BR")} • {post.readTime} de leitura
                </p>
              </div>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <Button variant="outline" size="sm" className="rounded-full">
              {post.category}
            </Button>
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Posts Relacionados</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <button
            className="absolute -left-12 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-2 hidden md:block"
            aria-label="Previous posts"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute -right-12 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-2 hidden md:block"
            aria-label="Next posts"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </section>
    </main>
  )
}

