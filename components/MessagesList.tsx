// components/MessagesList.tsx
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronDown, MessageSquareText, PhoneOutgoing, Sliders, UserRound } from 'lucide-react';
import { supabase } from '@/utils/supabase/supabase';

import React, { useEffect, useState } from 'react';

type Message = {
    id: number;
    sender: string;
    preview: string;
    date: string;
    unread: boolean;
};

const MessagesList = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // Function to fetch messages
        const fetchMessages = async () => {
          const { data, error } = await supabase
            .from('contacts')
            .select('*');
    
          if (error) {
            console.error('Error fetching messages:', error);
            return;
          }
          setMessages(data);
        };
    
        fetchMessages();
      }, []);

  return (
    <ScrollArea className=" w-1 flex-grow overflow-y-auto bg-white">
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
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 ${
              message.unread ? '' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              {/* Replace with a proper avatar if available */}
              <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center">
                <UserRound/>
              </div>
              <div>
                <span className="block text-xs font-semibold">{message.sender}</span>
                <span className="block text-xs text-gray-600">{message.preview}</span>
              </div>
            </div>
            <div>
              <span className="text-xs text-gray-400">{message.date}</span>
              {/* Unread message indicator */}
              {message.unread && (
                <span className="flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
   
  );
};

export default MessagesList;
