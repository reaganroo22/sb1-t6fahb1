import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface RizzAIProps {
  onSuggestion: (suggestion: string) => void;
}

const RizzAI: React.FC<RizzAIProps> = ({ onSuggestion }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setIsLoading(true);

    // Simulate AI call with a timeout
    setTimeout(() => {
      const newSuggestions = [
        "That's really interesting! Can you tell me more about how that experience shaped your perspective?",
        "I love your take on that. What inspired you to develop such a unique point of view?",
        "Your passion for this topic is contagious! Have you considered turning it into a creative project?",
      ];
      setSuggestions(newSuggestions);
      setInput('');
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSuggestion(suggestion);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`fixed bottom-20 right-4 bg-white rounded-lg shadow-md transition-all duration-300 ${isMinimized ? 'w-12 h-12' : 'w-80 p-4'}`}>
      {isMinimized ? (
        <button onClick={toggleMinimize} className="w-full h-full flex items-center justify-center text-pink-500 hover:bg-pink-100 rounded-lg">
          <MessageCircle size={24} />
        </button>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold flex items-center">
              <MessageCircle size={16} className="mr-2 text-pink-500" />
              Rizz AI
            </h3>
            <button onClick={toggleMinimize} className="text-gray-500 hover:text-gray-700">
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe the conversation context..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 mb-2"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Get Suggestions
                </>
              )}
            </button>
          </form>
          {suggestions.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Suggestions:</h4>
              <ul className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 p-2 rounded-md text-sm cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RizzAI;