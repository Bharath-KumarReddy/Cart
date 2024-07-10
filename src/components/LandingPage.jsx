import React, { useContext } from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import { ShoppingCartOutlined, SafetyCertificateOutlined, HomeOutlined, CoffeeOutlined } from '@ant-design/icons';
import { ThemeStore } from '../context/ThemeContext';

const { Title, Paragraph } = Typography;

const products = [
  {
    title: 'Groceries',
    description: 'Fresh and high-quality groceries for your daily needs.',
    icon: <ShoppingCartOutlined />,
    bgColor: '#bef264',
    textColor: '#333',
  },
  {
    title: 'Beauty Products',
    description: 'Top-notch beauty products to enhance your look.',
    icon: <SafetyCertificateOutlined />,
    bgColor: '#e7e5e4',
    textColor: '#14b8a6',
  },
  {
    title: 'Furniture',
    description: 'Stylish and comfortable furniture for your home.',
    icon: <HomeOutlined />,
    bgColor: '#fcd34d',
    textColor: '#1890ff',
  },
];

const LandingPage = () => {
  let navigate = useNavigate();
  let { theme } = useContext(ThemeStore);

  const handleclick = () => {
    navigate('/home');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-gray-100 text-black'} flex flex-col`}>
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center h-[400px] bg-cover bg-center"
        style={{ backgroundColor: theme === 'dark' ? '#1a202c' : '#008080' }} // Example dark and light background colors
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title level={1} className="text-4xl font-bold mb-4 text-center">
         <span className={theme == 'dark' ? 'text-white' : ""}>Welcome To </span><span className="text-teal-300">YOCart</span>
        </Title>
        <Paragraph className={theme == 'dark' ? 'text-xl mb-8 text-center text-white' : 'text-xl mb-8 text-center'}>
          Your one-stop shop for all your needs!
        </Paragraph>
        <Button type="primary" size="large" className={`bg-${theme === 'dark' ? 'teal-700' : 'teal-600'} hover:bg-${theme === 'dark' ? 'teal-800' : 'teal-700'}`} onClick={handleclick}>
          Start Shopping
        </Button>
      </motion.div>

      {/* Product Categories */}
      <motion.div
        className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title level={2} className="text-center text-3xl font-bold mb-12">
        <span className={theme == 'dark' ? "text-white" : ""}>Explore Our Categories</span>
        </Title>
        <Row gutter={16} justify="center">
          {products.map((product, index) => (
            <Col span={8} key={index}>
              <motion.div
                className="p-6 bg-white shadow-lg rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
              >
                <div
                  className="text-4xl mb-4"
                  style={{ color: product.textColor, backgroundColor: product.bgColor, padding: '1rem', borderRadius: '50%' }}
                >
                  {product.icon}
                </div>
                <Title level={4} className="text-lg font-semibold mb-2">
                  {product.title}
                </Title>
                <Paragraph>{product.description}</Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className={`py-16 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title level={2} className="text-center text-3xl font-bold mb-12">
        <span className={theme == 'dark' ? "text-white" : ""}>Explore Our Categories</span>
        </Title>
        <Row gutter={16} justify="center">
          <Col span={8}>
            <Card
              title="Quality Products"
              bordered={false}
              className="text-center shadow-lg"
              extra={<ShoppingCartOutlined className={`text-${theme === 'dark' ? 'teal-700' : 'teal-500'} text-4xl`} />}
            >
              <Paragraph>
                We offer a wide range of high-quality products to meet all your needs.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Great Prices"
              bordered={false}
              className="text-center shadow-lg"
              extra={<CoffeeOutlined className={`text-${theme === 'dark' ? 'teal-700' : 'teal-500'} text-4xl`} />}
            >
              <Paragraph>
                Get the best value for your money with our competitive prices.
              </Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Excellent Service"
              bordered={false}
              className="text-center shadow-lg"
              extra={<HomeOutlined className={`text-${theme === 'dark' ? 'teal-700' : 'teal-500'} text-4xl`} />}
            >
              <Paragraph>
                Our dedicated team is here to help you with top-notch customer service.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </motion.div>

      {/* Footer */}
      <motion.div
        className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-900'} text-white py-6 text-center`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <Paragraph> <span className={theme == 'dark' ? "text-white" : "text-white"}>&copy; 2024 YOCart. All rights reserved.</span></Paragraph>
      </motion.div>
    </div>
  );
};

export default LandingPage;
