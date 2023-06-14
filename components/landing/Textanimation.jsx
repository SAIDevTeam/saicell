import { motion } from "framer-motion";

const TextAnimation = ({text1 ,textcolor ,textsize}) => {
  const text = `${text1}`;
  return (
    <motion.div className="text-2xl">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className={`${textcolor} ${textsize}`}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
export default TextAnimation;