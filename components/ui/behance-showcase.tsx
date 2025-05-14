// components/behance-showcase.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Minimalist Branding",
    image: "/behance-pic.jpeg",
    url: "https://www.behance.net/gallery/225086901/NIKE-SNEAKER-SHOPPING",
  },
  {
    title: "Food Delivery App",
    image: "/Food Delivery App.png",
    url: "https://www.behance.net/gallery/225779813/Food-delivery-app",
    },
 
]

export default function BehanceShowcase() {
  return (
    <section id="behance" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-12 text-center">
          Behance <span className="text-primary">Showcase</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">View on Behance</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
