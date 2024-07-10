import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeStore } from '../context/ThemeContext';
import bharathImg from './bharath_img.jpeg'; // Import your image here

const About = () => {
  const { theme } = useContext(ThemeStore);

  return (
    <div className={`flex flex-col items-center p-12 min-h-screen ${theme === 'dark' ? 'bg-slate-800' : 'bg-gray-100'}`}>
      <motion.div
        className={`max-w-3xl text-center ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white shadow-lg text-gray-800'} shadow-lg rounded-lg p-8`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          Welcome to Our E-Commerce Store!
        </motion.h1>

        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          At <span className="font-semibold text-teal-400">YOCart</span>, we offer a wide range of products to meet all your needs. Whether you're looking for fresh groceries, stylish furniture, or top-notch beauty products, we have something for everyone.
        </motion.p>

        <motion.div
          className="text-left mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Explore Our Categories:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>🛒 <span className="font-medium">Groceries</span></li>
            <li>🛋️ <span className="font-medium">Furniture</span></li>
            <li>💄 <span className="font-medium">Beauty Products</span></li>
          </ul>
        </motion.div>

        <motion.div
          className="text-gray-400 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p>Thank you for choosing us. Happy shopping!</p>
        </motion.div>

        {/* Add the image here */}
        <motion.img
          src={bharathImg}
          alt="Bharath Kumar Reddy"
          className="w-40 h-40 rounded-full mb-6 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        {/* Add GitHub link here */}
        <motion.a
          href="https://github.com/Bharath-KumarReddy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:text-teal-600 text-lg font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Visit My GitHub Profile
        </motion.a>

        {/* <motion.button
          className="mt-6 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.1, backgroundColor: '#2d9a76' }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button> */}
      </motion.div>
    </div>
  );
};

export default About;
