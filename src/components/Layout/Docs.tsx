import { useTranslation } from 'react-i18next';

const DocsPage = () => {
    const { t } = useTranslation();

    return (
        <div className="flex-1 bg-black font-mono">
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-white mb-4">
                Documentation
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                Complete guide to using the 5 Whys AI-powered analysis tool
            </p>
            </div>

            <div className="space-y-12">
            {/* About Project */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">📋</span>
                About This Project
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-4">
                <p>
                    The <span className="text-green-400 font-mono">5 Whys AI Analyzer</span> is a modern web application that combines the classic Toyota-developed problem-solving methodology with artificial intelligence to help you identify root causes of problems more effectively.
                </p>
                <p>
                    This tool guides you through the systematic questioning process while providing AI-powered insights and follow-up questions to ensure you dig deep enough to find actionable solutions.
                </p>
                </div>
            </section>

            {/* Purpose */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">🎯</span>
                Purpose & Goals
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg text-white font-light mb-3">Primary Goals:</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Make root cause analysis accessible to everyone
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Provide AI-guided questioning for better insights
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Ensure privacy and data security
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Deliver actionable solutions, not just analysis
                    </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg text-white font-light mb-3">Use Cases:</h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Business process improvement
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Technical troubleshooting
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Personal problem solving
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        Team retrospectives and analysis
                    </li>
                    </ul>
                </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">⚡</span>
                Technology Stack
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <h3 className="text-white font-light mb-3 flex items-center gap-2">
                    <span className="text-blue-400">🚀</span>
                    Runtime & Build
                    </h3>
                    <ul className="text-gray-400 text-sm space-y-1 font-mono">
                    <li>• Bun (Runtime & Package Manager)</li>
                    <li>• Vite (Build Tool)</li>
                    <li>• TypeScript (Type Safety)</li>
                    </ul>
                </div>
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <h3 className="text-white font-light mb-3 flex items-center gap-2">
                    <span className="text-cyan-400">⚛️</span>
                    Frontend
                    </h3>
                    <ul className="text-gray-400 text-sm space-y-1 font-mono">
                    <li>• React 18</li>
                    <li>• React Router (HashRouter)</li>
                    <li>• React i18next (i18n)</li>
                    </ul>
                </div>
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <h3 className="text-white font-light mb-3 flex items-center gap-2">
                    <span className="text-purple-400">🎨</span>
                    Styling
                    </h3>
                    <ul className="text-gray-400 text-sm space-y-1 font-mono">
                    <li>• Tailwind CSS</li>
                    <li>• Custom Dark Theme</li>
                    <li>• Responsive Design</li>
                    </ul>
                </div>
                </div>
            </section>

            {/* AI Models */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">🤖</span>
                AI Integration
                </h2>
                <div className="space-y-6">
                <div>
                    <h3 className="text-lg text-white font-light mb-4">Currently Supported Models:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">🧠</div>
                        <h4 className="text-white font-mono">Claude</h4>
                        <p className="text-gray-400 text-xs mt-1">Anthropic's AI</p>
                    </div>
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">💎</div>
                        <h4 className="text-white font-mono">Gemini</h4>
                        <p className="text-gray-400 text-xs mt-1">Google's AI</p>
                    </div>
                    <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">🔥</div>
                        <h4 className="text-white font-mono">OpenAI</h4>
                        <p className="text-gray-400 text-xs mt-1">GPT Models</p>
                    </div>
                    </div>
                </div>
                <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-mono text-sm mb-2">🚧 TODO:</h4>
                    <p className="text-gray-400 text-sm">
                    Planning to add more AI models including local models, Mistral, and other providers to give users more choice and flexibility.
                    </p>
                </div>
                </div>
            </section>

            {/* Security & Privacy */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">🔒</span>
                Security & Privacy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg text-white font-light mb-3 flex items-center gap-2">
                    <span className="text-green-400">🛡️</span>
                    High Privacy Standards
                    </h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        No data storage on our servers
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Direct API calls to AI providers
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Client-side processing only
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        Your API keys stay in your browser
                    </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg text-white font-light mb-3 flex items-center gap-2">
                    <span className="text-blue-400">🔑</span>
                    API Key Management
                    </h3>
                    <ul className="text-gray-400 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Keys stored in localStorage only
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Never transmitted to our servers
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        You control your data completely
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        Clear keys anytime from settings
                    </li>
                    </ul>
                </div>
                </div>
            </section>

            {/* Best Practices */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">💡</span>
                Best Practices
                </h2>
                <div className="space-y-6">
                <div>
                    <h3 className="text-lg text-white font-light mb-4">For Effective Analysis:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                    <ul className="text-gray-400 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong className="text-white">Be specific</strong> with your initial problem statement</span>
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong className="text-white">Ask "why"</strong> based on facts, not assumptions</span>
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong className="text-white">Stop when</strong> you reach a root cause you can act upon</span>
                        </li>
                    </ul>
                    <ul className="text-gray-400 space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong className="text-white">Involve stakeholders</strong> who understand the problem</span>
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong className="text-white">Document everything</strong> for future reference</span>
                        </li>
                        <li className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span><strong className="text-white">Focus on systems</strong>, not individual blame</span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="bg-gray-900 border border-gray-700 rounded-xl p-8">
                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                <span className="text-green-400">🚀</span>
                Getting Started
                </h2>
                <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    1
                    </span>
                    <div>
                    <h4 className="text-white font-light mb-1">Set up your AI API key</h4>
                    <p className="text-gray-400 text-sm">Choose your preferred AI provider and add your API key in the settings.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    2
                    </span>
                    <div>
                    <h4 className="text-white font-light mb-1">Define your problem clearly</h4>
                    <p className="text-gray-400 text-sm">Start with a specific, observable problem statement.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    3
                    </span>
                    <div>
                    <h4 className="text-white font-light mb-1">Follow the AI guidance</h4>
                    <p className="text-gray-400 text-sm">Let the AI help you ask better questions and dig deeper.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    4
                    </span>
                    <div>
                    <h4 className="text-white font-light mb-1">Implement solutions</h4>
                    <p className="text-gray-400 text-sm">Use the insights to create actionable solutions that address the root cause.</p>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
};

export default DocsPage;