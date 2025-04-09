import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
  return (
    <div className="space-y-12 py-8">
      <section className="space-y-6 text-center">
        <h1 className="text-primary">About Me</h1>
        <p className="mx-auto max-w-[800px] text-xl text-muted-foreground">
          Get to know more about my background, interests, and journey.
        </p>
      </section>

      <section className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col items-center space-y-6">
          <Avatar className="h-48 w-48 border-4 border-primary">
            <AvatarImage src="/placeholder.svg?height=200&width=200" alt="Darius Leung" />
            <AvatarFallback className="text-4xl">DL</AvatarFallback>
          </Avatar>
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold text-primary">Darius Leung</h2>
            <p className="text-muted-foreground">IT Professional & Mathematics Enthusiast</p>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Darius Leung, a passionate individual with a deep interest in information technology,
                  programming, mathematics, and logical reasoning. My journey began when I first discovered the
                  fascinating intersection of mathematics and computer science.
                </p>
                <p>
                  Throughout my career, I've dedicated myself to exploring how these disciplines can be combined to
                  solve complex problems and create innovative solutions. I believe that a strong foundation in
                  mathematical thinking enhances one's ability to approach programming challenges with clarity and
                  precision.
                </p>
                <p>
                  My work spans across various domains, from developing algorithms to modeling complex systems. I'm
                  particularly interested in how logical frameworks can be applied to real-world scenarios to optimize
                  processes and improve decision-making.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Education & Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Education</h4>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• MSc in Computer Science, University of Technology</li>
                    <li>• BSc in Mathematics, University of Science</li>
                    <li>• Various certifications in advanced programming and data analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Professional Experience</h4>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• Senior Software Engineer at Tech Innovations Inc.</li>
                    <li>• Data Scientist at Analytics Solutions Ltd.</li>
                    <li>• Mathematics Lecturer at Community College</li>
                    <li>• Research Assistant in Computational Mathematics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold">Personal Interests</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Beyond my professional pursuits, I enjoy chess, puzzle-solving, and participating in mathematics
                  competitions. I'm also an avid reader of science fiction and philosophy, which often inspire my
                  approach to problem-solving and innovation.
                </p>
                <p>
                  In my free time, I contribute to open-source projects and mentor aspiring programmers and
                  mathematicians. I believe in the power of knowledge sharing and collaborative learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
