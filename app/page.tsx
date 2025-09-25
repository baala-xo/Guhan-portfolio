import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Linkedin, Figma } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/ui/contactForm"
import BehanceShowcase from "@/components/ui/behance-showcase"
import BehanceIcon from "@/components/ui/BehanceIcon";

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
              UI/UX Designer with a strong focus on crafting intuitive, user-friendly, and visually appealing digital experiences. Skilled in wireframing, prototyping, and usability testing to ensure seamless user journeys."
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="https://www.behance.net/guhan46">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/guhan-alt.jpeg"
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
          I have completed my M.Sc. IT at Hindusthan College of Arts and Science. I have gained experience through internships and projects in IoT and Deep Learning. As a UI/UX Designer, I specialize in creating efficient, user-focused, and visually engaging digital experiences with strong skills in wireframing and prototyping.
        </p>
      </section>
        <BehanceShowcase />
      {/* Projects Section */}
      <section id="projects" className="container-custom section-spacing">
        <h2 className="heading-lg mb-8">Acadamic Projects</h2>
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
        <h2 className="heading-lg mb-8">Technical Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg text-muted-foreground">
          <li>Figma</li>
          <li>Canva</li> 
          <li>Adobe Illustrator</li>
          <li>Photoshop</li>
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
              <a href="https://www.linkedin.com/in/guhan-k-115a1b295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">LinkedIn</span>
              </a>
              <a href="https://www.behance.net/guhan46" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-foreground group">
              <Image
  src="/behance.svg"
  alt="Behance"
  width={24}
  height={24}
  className="group-hover:scale-110 transition-transform"
/>

  <span className="link-underline">Behance</span>
</a>
              <a href="tel:+918825730810" className="text-xl mt-8">
                <span className="link-underline hover:text-foreground"> Phone: +91-8825730810</span>
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
