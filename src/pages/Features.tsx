import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  TestTube,
  Brain,
  Shield,
  BarChart3,
  Code,
  Zap,
  Layers,
  Gauge,
  CheckCircle2,
  AlertTriangle,
  Eye,
  FileText,
  Sparkles,
  Cpu,
  Network,
} from 'lucide-react';

const Features: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mainFeatures = [
    {
      icon: <TestTube className="h-10 w-10" />,
      title: '10+ Built-in Evaluators',
      description: 'Comprehensive evaluation suite covering all aspects of LLM quality and safety.',
      features: [
        'G-Eval: LLM-based quality scoring with Chain-of-Thought',
        'DAG Metric: Rule-based deterministic evaluation',
        'Hallucination Detection: Risk assessment and groundedness',
        'Expected Outcome: Semantic and fuzzy matching',
        'PII Scanner: Personal information detection',
        'Toxicity Detection: Content safety screening',
        'Bias Detection: Fairness and equity analysis',
        'Token Usage: Efficiency and cost optimization',
        'Consistency: Response stability checks',
        'Schema Validation: Output format validation',
      ],
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: 'Multi-Provider LLM Support',
      description: 'Works with all major LLM providers via unified LiteLLM interface.',
      features: [
        'OpenAI (GPT-4, GPT-3.5, GPT-4o)',
        'Anthropic (Claude 3, Claude 2)',
        'Google (Gemini, Vertex AI)',
        'DeepSeek, Cohere, Mistral',
        'Groq, Together AI, HuggingFace',
        'Ollama, LM Studio (local models)',
        '100+ providers via LiteLLM',
        'Automatic fallback to LangChain',
        'Configurable per evaluator',
        'Environment variable support',
      ],
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Safety & Compliance',
      description: 'Enterprise-grade safety features for production deployments.',
      features: [
        'PII Detection & Masking',
        'Toxicity & Harmful Content Screening',
        'Bias & Fairness Analysis',
        'Privacy Compliance (GDPR, HIPAA)',
        'Content Moderation',
        'Audit Trails',
        'Risk Scoring',
        'Automated Alerts',
        'Compliance Reporting',
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: 'Rich Analytics & Reporting',
      description: 'Beautiful HTML and JSON reports with detailed insights.',
      features: [
        'Interactive HTML Reports',
        'Machine-readable JSON Reports',
        'Visual Charts & Graphs',
        'Evaluator Summary Statistics',
        'Performance Metrics',
        'Cost Analysis',
        'Trend Analysis',
        'Export Capabilities',
        'Real-time Monitoring',
        'Historical Comparisons',
      ],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Easy Integration',
      description: 'Multiple ways to integrate QuBit into your workflow.',
      features: [
        'Simple CLI Interface',
        'Python API',
        'REST API Endpoints',
        'Live Chat Monitoring',
        'Batch Testing',
        'CI/CD Integration',
        'External Agent Testing',
        'YAML Configuration',
        'Test Suite Management',
        'Automated Workflows',
      ],
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: 'Flexible Architecture',
      description: 'Test any LLM application, any way you need.',
      features: [
        'Chatbot Testing',
        'RAG System Validation',
        'Agent Workflow Testing',
        'Custom Application Testing',
        'Live Chat Evaluation',
        'Batch Processing',
        'Regression Testing',
        'Performance Testing',
        'A/B Testing Support',
        'Custom Evaluators',
      ],
    },
  ];

  const technicalFeatures = [
    {
      title: 'G-Eval with Rubrics',
      description: 'LLM-based evaluation with optional rubric support for deterministic scoring.',
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      title: 'DAG Decision Trees',
      description: 'Rule-based evaluation using directed acyclic graphs for transparent logic.',
      icon: <Network className="h-6 w-6" />,
    },
    {
      title: 'Vector Database Support',
      description: 'Works with ChromaDB, Pinecone, Qdrant, Weaviate, Milvus, and more.',
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: 'RAG Chain Integration',
      description: 'Built-in RAG validation and testing capabilities.',
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: 'Real-time Monitoring',
      description: 'Monitor live chat sessions with background evaluation.',
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: 'Test Suite Management',
      description: 'Organize tests with YAML-based test suites and registries.',
      icon: <FileText className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Features</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to test, evaluate, and monitor your LLM applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section ref={containerRef} className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                style={{ willChange: 'transform, opacity' }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center group`}
              >
                <div className="flex-1 relative">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl text-white mb-6 shadow-2xl relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                    <div className="relative z-10">{feature.icon}</div>
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-3xl p-8 shadow-2xl border border-gray-200 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-secondary-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                    <div className="relative aspect-video bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="text-center"
                      >
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl mb-4">
                          {feature.icon}
                        </div>
                        <p className="text-gray-700 font-semibold text-lg">
                          {feature.title}
                        </p>
                      </motion.div>
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        initial={{ x: '-100%' }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features for sophisticated testing scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                style={{ willChange: 'transform, opacity' }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
              >
                {/* Animated gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                    whileHover={shouldReduceMotion ? {} : { rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-600 mb-4 inline-block"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose QuBit?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Zap className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive
              </h3>
              <p className="text-gray-600">
                More evaluators, more providers, more capabilities than any other framework.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Gauge className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Production-Ready
              </h3>
              <p className="text-gray-600">
                Built for enterprise use with safety, compliance, and scalability in mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Code className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Developer-Friendly
              </h3>
              <p className="text-gray-600">
                Simple APIs, clear documentation, and excellent developer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

