// components/MessagesList.tsx
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown, Loader, MessageSquareText, PhoneOutgoing, Sliders, UserRound } from 'lucide-react';
import { supabase } from '@/utils/supabase/supabase';

import React, { useEffect, useState } from 'react';
import { useSelectedContact } from '@/lib/SelectedContactContext';

type Contact = {
    id: number;
    sender: string;
    preview: string;
    date: string;
    unread: boolean;
};

const MessagesList = () => {
    const [messages, setMessages] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Function to fetch messages
        const fetchMessages = async () => {
          setLoading(true); 
          const { data, error } = await supabase
            .from('contacts')
            .select('*');
    
          if (error) {
            console.error('Error fetching contacts:', error);
            return;
          }
          setMessages(data);
          setLoading(false);
        };
    
        fetchMessages();
      }, []);

    const { setSelectedContact } = useSelectedContact();

    const handleContactClick = (contact: Contact) => {
      setSelectedContact(contact);
    };

  return (
    <ScrollArea className=" w-1/4 flex-grow flex-shrink-0 overflow-y-auto bg-white">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <button className="font-bold flex items-center space-x-1">
              <span>Open</span>
              <ChevronDown size={16} />
            </button>
            <button className="p-2 rounded border border-gray-300 flex items-center">
              <Sliders size={16} />
              <span className="text-xs px-2">Filter</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full text-purple-700 hover:bg-gray-100">
              <PhoneOutgoing size={20} />
              <span className="sr-only">Call</span>
            </button>
            <button className="p-2 rounded-full text-purple-700 hover:bg-gray-100">
              <MessageSquareText size={20} />
              <span className="sr-only">Message</span>
            </button>
          </div>
        </div>


        <div className="space-y-2 p-3">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader className="animate-spin" />
          </div>
        ) : messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 ${
                message.unread ? 'font-bold' : ''
              }`}
              onClick={() => handleContactClick(message)}
            >
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center">
                  <UserRound />
                </div>
                <div>
                  <span className={`block text-xs ${message.unread ? 'font-bold' : 'font-semibold'}`}>{message.sender}</span>
                  <span className={`block text-xs ${message.unread ? 'text-gray-900' : 'text-gray-600'}`}>{message.preview}</span>
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-400">{message.date}</span>
                {message.unread && (
                  <span className="flex h-3 w-3">
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-5">No messages found.</div>
        )}
      </div>
    </ScrollArea>
  );
};

export default MessagesList;
