import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Card from '../ui/Card'
import Container from '../ui/Container'

const Testimonials = ({ 
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from our satisfied clients",
  testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "The Technology Fiction transformed our business with their Salesforce automation. Our sales process is now 40% more efficient!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "Their React development team delivered an exceptional website that perfectly represents our brand and drives conversions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, GrowthCo",
      content: "Professional, reliable, and results-driven. The Technology Fiction exceeded our expectations in every way.",
      rating: 5
    }
  ],
  className = ""
}) => {
  return (
    <section id="testimonials" className={`section-padding ${className}`}>
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full relative">
                <Quote className="w-8 h-8 text-primary-200 absolute top-4 right-4" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials 