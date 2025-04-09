import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="space-y-6 text-center">
        <h1 className="text-primary">My Blog</h1>
        <p className="mx-auto max-w-[800px] text-xl text-muted-foreground">
          Thoughts, tutorials, and insights on IT, programming, mathematics, and logic.
        </p>
      </section>

      <section className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            title="The Beauty of Mathematical Patterns"
            date="April 15, 2025"
            excerpt="Exploring how mathematical patterns appear in nature and how we can model them computationally."
            tags={["Mathematics", "Patterns", "Modeling"]}
            slug="mathematical-patterns"
          />
          <BlogCard
            title="Optimizing Algorithms: A Case Study"
            date="March 28, 2025"
            excerpt="A deep dive into algorithm optimization techniques that improved performance by 300% in a real-world application."
            tags={["Algorithms", "Optimization", "Performance"]}
            slug="algorithm-optimization"
          />
          <BlogCard
            title="The Logic Behind Machine Learning"
            date="February 12, 2025"
            excerpt="Understanding the logical foundations that power modern machine learning algorithms and models."
            tags={["Machine Learning", "Logic", "AI"]}
            slug="logic-machine-learning"
          />
          <BlogCard
            title="Functional Programming Paradigms"
            date="January 30, 2025"
            excerpt="How functional programming concepts can lead to cleaner, more maintainable code in any language."
            tags={["Programming", "Functional", "Best Practices"]}
            slug="functional-programming"
          />
          <BlogCard
            title="Number Theory in Cryptography"
            date="December 15, 2024"
            excerpt="Exploring how fundamental concepts from number theory form the backbone of modern cryptographic systems."
            tags={["Cryptography", "Number Theory", "Security"]}
            slug="number-theory-cryptography"
          />
          <BlogCard
            title="Building Logical Systems"
            date="November 22, 2024"
            excerpt="A guide to constructing robust logical systems for complex decision-making processes."
            tags={["Logic", "Systems", "Decision Making"]}
            slug="logical-systems"
          />
          <BlogCard
            title="The Mathematics of Neural Networks"
            date="October 10, 2024"
            excerpt="Understanding the mathematical principles that govern how neural networks learn and make predictions."
            tags={["Neural Networks", "Mathematics", "Deep Learning"]}
            slug="mathematics-neural-networks"
          />
          <BlogCard
            title="Graph Theory Applications"
            date="September 5, 2024"
            excerpt="How graph theory solves real-world problems in networking, social media, and transportation systems."
            tags={["Graph Theory", "Networks", "Applications"]}
            slug="graph-theory-applications"
          />
          <BlogCard
            title="The Art of Problem Decomposition"
            date="August 18, 2024"
            excerpt="Techniques for breaking down complex problems into manageable components for elegant solutions."
            tags={["Problem Solving", "Methodology", "Complexity"]}
            slug="problem-decomposition"
          />
        </div>
      </section>
    </div>
  )
}

function BlogCard({
  title,
  date,
  excerpt,
  tags,
  slug,
}: {
  title: string
  date: string
  excerpt: string
  tags: string[]
  slug: string
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col space-y-4">
          <div className="h-48 bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold">Featured Image</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {date}
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="text-muted-foreground">{excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link href={`/blog/${slug}`} className="inline-flex items-center text-primary hover:underline">
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
