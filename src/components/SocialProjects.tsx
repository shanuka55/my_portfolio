import { motion } from "framer-motion";
import { Facebook, TrendingUp, Users, Heart } from "lucide-react";

const socialProjects = [
  {
    platform: "Facebook",
    pageName: "FitLife Wellness",
    before: { likes: "2,500", engagement: "1.2%", reach: "5K" },
    after: { likes: "45,000", engagement: "8.5%", reach: "150K" },
    growth: "1,700%",
    duration: "8 months",
  },
  {
    platform: "Facebook",
    pageName: "Urban Eats Restaurant",
    before: { likes: "800", engagement: "0.8%", reach: "2K" },
    after: { likes: "18,500", engagement: "6.2%", reach: "75K" },
    growth: "2,212%",
    duration: "6 months",
  },
  {
    platform: "Instagram",
    pageName: "StyleHub Fashion",
    before: { likes: "5,000", engagement: "2.1%", reach: "10K" },
    after: { likes: "85,000", engagement: "9.8%", reach: "300K" },
    growth: "1,600%",
    duration: "10 months",
  },
  {
    platform: "LinkedIn",
    pageName: "TechPro Solutions",
    before: { likes: "350", engagement: "0.5%", reach: "1K" },
    after: { likes: "12,000", engagement: "5.5%", reach: "50K" },
    growth: "3,328%",
    duration: "12 months",
  },
];

const SocialProjects = () => {
  return (
    <section id="social-projects" className="section-padding bg-secondary/30">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Social Proof
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Social Media <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground">
            Demonstrable results from strategic social media management and growth campaigns.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {socialProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {project.platform === "Facebook" && <Facebook className="w-6 h-6 text-primary" />}
                    {project.platform === "Instagram" && <Heart className="w-6 h-6 text-primary" />}
                    {project.platform === "LinkedIn" && <Users className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">{project.pageName}</h3>
                    <span className="text-sm text-muted-foreground">{project.platform}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-bold">{project.growth}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{project.duration}</span>
                </div>
              </div>

              {/* Stats Comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-background/50 p-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Before</span>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Followers</span>
                      <span className="font-medium">{project.before.likes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Engagement</span>
                      <span className="font-medium">{project.before.engagement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Reach</span>
                      <span className="font-medium">{project.before.reach}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-primary/10 p-4">
                  <span className="text-xs text-primary uppercase tracking-wider">After</span>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Followers</span>
                      <span className="font-bold text-primary">{project.after.likes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Engagement</span>
                      <span className="font-bold text-primary">{project.after.engagement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Reach</span>
                      <span className="font-bold text-primary">{project.after.reach}</span>
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

export default SocialProjects;
