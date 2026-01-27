import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Trinetra has been instrumental in helping us transition our fleet to electric. Their infrastructure solutions are reliable and scalable.",
    author: "Logistics Industry Leader",
    role: "Fleet Operator",
  },
  {
    quote: "The charging infrastructure deployed by Trinetra has significantly improved our operational efficiency. Their team understands the commercial EV ecosystem deeply.",
    author: "E-commerce Executive",
    role: "Supply Chain Manager",
  },
  {
    quote: "Working with Trinetra has been a game-changer for our sustainability goals. Their ESG-aligned approach aligns perfectly with our corporate values.",
    author: "Manufacturing Company",
    role: "Sustainability Head",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our partners say about working with Trinetra
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <Quote className="w-10 h-10 text-blue-400 mb-4 opacity-50" />
              <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
