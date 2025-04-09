import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="space-y-6 text-center">
        <h1 className="text-primary">My Skills</h1>
        <p className="mx-auto max-w-[800px] text-xl text-muted-foreground">
          An overview of my technical abilities and expertise.
        </p>
      </section>

      <section className="space-y-6">
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="mathematical">Mathematical</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-6 pt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold">Programming Languages</h3>
                <div className="space-y-6">
                  <SkillBar name="Python" level={95} />
                  <SkillBar name="JavaScript/TypeScript" level={90} />
                  <SkillBar name="C++" level={85} />
                  <SkillBar name="Java" level={80} />
                  <SkillBar name="SQL" level={85} />
                  <SkillBar name="R" level={75} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold">Frameworks & Technologies</h3>
                <div className="space-y-6">
                  <SkillBar name="React/Next.js" level={90} />
                  <SkillBar name="Node.js" level={85} />
                  <SkillBar name="TensorFlow/PyTorch" level={80} />
                  <SkillBar name="Docker/Kubernetes" level={75} />
                  <SkillBar name="AWS/Cloud Services" level={80} />
                  <SkillBar name="Git/Version Control" level={95} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mathematical" className="space-y-6 pt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold">Mathematical Domains</h3>
                <div className="space-y-6">
                  <SkillBar name="Linear Algebra" level={95} />
                  <SkillBar name="Calculus" level={90} />
                  <SkillBar name="Discrete Mathematics" level={95} />
                  <SkillBar name="Statistics & Probability" level={85} />
                  <SkillBar name="Number Theory" level={80} />
                  <SkillBar name="Graph Theory" level={90} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold">Applied Mathematics</h3>
                <div className="space-y-6">
                  <SkillBar name="Data Analysis" level={90} />
                  <SkillBar name="Machine Learning" level={85} />
                  <SkillBar name="Optimization" level={80} />
                  <SkillBar name="Numerical Methods" level={85} />
                  <SkillBar name="Mathematical Modeling" level={90} />
                  <SkillBar name="Cryptography" level={75} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soft" className="space-y-6 pt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold">Communication & Collaboration</h3>
                <div className="space-y-6">
                  <SkillBar name="Technical Writing" level={90} />
                  <SkillBar name="Public Speaking" level={85} />
                  <SkillBar name="Team Leadership" level={80} />
                  <SkillBar name="Project Management" level={85} />
                  <SkillBar name="Mentoring" level={90} />
                  <SkillBar name="Cross-functional Collaboration" level={85} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold">Problem Solving</h3>
                <div className="space-y-6">
                  <SkillBar name="Analytical Thinking" level={95} />
                  <SkillBar name="Logical Reasoning" level={95} />
                  <SkillBar name="Creative Problem Solving" level={85} />
                  <SkillBar name="Critical Thinking" level={90} />
                  <SkillBar name="Decision Making" level={85} />
                  <SkillBar name="Systems Thinking" level={90} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-6">
        <h2 className="text-center">Certifications & Achievements</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CertificationCard
            title="Advanced Machine Learning"
            issuer="Stanford University"
            date="2023"
            description="Specialized certification in advanced machine learning techniques and applications."
          />
          <CertificationCard
            title="AWS Certified Solutions Architect"
            issuer="Amazon Web Services"
            date="2022"
            description="Professional certification for designing distributed systems on AWS."
          />
          <CertificationCard
            title="Mathematics Competition Finalist"
            issuer="International Mathematics Olympiad"
            date="2020"
            description="Reached the finals of the prestigious international mathematics competition, ranking in the top 5% of participants worldwide."
          />
          <CertificationCard
            title="Full Stack Development"
            issuer="Tech Institute"
            date="2021"
            description="Comprehensive certification covering modern web development technologies and best practices."
          />
          <CertificationCard
            title="Data Science Professional"
            issuer="IBM"
            date="2022"
            description="Professional certification in data science methodologies, tools, and applications."
          />
          <CertificationCard
            title="Logic and Computation"
            issuer="MIT"
            date="2019"
            description="Advanced course certification in formal logic, computational theory, and their applications."
          />
        </div>
      </section>
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  )
}

function CertificationCard({
  title,
  issuer,
  date,
  description,
}: {
  title: string
  issuer: string
  date: string
  description: string
}) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{issuer}</span>
            <span>{date}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
