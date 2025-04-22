import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
              <h1 className="heading-xl mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Guhan K
                </span>
              </h1>
              <h2 className="heading-md text-muted-foreground">UI UX Designer</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              M.Sc. IT student passionate about building efficient and user-focused applications. Skilled in Figma.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/ghibli-guhan.jpeg"
                alt="Profile Image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing">
        <h2 className="heading-lg mb-8">About</h2>
        <p className="body-lg text-muted-foreground max-w-3xl">
          I am currently pursuing my M.Sc. IT at Hindusthan College of Arts and Science. I have completed internships and projects in IoT and Deep Learning. I am passionate about UI/UX design, video editing, and solving real-world problems using technology.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container-custom section-spacing">
        <h2 className="heading-lg mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Vision-Based Smart System Using IoT</h3>
            <p className="text-muted-foreground">A smart automation system utilizing IoT for real-time data analysis and control.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-2">LipNet: Deep Learning for Lip Reading</h3>
            <p className="text-muted-foreground">A deep learning model built with TensorFlow to predict spoken words through visual input of lip movements.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container-custom section-spacing">
        <h2 className="heading-lg mb-8">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-muted-foreground">
          <li>Figma</li>
          <li>Canva</li>
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Photoshop</li>
          <li>Lightroom</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-2xl leading-relaxed">
              Feel free to reach out regarding collaborations, projects, or any opportunity!
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:guhan626@gmail.com" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-foreground group">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">guhan626@gmail.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">LinkedIn (update link)</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-foreground group">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">GitHub (update link)</span>
              </a>
            </div>
            <p className="text-xl mt-8">Phone: +91-8825730810</p>
          </div>

          <div>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">Name</label>
                <input id="name" name="name" type="text" required className="w-full border-2 border-muted py-3 px-4 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors rounded-md" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 font-medium">Email</label>
                <input id="email" name="email" type="email" required className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 font-medium">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors" placeholder="Your Message"></textarea>
              </div>
              <Button type="submit" size="lg" className="text-lg px-8 w-full md:w-auto">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
