import { motion } from "framer-motion";

const clients = [
  "TechStart Solutions",
  "Urban Eats Restaurant",
  "FitLife Wellness",
  "StyleHub Fashion",
  "Local Dental Care",
  "Fashion Forward",
  "TechPro Solutions",
  "GreenLeaf Organics",
  "Skyline Realty",
  "CloudTech Systems",
  "Artisan Coffee Co",
  "NextGen Education",
];

const Clients = () => {
  return (
    <section id="clients" className="section-padding">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-muted-foreground">
            Proud to have worked with amazing brands across various industries.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-xl p-6 flex items-center justify-center hover-lift"
            >
              <span className="font-heading font-semibold text-center text-muted-foreground hover:text-foreground transition-colors">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
