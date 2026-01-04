import { motion } from "framer-motion";

const tools = [
  { name: "Meta Ads Manager", category: "Advertising" },
  { name: "Google Ads", category: "Advertising" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Google Search Console", category: "SEO" },
  { name: "Canva", category: "Design" },
  { name: "Photoshop", category: "Design" },
  { name: "WordPress", category: "Development" },
  { name: "Webflow", category: "Development" },
  { name: "Ahrefs", category: "SEO" },
  { name: "SEMrush", category: "SEO" },
  { name: "Mailchimp", category: "Email" },
  { name: "HubSpot", category: "CRM" },
];

const Tools = () => {
  return (
    <section id="tools" className="section-padding bg-secondary/30">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            My Toolkit
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tools & <span className="gradient-text">Platforms</span>
          </h2>
          <p className="text-muted-foreground">
            Industry-leading tools I use to deliver exceptional results for every project.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group glass-card rounded-xl p-5 hover-lift text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="text-xl font-bold text-primary">
                  {tool.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-medium text-sm mb-1">{tool.name}</h3>
              <span className="text-xs text-muted-foreground">{tool.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
