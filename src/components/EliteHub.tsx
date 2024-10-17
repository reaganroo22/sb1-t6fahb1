import React, { useState } from 'react';
import { Crown, Radio, MessageCircle, Zap, Users } from 'lucide-react';
import SuperLikeBlast from './SuperLikeBlast';
import AIDMBlast from './AIDMBlast';

const EliteHub: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'superLikeBlast' | 'aiDmBlast' | null>(null);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Crown className="mr-2 text-yellow-500" />
        Elite Hub
      </h2>

      <p className="text-gray-600 mb-6">
        Welcome to the Elite Hub! Here you can access exclusive features that will supercharge your dating experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div
          className="bg-purple-100 p-6 rounded-lg cursor-pointer hover:bg-purple-200 transition duration-300"
          onClick={() => setActiveFeature('superLikeBlast')}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Radio className="mr-2 text-purple-500" />
            Super Like Blast
          </h3>
          <p className="text-gray-600">
            Send Super Likes to multiple users within a specific radius to maximize your chances of matching.
          </p>
        </div>
        <div
          className="bg-blue-100 p-6 rounded-lg cursor-pointer hover:bg-blue-200 transition duration-300"
          onClick={() => setActiveFeature('aiDmBlast')}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <MessageCircle className="mr-2 text-blue-500" />
            AI DM Blast
          </h3>
          <p className="text-gray-600">
            Send AI-generated messages to multiple users in your area to start conversations effortlessly.
          </p>
        </div>
      </div>

      {activeFeature === 'superLikeBlast' && <SuperLikeBlast />}
      {activeFeature === 'aiDmBlast' && <AIDMBlast />}

      <div className="bg-yellow-100 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Zap className="mr-2 text-yellow-500" />
          Elite Benefits
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Unlimited Super Likes</li>
          <li>See who liked your profile</li>
          <li>Advanced matching algorithms</li>
          <li>Priority in search results</li>
          <li>Ad-free experience</li>
          <li>Exclusive access to Elite events</li>
          <li>24/7 priority customer support</li>
        </ul>
      </div>
    </div>
  );
};

export default EliteHub;