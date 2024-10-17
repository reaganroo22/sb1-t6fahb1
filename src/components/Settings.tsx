import React from 'react';
import { X } from 'lucide-react';

interface SettingsProps {
  subscription: string;
  onUpgrade: (tier: string) => void;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ subscription, onUpgrade, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Settings</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Account</h3>
          <p>Current Subscription: {subscription}</p>
          {subscription !== 'elite' && (
            <button
              onClick={() => onUpgrade('elite')}
              className="mt-2 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
            >
              Upgrade to Elite
            </button>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Notifications</h3>
          <div className="flex items-center justify-between">
            <span>Push Notifications</span>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Email Notifications</span>
            <input type="checkbox" className="toggle" />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Privacy</h3>
          <div className="flex items-center justify-between">
            <span>Show Profile in Search</span>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Allow Messaging</span>
            <input type="checkbox" className="toggle" />
          </div>
        </div>

        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Settings;