import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Calendar, Code, Calculator, Brain, Laptop } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12 py-8">
      <section className="space-y-6 text-center">
        <h1 className="text-primary">Welcome to My Personal Website</h1>
        <p className="mx-auto max-w-[800px] text-xl text-muted-foreground">
          I'm passionate about IT, programming, mathematics, and logic.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/about">
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-center">My Interests</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InterestCard
            icon={<Laptop className="h-12 w-12 text-primary" />}
            title="Information Technology"
            description="Exploring the latest advancements in technology and their applications in solving real-world problems."
          />
          <InterestCard
            icon={<Code className="h-12 w-12 text-primary" />}
            title="Programming"
            description="Developing elegant solutions through code, with a focus on efficiency, readability, and maintainability."
          />
          <InterestCard
            icon={<Calculator className="h-12 w-12 text-primary" />}
            title="Mathematics"
            description="Applying mathematical concepts to understand patterns and solve complex problems in various domains."
          />
          <InterestCard
            icon={<Brain className="h-12 w-12 text-primary" />}
            title="Logic"
            description="Using logical reasoning to analyze problems, make sound decisions, and develop structured arguments."
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Project Alpha"
            description="A machine learning algorithm that predicts market trends with 85% accuracy."
            tags={["Python", "TensorFlow", "Data Science"]}
          />
          <ProjectCard
            title="Logic Simulator"
            description="An interactive tool for visualizing and testing logical circuits and boolean algebra."
            tags={["JavaScript", "React", "SVG"]}
          />
          <ProjectCard
            title="Mathematical Modeling Tool"
            description="Software for creating and analyzing complex mathematical models for real-world phenomena."
            tags={["C++", "OpenGL", "Mathematics"]}
          />
        </div>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function InterestCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string
  description: string
  tags: string[]
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SkillCard({ name, level }: { name: string; level: string }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center space-y-2">
          <h3 className="font-medium">{name}</h3>
          <Badge
            variant={
              level === "Expert"
                ? "default"
                : level === "Advanced"
                  ? "secondary"
                  : level === "Intermediate"
                    ? "outline"
                    : "destructive"
            }
          >
            {level}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

function BlogCard({
  title,
  date,
  excerpt,
  tags,
}: {
  title: string
  date: string
  excerpt: string
  tags: string[]
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col space-y-4">
          <div className="h-48 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Featured Image</span>
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
            <Button variant="link" className="px-0">
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
