import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Container from '../ui/Container'

const About = ({ 
  title = "About The Technology Fiction",
  subtitle = "We are passionate about leveraging technology to solve complex business challenges",
  description = "With years of experience in Salesforce and React development, we help businesses streamline their operations, improve customer relationships, and build powerful digital experiences.",
  stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ],
  features = [
    "Expert Salesforce Consultants",
    "Custom Development Solutions",
    "Proven Implementation Process",
    "Ongoing Support & Maintenance"
  ],
  logo = { text: "The Technology Fiction", logo: "tech_fi_logo_512x512_image.jpeg" },
  className = ""
}) => {
  return (
    <section id="about" className={`section-padding bg-gray-50 ${className}`}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                  <img 
                    src={logo.logo} 
                    alt={`${logo.text} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  Why Choose Us?
                </h3>
                <p className="text-gray-100 mb-6 leading-relaxed">
                  We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but also drive real business value.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <div className="text-sm text-gray-200">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">Fast</div>
                    <div className="text-sm text-gray-200">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-400/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default About 