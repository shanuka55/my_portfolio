import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const webProjects = [
  {
    title: "TechStart Landing Page",
    description: "Modern SaaS landing page with smooth animations and conversion-optimized design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, checkout, and payment integration.",
    technologies: ["WordPress", "WooCommerce", "Custom Theme"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio for a photographer with gallery and contact features.",
    technologies: ["Webflow", "Custom CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Restaurant Website",
    description: "Elegant restaurant website with online reservations and menu display.",
    technologies: ["WordPress", "Elementor", "Custom Plugin"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing website with search, filters, and agent profiles.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Fitness App Landing",
    description: "High-converting landing page for a fitness mobile application.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    link: "#",
  },
];

const WebProjects = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Web <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of websites and web applications I've designed and developed.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.link}>
                      View Project <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;
