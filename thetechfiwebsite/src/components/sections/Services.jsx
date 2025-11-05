import { motion } from 'framer-motion'
import { Zap, Globe, Users } from 'lucide-react'
import Card from '../ui/Card'
import Container from '../ui/Container'

const Services = ({ 
  title = "Our Services",
  subtitle = "Comprehensive solutions to drive your business forward",
  services = [
    {
      icon: Zap,
      title: "Salesforce Automation",
      description: "Streamline your business processes with custom Salesforce automation solutions that boost productivity and efficiency.",
      features: ["Workflow Automation", "Process Builder", "Flow Designer", "Apex Development"]
    },
    {
      icon: Globe,
      title: "Salesforce Implementation",
      description: "Complete Salesforce implementation from setup to go-live with expert consultation and training.",
      features: ["System Design", "Data Migration", "User Training", "Go-live Support"]
    },
    {
      icon: Users,
      title: "React Development",
      description: "Modern, responsive websites and web applications built with React for optimal performance and user experience.",
      features: ["Custom Components", "Responsive Design", "Performance Optimization", "SEO Friendly"]
    }
  ],
  className = ""
}) => {
  return (
    <section id="services" className={`section-padding ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services 