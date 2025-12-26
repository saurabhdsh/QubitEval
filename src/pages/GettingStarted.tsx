import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Settings,
  Play,
  CheckCircle,
  ArrowRight,
  Terminal,
  Code,
  FileText,
  Zap,
} from 'lucide-react';

const GettingStarted: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Installation',
      icon: <Download className="h-6 w-6" />,
      description: 'Install QuBit using pip',
      code: `pip install qubit-backend`,
      details: [
        'Python 3.8+ required',
        'Automatically installs all dependencies',
        'Includes CLI and Python API',
      ],
    },
    {
      number: 2,
      title: 'Configuration',
      icon: <Settings className="h-6 w-6" />,
      description: 'Set up your API keys and configuration',
      code: `export OPENAI_API_KEY="your-key-here"
# Or configure in evaluation_models.yaml`,
      details: [
        'Set environment variables for LLM providers',
        'Configure evaluator models in YAML',
        'Optional: Set up vector databases',
      ],
    },
    {
      number: 3,
      title: 'Create Test Suite',
      icon: <FileText className="h-6 w-6" />,
      description: 'Define your test cases in YAML',
      code: `suite_id: my_tests
name: My Test Suite
test_cases:
  - test_id: test_001
    title: Basic Test
    input:
      prompt: "Hello"
    expected:
      answer_contains: ["hello", "hi"]`,
      details: [
        'Use YAML format for test definitions',
        'Define inputs and expected outputs',
        'Configure evaluation rules',
      ],
    },
    {
      number: 4,
      title: 'Run Tests',
      icon: <Play className="h-6 w-6" />,
      description: 'Execute your test suite',
      code: `python -m cli.aitest run --suite my_tests`,
      details: [
        'Use interactive CLI for easy testing',
        'Select evaluators interactively',
        'View results in real-time',
      ],
    },
    {
      number: 5,
      title: 'View Reports',
      icon: <CheckCircle className="h-6 w-6" />,
      description: 'Analyze results with HTML reports',
      code: `# Reports automatically generated
open test_reports/test_report_*.html`,
      details: [
        'HTML reports with visualizations',
        'JSON reports for automation',
        'Detailed evaluator metrics',
      ],
    },
  ];

  const quickStartCode = `# 1. Install
pip install qubit-backend

# 2. Set API key
export OPENAI_API_KEY="your-key"

# 3. Run a test
python -m cli.aitest run --suite chatbot_regression

# 4. View report
open test_reports/test_report_*.html`;

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
            <Zap className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Getting Started</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get up and running with QuBit in just a few minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-gray-600">
              Get started in 4 simple commands
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400 text-sm">Terminal</span>
              </div>
            </div>
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
              <code>{quickStartCode}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Step-by-Step Guide
            </h2>
            <p className="text-xl text-gray-600">
              Follow these steps to set up QuBit
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="text-primary-600">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start space-x-2 text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gray-900 rounded-lg p-4 shadow-xl">
                    <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's Next?
            </h2>
            <p className="text-xl text-gray-600">
              Continue your QuBit journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/documentation"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-primary-500 transition-all card-hover group"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Read Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about all features and capabilities
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                <span>Explore docs</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </a>

            <a
              href="/examples"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-primary-500 transition-all card-hover group"
            >
              <Code className="h-8 w-8 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                View Examples
              </h3>
              <p className="text-gray-600 mb-4">
                See real-world code examples and use cases
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                <span>See examples</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </a>

            <a
              href="/features"
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-primary-500 transition-all card-hover group"
            >
              <Zap className="h-8 w-8 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Explore Features
              </h3>
              <p className="text-gray-600 mb-4">
                Discover all the powerful features QuBit offers
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                <span>View features</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;

