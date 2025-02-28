import Form from "./form";
import Image from "next/image";
import { Map } from "lucide-react";
import { motion } from "framer-motion";

export const NewForm = () => {
    return (
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-[#87BD2B]/20 z-0"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.div
            className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-[#004D2C]/10 z-0"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />

          <motion.div
            className="relative h-full min-h-[500px] overflow-hidden rounded-2xl shadow-xl z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#004D2C]/40 to-transparent z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <Image
              src="/img5.png"
              alt="Professional HVAC services"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />

            <motion.div
              className="absolute bottom-6 left-6 z-20 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-white font-bold text-xl mb-2">
                Expert Solutions
              </h3>
              <p className="text-white/90 text-sm">
                Delivering precision engineering for your facility needs
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content Section - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Form />
        </motion.div>
      </div>
    );
}