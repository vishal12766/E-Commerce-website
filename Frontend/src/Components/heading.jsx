import { motion } from "framer-motion";

const Heading = ({ head1, head2, color = "text-[#541F03]" }) => {
  return (
    <div className="flex flex-col text-center">
      <span className={`${color} font-[recoleta] text-[24px]`}>{head1}</span>

      <div className="overflow-hidden">
        <motion.h2
          className={`${color} font-[recoleta] text-[76px] font-bold`}
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.23, 0.1, 0.25, 1],
          }}
        >
          {head2}
        </motion.h2>
      </div>
    </div>
  );
};
export default Heading;
