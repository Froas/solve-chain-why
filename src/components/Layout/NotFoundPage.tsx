import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
            <div className="text-6xl mb-4">🤔</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">
            Hmm, this page doesn't exist. Let's ask "Why?"
            </p>
            <div className="space-y-2 mb-8 text-left max-w-md mx-auto">
            <p className="text-sm text-gray-500">Why can't we find this page?</p>
            <p className="text-sm text-gray-500">→ Because the URL doesn't match any routes</p>
            <p className="text-sm text-gray-500">Why doesn't it match?</p>
            <p className="text-sm text-gray-500">→ Because it might be mistyped or moved</p>
            <p className="text-sm text-gray-500">Why not go back home?</p>
            <p className="text-sm text-gray-500">→ Great idea! 👇</p>
            </div>
            <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
            Go Home
            </Link>
        </div>
        </div>
    );
};

export default NotFoundPage;