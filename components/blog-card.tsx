import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post?: BlogPost
  title?: string
  image?: string
}

export default function BlogCard({ post, title, image }: BlogCardProps) {
  // If post is provided, use its data, otherwise use the direct props
  const postTitle = post?.title || title || "Título do post"
  const postImage = post?.image || image || "/placeholder.svg?height=400&width=600"
  const postId = post?.id || "1"
  const postExcerpt = post?.excerpt || ""

  return (
    <Link href={`/blog/${postId}`} className="group">
      <div className="bg-black rounded-xl overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={postImage || "/placeholder.svg"}
            alt={postTitle}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-lg font-bold text-white mb-2">{postTitle}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

