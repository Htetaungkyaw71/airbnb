import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Homecards from "../components/home/Homecards";
import MobileStickyFooter from "../components/home/MobileStickyFooter";
import Modal from "../components/Modal";
import { motion } from "framer-motion";
import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
  const { showloginModal, showregisterModal } = useSelector(
    (state) => state.modalSlice,
  );
  return (
    <>
      <Navbar />
      <Homecards />
      <MobileStickyFooter />

      {showloginModal && (
        <Modal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Login />
          </motion.div>
        </Modal>
      )}
      {showregisterModal && (
        <Modal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Register />
          </motion.div>
        </Modal>
      )}
    </>
  );
};

export default Home;
