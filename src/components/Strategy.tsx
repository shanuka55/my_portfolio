import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  Palette, 
  Rocket, 
  BarChart3, 
  TrendingUp 
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Market Research & Analysis",
    description: "Deep dive into market trends, competitor analysis, and audience insights.",
  },
  {
    icon: Target,
    title: "Strategy Planning",
    description: "Develop comprehensive marketing strategies aligned with business objectives.",
  },
  {
    icon: Palette,
    title: "Creative Development",
    description: "Create compelling content and visuals that resonate with target audiences.",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description: "Launch multi-channel campaigns with precision targeting and optimization.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Monitor KPIs and metrics to measure success and identify opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Scaling & Growth",
    description: "Scale successful strategies and continuously improve for sustained growth.",
  },
];

const Strategy = () => {
  return (
    <section id="strategy" className="section-padding">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            My Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Marketing <span className="gradient-text">Strategy</span>
          </h2>
          <p className="text-muted-foreground">
            A proven step-by-step approach that delivers consistent results for every project.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Number Badge */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm -translate-x-1/2 z-10">
                {index + 1}
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
              }`}>
                <div className="glass-card rounded-xl p-6 hover-lift inline-block text-left">
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? "md:flex-row-reverse md:justify-start" : ""
                  }`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
