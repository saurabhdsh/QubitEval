import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Book,
  Code,
  Settings,
  TestTube,
  BarChart3,
  Zap,
  ChevronRight,
  FileText,
  Terminal,
  Database,
  Shield,
} from 'lucide-react';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Quick Start</h3>
          <p className="text-gray-600">
            Get up and running with QuBit in minutes.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
            <div># Install QuBit</div>
            <div>pip install qubit-backend</div>
            <div className="mt-2"># Run your first test</div>
            <div>python -m cli.aitest run --suite chatbot_regression</div>
          </div>
        </div>
      ),
    },
    {
      id: 'evaluators',
      title: 'Evaluators',
      icon: <TestTube className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Built-in Evaluators</h3>
          <p className="text-gray-600">
            QuBit includes 10+ evaluators for comprehensive testing.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>G-Eval:</strong> LLM-based quality scoring with Chain-of-Thought</li>
            <li><strong>DAG Metric:</strong> Rule-based deterministic evaluation</li>
            <li><strong>Hallucination Detector:</strong> Risk assessment and groundedness</li>
            <li><strong>Expected Outcome:</strong> Semantic and fuzzy matching</li>
            <li><strong>PII Scanner:</strong> Personal information detection</li>
            <li><strong>Toxicity Detection:</strong> Content safety screening</li>
            <li><strong>Bias Detection:</strong> Fairness and equity analysis</li>
            <li><strong>Token Usage:</strong> Efficiency and cost optimization</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'cli',
      title: 'CLI Usage',
      icon: <Terminal className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Command Line Interface</h3>
          <p className="text-gray-600">
            Use the interactive CLI for testing your agents.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
            <div># Interactive CLI</div>
            <div>python -m cli.aitest</div>
            <div className="mt-2"># Run specific suite</div>
            <div>python -m cli.aitest run --suite chatbot_regression</div>
            <div className="mt-2"># Test external agent</div>
            <div>python -m cli.aitest run --suite chatbot_regression --external-agent simple_agent</div>
          </div>
        </div>
      ),
    },
    {
      id: 'configuration',
      title: 'Configuration',
      icon: <Settings className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Configuration Files</h3>
          <p className="text-gray-600">
            Configure evaluators, LLM providers, and test rules via YAML.
          </p>
          <div className="space-y-2">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">evaluation_models.yaml</p>
              <p className="text-sm text-gray-600">Configure LLM models for each evaluator</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">testing_rules.yaml</p>
              <p className="text-sm text-gray-600">Define evaluation rules and thresholds</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold mb-2">external_agents.yaml</p>
              <p className="text-sm text-gray-600">Configure external agents for testing</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: <BarChart3 className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">HTML & JSON Reports</h3>
          <p className="text-gray-600">
            Generate beautiful reports with detailed metrics and insights.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
            <div># Reports are automatically generated</div>
            <div># HTML: test_reports/test_report_*.html</div>
            <div># JSON: test_reports/test_report_*.json</div>
          </div>
        </div>
      ),
    },
    {
      id: 'api',
      title: 'Python API',
      icon: <Code className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Python API</h3>
          <p className="text-gray-600">
            Integrate QuBit into your Python applications.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <div>from app.testing.runner import TestRunner</div>
            <div>from app.testing.test_spec import TestConfig</div>
            <div className="mt-2">runner = TestRunner()</div>
            <div>runner.load_tests_from_file('tests/suites/chatbot_regression_tests.yaml')</div>
            <div className="mt-2">config = TestConfig(environment='qa')</div>
            <div>results = runner.run_suite('chatbot_regression', config)</div>
          </div>
        </div>
      ),
    },
    {
      id: 'monitoring',
      title: 'Live Monitoring',
      icon: <Shield className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Live Chat Monitoring</h3>
          <p className="text-gray-600">
            Monitor and evaluate live chat sessions in real-time.
          </p>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
            <div># Generate report for conversation</div>
            <div>GET /api/monitoring/report?conversation_id=xxx</div>
            <div className="mt-2"># Get metrics</div>
            <div>GET /api/monitoring/metrics?conversation_id=xxx</div>
          </div>
        </div>
      ),
    },
  ];

  const quickLinks = [
    { title: 'Installation Guide', href: '#', icon: <Zap /> },
    { title: 'API Reference', href: '#', icon: <Code /> },
    { title: 'Test Suites', href: '#', icon: <FileText /> },
    { title: 'Configuration', href: '#', icon: <Settings /> },
    { title: 'Vector Databases', href: '#', icon: <Database /> },
    { title: 'Best Practices', href: '#', icon: <Book /> },
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
            <Book className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Complete guide to using QuBit for testing your LLM applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all group"
              >
                <div className="text-primary-600 mb-2 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveSection(activeSection === section.id ? null : section.id)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary-600">{section.icon}</div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {activeSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 border-t border-gray-200"
                  >
                    {section.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;

