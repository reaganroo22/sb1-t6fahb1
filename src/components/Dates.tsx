import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Video, Coffee, MapPin, Plus } from 'lucide-react';
import { DatePlan } from '../types';
import PostDatePoll from './PostDatePoll';

interface DatesProps {
  subscription: string;
}

const Dates: React.FC<DatesProps> = ({ subscription }) => {
  const [plannedDates, setPlannedDates] = useState<DatePlan[]>([]);
  const [showDatePlanner, setShowDatePlanner] = useState(false);
  const [newDate, setNewDate] = useState<Partial<DatePlan>>({});
  const [showPostDatePoll, setShowPostDatePoll] = useState(false);
  const [currentDatePartner, setCurrentDatePartner] = useState('');

  useEffect(() => {
    // Fetch planned dates from API or local storage
    const mockDates: DatePlan[] = [
      { id: 1, date: new Date('2023-05-15'), time: '19:00', type: 'virtual', activity: 'Virtual Movie Night', partner: 'Sarah' },
      { id: 2, date: new Date('2023-05-18'), time: '20:00', type: 'physical', activity: 'Coffee Shop Meet', partner: 'Mike' },
    ];
    setPlannedDates(mockDates);

    // Check for completed dates and show post-date poll
    const completedDate = mockDates.find(date => new Date(date.date) < new Date());
    if (completedDate) {
      setCurrentDatePartner(completedDate.partner);
      setShowPostDatePoll(true);
    }
  }, []);

  const handleAddDate = () => {
    if (newDate.date && newDate.time && newDate.type && newDate.activity && newDate.partner) {
      const dateToAdd: DatePlan = {
        id: plannedDates.length + 1,
        ...newDate as DatePlan
      };
      setPlannedDates([...plannedDates, dateToAdd]);
      setNewDate({});
      setShowDatePlanner(false);
    }
  };

  const handlePostDatePollSubmit = (rating: number, feedback: string) => {
    console.log('Post-date feedback:', { partner: currentDatePartner, rating, feedback });
    // Here you would typically send this data to your backend
    setShowPostDatePoll(false);
  };

  const dateIdeas: { [key: string]: string[] } = {
    virtual: [
      'Virtual Movie Night',
      'Online Game Session',
      'Virtual Art Class',
      'Book Club Discussion',
      'Virtual Concert Experience',
    ],
    physical: [
      'Coffee Shop Meet',
      'Park Picnic',
      'Museum Visit',
      'Cooking Class',
      'Mini Golf Adventure',
    ],
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Calendar className="mr-2" />
        Date Planner
      </h2>

      <div className="mb-6">
        <button
          onClick={() => setShowDatePlanner(true)}
          className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300 flex items-center"
        >
          <Plus size={18} className="mr-2" />
          Plan New Date
        </button>
      </div>

      {showDatePlanner && (
        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
          {/* Date planning form (unchanged) */}
        </div>
      )}

      <div className="space-y-4">
        {plannedDates.map((date) => (
          <div key={date.id} className="bg-gray-100 p-4 rounded-lg flex items-center">
            {/* Date display (unchanged) */}
          </div>
        ))}
      </div>

      {showPostDatePoll && (
        <div className="mt-6">
          <PostDatePoll
            partnerName={currentDatePartner}
            onSubmit={handlePostDatePollSubmit}
          />
        </div>
      )}

      {subscription !== 'free' && (
        <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Premium Feature</h3>
          <p className="text-sm text-gray-700">
            As a premium user, you can sync your dates with Google and Apple Calendars. 
            This feature will be available soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default Dates;