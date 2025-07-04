import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleStartJourney = () => {
        navigate('/analyzer');
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex-1 bg-black font-mono">
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center transition-all duration-1000 opacity-100 translate-y-0">
            {/* Hero Section */}
            <div className="mb-16">
                <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                <span className="text-green-400">5 Whys</span>{' '}
                {t('landing.title').replace('5 Whys ', '')}
                </h1>
                <p className="text-xl text-gray-400 font-light mb-8 max-w-3xl mx-auto">
                A problem-solving technique used to identify the root cause of a
                problem by repeatedly asking "Why?". It involves drilling down
                from the initial problem statement through a series of "Why"
                questions until the core issue is revealed.
                </p>
            </div>

            {/* How it Works */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 mb-16 text-left">
                <h2 className="text-2xl font-light text-white mb-6 text-center">
                How it Works
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                        <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        1
                        </span>
                        <div>
                        <h4 className="text-white font-light mb-1">
                            State the Problem
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Clearly define the issue you're addressing.
                        </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        2
                        </span>
                        <div>
                        <h4 className="text-white font-light mb-1">Ask "Why?"</h4>
                        <p className="text-gray-400 text-sm">
                            For the first "Why," ask why the problem is happening.
                        </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        3
                        </span>
                        <div>
                        <h4 className="text-white font-light mb-1">
                            Repeat and Dig Deeper
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Use the previous answer as the basis for the next
                            question.
                        </p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-green-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        4
                        </span>
                        <div>
                        <h4 className="text-white font-light mb-1">
                            Continue until Root Cause is Found
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Keep asking "Why?" until you reach a point where the
                            answer reveals a root cause that you can address.
                        </p>
                        </div>
                    </li>
                    </ol>
                </div>
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-6">
                    <h4 className="text-white font-light mb-4 text-center">
                    Example Analysis
                    </h4>
                    <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">Problem:</span>
                        <span className="text-gray-300">
                        The machine stopped working.
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-400 font-bold">Why 1:</span>
                        <span className="text-gray-300">The motor overheated.</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-400 font-bold">Why 2:</span>
                        <span className="text-gray-300">
                        The lubrication pump was not pumping sufficiently.
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-400 font-bold">Why 3:</span>
                        <span className="text-gray-300">
                        The pump filter was clogged.
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-400 font-bold">Why 4:</span>
                        <span className="text-gray-300">
                        The filter was not changed regularly.
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-400 font-bold">Why 5:</span>
                        <span className="text-gray-300">
                        There was no established maintenance schedule.
                        </span>
                    </div>
                    <div className="mt-4 p-3 bg-green-400/10 border border-green-400/30 rounded">
                        <span className="text-green-400 font-bold text-xs">
                        ROOT CAUSE:
                        </span>
                        <span className="text-green-300 text-xs ml-2">
                        Lack of maintenance scheduling system
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Key Aspects */}
            <div className="mb-16">
                <h2 className="text-2xl font-light mb-8 text-white">
                Key Aspects of 5 Whys
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors">
                    <div className="text-2xl mb-3">🎯</div>
                    <h4 className="font-light mb-2 text-white">
                    Root Cause Analysis
                    </h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                    The goal is to identify the fundamental reason behind the
                    problem, not just the immediate cause.
                    </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors">
                    <div className="text-2xl mb-3">🔄</div>
                    <h4 className="font-light mb-2 text-white">
                    Iterative Process
                    </h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                    The repeated questioning is key to uncovering the chain of
                    events or conditions that led to the problem.
                    </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors">
                    <div className="text-2xl mb-3">💡</div>
                    <h4 className="font-light mb-2 text-white">
                    Actionable Insights
                    </h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                    By identifying the root cause, you can develop more effective
                    solutions to prevent future occurrences.
                    </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors">
                    <div className="text-2xl mb-3">🔧</div>
                    <h4 className="font-light mb-2 text-white">Versatility</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                    The 5 Whys can be applied to a wide range of problems, from
                    simple to complex.
                    </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors">
                    <div className="text-2xl mb-3">📊</div>
                    <h4 className="font-light mb-2 text-white">Flexible Count</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                    While it's called "5 Whys," you may need to ask "Why?" more or
                    fewer times to reach the root cause.
                    </p>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors">
                    <div className="text-2xl mb-3">⚡</div>
                    <h4 className="font-light mb-2 text-white">Simple & Fast</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                    No complex tools needed. Just systematic questioning to get to
                    the heart of the matter.
                    </p>
                </div>
                </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
                <button
                onClick={handleStartJourney}
                className="bg-green-400 hover:bg-green-300 text-black font-mono font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
                >
                🚀 Start Your Analysis
                </button>
                <p className="text-sm text-gray-500 mt-4 font-mono">
                Begin analyzing your problem with AI-powered guidance
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default LandingPage;