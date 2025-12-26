import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, Check, Terminal, FileText, Zap } from 'lucide-react';

const Examples: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    {
      title: 'Basic Test Suite',
      description: 'Run a simple test suite with default evaluators',
      code: `# Run chatbot regression tests
python -m cli.aitest run --suite chatbot_regression

# Select evaluators interactively
python -m cli.aitest run --suite chatbot_regression
# Choose: Default Evaluators, G-Eval, DAG, or All`,
      language: 'bash',
    },
    {
      title: 'Test External Agent',
      description: 'Test an external agent with custom configuration',
      code: `# Test external agent
python -m cli.aitest run \\
  --suite chatbot_regression \\
  --external-agent simple_agent \\
  --env qa

# The agent will be tested against all test cases`,
      language: 'bash',
    },
    {
      title: 'Python API Usage',
      description: 'Use QuBit programmatically in Python',
      code: `from app.testing.runner import TestRunner
from app.testing.test_spec import TestConfig
import yaml

# Load external agent config
with open('config/external_agents.yaml') as f:
    agents_config = yaml.safe_load(f)
agent_config = agents_config['external_agents']['simple_agent']

# Create runner
runner = TestRunner(external_agent_config=agent_config)

# Load and run tests
runner.load_tests_from_file('tests/suites/chatbot_regression_tests.yaml')
config = TestConfig(environment='qa')
results = runner.run_suite('chatbot_regression', config)

# Generate reports
html_report = runner.report_generator.generate_report(
    results['scorecard'],
    results['results'],
    format='html'
)
print(f"Report: {html_report}")`,
      language: 'python',
    },
    {
      title: 'YAML Test Suite',
      description: 'Define test cases in YAML format',
      code: `suite_id: chatbot_regression
name: Chatbot Regression Tests
description: Comprehensive regression tests for chatbot

test_cases:
  - test_id: chatbot_basic_001
    title: Basic Greeting Test
    description: Test basic greeting functionality
    priority: P0
    input:
      prompt: "Hello"
    expected:
      answer_contains: ["hello", "hi", "greeting"]
      match_mode: contains
    evaluation_rules:
      hallucination_detector:
        threshold: 0.5
        required: true
      expected_outcome:
        required: true
        threshold: 0.7`,
      language: 'yaml',
    },
    {
      title: 'Live Chat Monitoring',
      description: 'Monitor and evaluate live chat sessions',
      code: `# Generate report for conversation
curl http://localhost:8001/api/monitoring/report?conversation_id=xxx

# Get metrics
curl http://localhost:8001/api/monitoring/metrics?conversation_id=xxx

# Python code
from monitor import get_monitor

monitor = get_monitor()
report_paths = monitor.generate_conversation_report('conversation-id')
print(f"HTML: {report_paths['html_report_path']}")`,
      language: 'bash',
    },
    {
      title: 'G-Eval with Rubrics',
      description: 'Use G-Eval with custom rubrics for deterministic scoring',
      code: `test_cases:
  - test_id: quality_test_001
    expected:
      geval_rubrics:
        - score_range: [0, 2]
          expected_outcome: "Factually incorrect or irrelevant"
        - score_range: [3, 5]
          expected_outcome: "Partially correct but incomplete"
        - score_range: [6, 8]
          expected_outcome: "Mostly correct with minor issues"
        - score_range: [9, 10]
          expected_outcome: "Completely correct and comprehensive"`,
      language: 'yaml',
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
            <Code className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Examples</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real-world examples and code snippets to get you started
            </p>
          </motion.div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {example.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{example.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {example.language === 'bash' && (
                        <Terminal className="h-5 w-5 text-gray-400" />
                      )}
                      {example.language === 'python' && (
                        <Code className="h-5 w-5 text-gray-400" />
                      )}
                      {example.language === 'yaml' && (
                        <FileText className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm font-mono">
                    <code>{example.code}</code>
                  </pre>
                  <button
                    onClick={() => copyToClipboard(example.code, index)}
                    className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition-colors"
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600">
              Check out our documentation and resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/documentation"
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-gray-200 hover:border-primary-500 transition-all card-hover"
            >
              <FileText className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Full Documentation
              </h3>
              <p className="text-gray-600">
                Complete API reference and guides
              </p>
            </a>

            <a
              href="/getting-started"
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-gray-200 hover:border-primary-500 transition-all card-hover"
            >
              <Zap className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Start Guide
              </h3>
              <p className="text-gray-600">
                Get up and running in minutes
              </p>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl border border-gray-200 hover:border-primary-500 transition-all card-hover"
            >
              <Code className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                GitHub Repository
              </h3>
              <p className="text-gray-600">
                View source code and contribute
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;

