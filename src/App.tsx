import React, { useState } from 'react';
import { Users, Calendar, Trophy, Zap, MessageSquare, Crown, User, Settings as SettingsIcon } from 'lucide-react';
import ProfileVerification from './components/ProfileVerification';
import Explore from './components/Explore';
import Dates from './components/Dates';
import Leaderboard from './components/Leaderboard';
import Engage from './components/Engage';
import Messaging from './components/Messaging';
import Hub from './components/Hub';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import RizzAI from './components/RizzAI';

function App() {
  const [currentPage, setCurrentPage] = useState('explore');
  const [isVerified, setIsVerified] = useState(false);
  const [subscription, setSubscription] = useState('free');
  const [showSettings, setShowSettings] = useState(false);
  const [user, setUser] = useState({
    id: '1',
    name: 'John Doe',
    premium: false,
    hotnessScore: 0,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  });

  const handleUpgrade = (tier: string) => {
    setSubscription(tier);
    setUser({ ...user, premium: tier !== 'free' });
  };

  const handleVerification = (score: number) => {
    setIsVerified(true);
    setUser({ ...user, hotnessScore: score });
  };

  const renderPage = () => {
    if (!isVerified) {
      return <ProfileVerification onVerified={handleVerification} />;
    }

    switch (currentPage) {
      case 'explore':
        return <Explore subscription={subscription} />;
      case 'dates':
        return <Dates subscription={subscription} />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'engage':
        return <Engage subscription={subscription} />;
      case 'messages':
        return <Messaging subscription={subscription} />;
      case 'hub':
        return <Hub subscription={subscription} />;
      case 'profile':
        return <UserProfile user={user} />;
      default:
        return <Explore subscription={subscription} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Exclusive Dating App</h1>
        <div className="flex items-center">
          <select
            value={subscription}
            onChange={(e) => handleUpgrade(e.target.value)}
            className="mr-4 bg-yellow-500 text-white py-1 px-2 rounded-md text-sm"
          >
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="elite">Elite</option>
          </select>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-gray-200 p-2 rounded-full mr-2"
          >
            <SettingsIcon size={20} />
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className="bg-gray-200 p-2 rounded-full"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          </button>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4 pb-24">
        {renderPage()}
        {isVerified && (
          <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
            <ul className="flex justify-around">
              <li>
                <button onClick={() => setCurrentPage('explore')} className="flex flex-col items-center text-gray-600 hover:text-pink-500">
                  <Users size={24} />
                  <span>Explore</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('dates')} className="flex flex-col items-center text-gray-600 hover:text-pink-500">
                  <Calendar size={24} />
                  <span>Dates</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('leaderboard')} className="flex flex-col items-center text-gray-600 hover:text-pink-500">
                  <Trophy size={24} />
                  <span>Leaderboard</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('engage')} className="flex flex-col items-center text-gray-600 hover:text-pink-500">
                  <Zap size={24} />
                  <span>Engage</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('messages')} className="flex flex-col items-center text-gray-600 hover:text-pink-500">
                  <MessageSquare size={24} />
                  <span>Messages</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('hub')} className="flex flex-col items-center text-gray-600 hover:text-pink-500">
                  {subscription === 'elite' ? <Crown size={24} /> : <User size={24} />}
                  <span>{subscription === 'elite' ? 'Elite Hub' : 'Hub'}</span>
                </button>
              </li>
            </ul>
          </nav>
        )}
        <RizzAI onSuggestion={(suggestion) => console.log(suggestion)} />
      </main>
      {showSettings && (
        <Settings subscription={subscription} onUpgrade={handleUpgrade} onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}

export default App;