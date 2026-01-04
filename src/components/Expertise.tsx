import { motion } from "framer-motion";
import { 
  Target, 
  TrendingUp, 
  Share2, 
  Search, 
  Palette, 
  Code2,
  BarChart3
} from "lucide-react";

const expertiseItems = [
  {
    icon: Target,
    title: "Digital Marketing Strategy",
    description: "Comprehensive marketing plans tailored to your business goals and target audience.",
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    description: "ROI-focused campaigns on Meta Ads and Google Ads platforms with continuous optimization.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Engaging content creation and community management across all major platforms.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "On-page and off-page SEO strategies to improve organic visibility and rankings.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals and brand assets that communicate your message effectively.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites built with performance and user experience in mind.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    description: "Comprehensive analytics and actionable insights to drive continuous improvement.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            What I Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive skill set covering all aspects of digital marketing and brand growth.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover-lift cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
