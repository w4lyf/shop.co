import HomeLayout from "../components/Layouts/HomeLayout";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomeLayout />
    </motion.div>
  );
};

export default Homepage;
