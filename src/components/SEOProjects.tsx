import { motion } from "framer-motion";
import { TrendingUp, ArrowUp, Users, MousePointerClick } from "lucide-react";

const seoProjects = [
  {
    company: "TechStart Solutions",
    description: "B2B SaaS startup looking to increase organic visibility",
    before: {
      traffic: "2,500/mo",
      ranking: "Page 5-10",
      keywords: "15 ranked",
    },
    strategy: ["Technical SEO audit", "Content optimization", "Link building", "Schema markup"],
    after: {
      traffic: "28,000/mo",
      ranking: "Top 3",
      keywords: "150+ ranked",
    },
    growth: "1,020%",
  },
  {
    company: "Local Dental Care",
    description: "Multi-location dental practice seeking local patients",
    before: {
      traffic: "800/mo",
      ranking: "Not in top 50",
      keywords: "5 ranked",
    },
    strategy: ["Local SEO optimization", "Google Business Profile", "Review management", "Local citations"],
    after: {
      traffic: "6,500/mo",
      ranking: "Top 3 local pack",
      keywords: "85+ ranked",
    },
    growth: "712%",
  },
  {
    company: "Fashion Forward",
    description: "E-commerce fashion brand expanding online presence",
    before: {
      traffic: "12,000/mo",
      ranking: "Page 2-3",
      keywords: "45 ranked",
    },
    strategy: ["Product page optimization", "Category restructuring", "Content marketing", "Backlink outreach"],
    after: {
      traffic: "95,000/mo",
      ranking: "Top 5",
      keywords: "500+ ranked",
    },
    growth: "691%",
  },
];

const SEOProjects = () => {
  return (
    <section id="seo-projects" className="section-padding bg-secondary/30">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            SEO <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground">
            Real results from comprehensive SEO strategies that transformed organic performance.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {seoProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 hover-lift"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1">
                    {project.company}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
                  <ArrowUp className="w-5 h-5 text-primary" />
                  <span className="font-heading text-xl font-bold text-primary">
                    {project.growth}
                  </span>
                  <span className="text-muted-foreground text-sm">Growth</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Before */}
                <div className="rounded-xl bg-background/50 p-5">
                  <h4 className="font-medium text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                    Before
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Traffic</span>
                      <span className="font-medium">{project.before.traffic}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ranking</span>
                      <span className="font-medium">{project.before.ranking}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Keywords</span>
                      <span className="font-medium">{project.before.keywords}</span>
                    </div>
                  </div>
                </div>

                {/* Strategy */}
                <div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
                  <h4 className="font-medium text-sm text-primary mb-4 uppercase tracking-wider">
                    Strategy Applied
                  </h4>
                  <ul className="space-y-2">
                    {project.strategy.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="rounded-xl bg-primary/10 p-5">
                  <h4 className="font-medium text-sm text-primary mb-4 uppercase tracking-wider">
                    After
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Traffic</span>
                      <span className="font-bold text-primary">{project.after.traffic}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Ranking</span>
                      <span className="font-bold text-primary">{project.after.ranking}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Keywords</span>
                      <span className="font-bold text-primary">{project.after.keywords}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOProjects;
