import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  Zap,
  Shield,
  BarChart3,
  Code,
  TestTube,
  Brain,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Gauge,
  ArrowDown,
  TrendingUp,
  Activity,
  X,
} from 'lucide-react';

const Home: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Simplified parallax - only if motion is not reduced
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Much gentler parallax with better performance
  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 50]
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0.7]
  );

  const features = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: 'Comprehensive Testing',
      description: 'Test your LLM applications with 10+ built-in evaluators including G-Eval, DAG, Hallucination Detection, and more.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Multi-Provider Support',
      description: 'Works with all major LLM providers via LiteLLM - OpenAI, Anthropic, Gemini, DeepSeek, and 100+ more.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety & Compliance',
      description: 'Built-in PII detection, toxicity screening, bias detection, and comprehensive safety requirements.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Rich Analytics',
      description: 'Beautiful HTML and JSON reports with detailed metrics, visualizations, and actionable insights.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Easy Integration',
      description: 'Simple CLI, Python API, and REST endpoints. Test external agents, live chat, or batch processes.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Flexible Architecture',
      description: 'Test any LLM application - chatbots, RAG systems, agents, workflows, and custom applications.',
      color: 'from-teal-500 to-blue-500',
    },
  ];

  const capabilities = [
    'Hallucination Detection',
    'G-Eval Quality Scoring',
    'DAG Rule-Based Evaluation',
    'Expected Outcome Matching',
    'PII & Privacy Scanning',
    'Toxicity Detection',
    'Bias & Fairness Analysis',
    'Token Usage Optimization',
    'Performance Monitoring',
    'Live Chat Evaluation',
    'RAG Validation',
  ];

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Dynamic Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative h-screen overflow-hidden gradient-bg text-white flex items-center justify-center"
      >
        {/* Optimized Background Particles - Reduced for performance */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.slice(0, 10).map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 bg-white/10 rounded-full"
                style={{ willChange: 'transform, opacity' }}
                initial={{
                  x: `${particle.x}%`,
                  y: `${particle.y}%`,
                  opacity: 0,
                }}
                animate={{
                  y: [`${particle.y}%`, `${particle.y - 15}%`, `${particle.y}%`],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: particle.duration * 1.5,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )}

        {/* Optimized Gradient Orbs - Slower, smoother */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl pointer-events-none"
              style={{ willChange: 'transform' }}
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl pointer-events-none"
              style={{ willChange: 'transform' }}
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        )}

        {/* Hero Content with Optimized Parallax */}
        <motion.div
          style={{ 
            y: heroY, 
            opacity: heroOpacity,
            willChange: 'transform, opacity'
          }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30"
            >
              <Zap className="h-16 w-16 text-yellow-300" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
          >
            Test Your AI with
            <br />
            <motion.span
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Confidence
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            QuBit is the most comprehensive testing framework for LLM applications.
            <br />
            Evaluate quality, safety, and performance with enterprise-grade tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/getting-started"
                className="group relative bg-white text-primary-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl flex items-center space-x-3 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-10"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/documentation"
                className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all shadow-xl"
              >
                View Documentation
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-white/70"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with Scroll Animations */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-4 rounded-2xl">
                <Activity className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to Test AI
            </h2>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              A complete testing framework designed for modern LLM applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                style={{ willChange: 'transform, opacity' }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 shadow-lg`}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    initial={{ x: '-100%' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section with Staggered Animations */}
      <section className="py-32 bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Evaluation
            </h2>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              Test every aspect of your LLM application
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.03,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                style={{ willChange: 'transform, opacity' }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 hover:border-primary-300 transition-all duration-300 flex items-center space-x-4 h-full">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <CheckCircle className="h-6 w-6 text-primary-600" />
                  </motion.div>
                  <span className="text-gray-700 font-semibold group-hover:text-primary-600 transition-colors">
                    {capability}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why QuBit Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-4 rounded-2xl">
                <Zap className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why QuBit?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              The most comprehensive and developer-friendly AI testing framework
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 text-lg font-bold text-gray-900">Feature</th>
                      <th className="text-center py-4 px-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, type: 'spring' }}
                          className="inline-flex items-center space-x-2 bg-gradient-to-br from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-xl font-bold"
                        >
                          <Zap className="h-5 w-5" />
                          <span>QuBit</span>
                        </motion.div>
                      </th>
                      <th className="text-center py-4 px-6 text-gray-600 font-semibold">DeepEval</th>
                      <th className="text-center py-4 px-6 text-gray-600 font-semibold">LangSmith</th>
                      <th className="text-center py-4 px-6 text-gray-600 font-semibold">TruLens</th>
                      <th className="text-center py-4 px-6 text-gray-600 font-semibold">RAGAS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Plug & Play Model', qubit: true, deepeval: false, langsmith: false, trulens: false, ragas: false },
                      { feature: 'No Python Scripts Required', qubit: true, deepeval: false, langsmith: false, trulens: false, ragas: false },
                      { feature: 'External Agent Integration', qubit: true, deepeval: false, langsmith: false, trulens: false, ragas: false },
                      { feature: 'Existing Agents Run As-Is', qubit: true, deepeval: false, langsmith: false, trulens: false, ragas: false },
                      { feature: 'Automatic Metrics Capture', qubit: true, deepeval: true, langsmith: true, trulens: true, ragas: true },
                      { feature: '10+ Built-in Evaluators', qubit: true, deepeval: true, langsmith: true, trulens: true, ragas: false },
                      { feature: 'G-Eval with Rubrics', qubit: true, deepeval: true, langsmith: false, trulens: false, ragas: false },
                      { feature: 'DAG Rule-Based Evaluation', qubit: true, deepeval: true, langsmith: false, trulens: false, ragas: false },
                      { feature: 'Multi-Provider LLM Support', qubit: true, deepeval: true, langsmith: true, trulens: true, ragas: false },
                      { feature: 'Live Chat Monitoring', qubit: true, deepeval: false, langsmith: true, trulens: false, ragas: false },
                      { feature: 'HTML & JSON Reports', qubit: true, deepeval: true, langsmith: true, trulens: true, ragas: true },
                      { feature: 'YAML Test Configuration', qubit: true, deepeval: false, langsmith: false, trulens: false, ragas: false },
                      { feature: 'Rules-Based Algorithm with Auto-Detection', qubit: true, deepeval: false, langsmith: false, trulens: false, ragas: false },
                      { feature: 'RAG Chain Integration', qubit: true, deepeval: false, langsmith: true, trulens: true, ragas: true },
                      { feature: 'Interactive CLI', qubit: true, deepeval: false, langsmith: false, trulens: false, ragas: false },
                    ].map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                        <td className="py-4 px-6 text-center">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + 0.2, type: 'spring' }}
                            className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full"
                          >
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          </motion.div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row.deepeval ? (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.3, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full"
                            >
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </motion.div>
                          ) : (
                            <motion.div
                              initial={{ scale: 0, rotate: 180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.3, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full"
                            >
                              <X className="h-6 w-6 text-red-600" />
                            </motion.div>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row.langsmith ? (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.4, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full"
                            >
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </motion.div>
                          ) : (
                            <motion.div
                              initial={{ scale: 0, rotate: 180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.4, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full"
                            >
                              <X className="h-6 w-6 text-red-600" />
                            </motion.div>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row.trulens ? (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.5, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full"
                            >
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </motion.div>
                          ) : (
                            <motion.div
                              initial={{ scale: 0, rotate: 180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.5, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full"
                            >
                              <X className="h-6 w-6 text-red-600" />
                            </motion.div>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {row.ragas ? (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.6, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full"
                            >
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </motion.div>
                          ) : (
                            <motion.div
                              initial={{ scale: 0, rotate: 180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05 + 0.6, type: 'spring' }}
                              className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full"
                            >
                              <X className="h-6 w-6 text-red-600" />
                            </motion.div>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Unique Features with Fluidic Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Layers className="h-8 w-8" />,
                title: 'Plug & Play Model',
                description: 'No need to write any Python scripts. Simply configure your tests in YAML and QuBit handles everything. Your existing agents run as-is while QuBit captures all metrics automatically.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: 'External Agent Integration',
                description: 'Integrate any external written agent as a path. QuBit automatically invokes your agent, captures all interactions, and evaluates performance without modifying your code.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: <Activity className="h-8 w-8" />,
                title: 'Zero Code Changes',
                description: 'Your existing agents continue to run exactly as they are. QuBit works alongside them, capturing metrics, evaluating responses, and generating reports without any code modifications.',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: 'Automatic Metrics Capture',
                description: 'QuBit automatically captures all metrics when invoking your agent - latency, token usage, costs, quality scores, and more. No instrumentation needed.',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Comprehensive Evaluation',
                description: 'Built-in evaluators for hallucination, PII, toxicity, bias, expected outcomes, G-Eval, DAG metrics, and more. All running automatically in the background.',
                color: 'from-indigo-500 to-purple-500',
              },
              {
                icon: <Gauge className="h-8 w-8" />,
                title: 'Live Monitoring',
                description: 'Monitor live chat sessions in real-time. QuBit evaluates every message-response pair automatically, generating reports on-demand without disrupting your workflow.',
                color: 'from-teal-500 to-blue-500',
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: 'Rules-Based Algorithm with Auto-Detection',
                description: 'Define your own custom rules and evaluation criteria. QuBit automatically detects what your agent is designed for, identifies its tasks, and applies intelligent evaluation based on your rules without manual configuration.',
                color: 'from-violet-500 to-purple-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                style={{ willChange: 'transform, opacity' }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 shadow-lg`}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Dynamic Effects */}
      <section className="py-32 gradient-bg text-white relative overflow-hidden">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.5) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-8"
            >
              <div className="bg-white/20 backdrop-blur-xl rounded-full p-6 border border-white/30">
                <TrendingUp className="h-12 w-12 text-yellow-300" />
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Test Your AI?
            </h2>
            <p className="text-2xl text-gray-200 mb-12">
              Get started with QuBit in minutes. No credit card required.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/getting-started"
                className="inline-flex items-center space-x-3 bg-white text-primary-700 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl"
              >
                <span>Start Testing Now</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
