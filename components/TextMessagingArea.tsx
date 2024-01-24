"use client";

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import SendMessageForm from '@/components/SendMessageForm';
import { PhoneCall, CheckCircle, FileText, MoreVertical, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const TextMessagingArea = () => {
  const sampleMessages = [
    { id: 1, sender: 'John Doe', content: 'Hey, how are you?', isOwnMessage: false, time: 'Jan 6, 2:34 PM' },
    { id: 2, sender: 'You', content: 'I am fine, thanks! And you?', isOwnMessage: true, time: 'Jan 10, 2:35 PM' },
    // Add more sample messages here.
  ];

  return (
    <div className="flex flex-col flex-grow border-r border-l border-gray-300">
      <div className="p-3.5 border-b border-gray-200 bg-white flex items-center justify-between">
        {/* Recipient info with profile picture */}
        <div className="flex items-center space-x-3">
        <div className="rounded-full bg-gray-300 p-2">
            <User className="w-6 h-6 text-gray-600" />
        </div>
        <div>
            <div className="text-sm font-bold">(517) 305-2709</div>
        </div>
        </div>
        {/* Rightmost icons */}
        <div className="flex items-center space-x-4">
        <PhoneCall className="w-5 h-5 text-gray-600 cursor-pointer" />
        <CheckCircle className="w-5 h-5 text-gray-600 cursor-pointer" />
        <FileText className="w-5 h-5 text-gray-600 cursor-pointer" />
        <MoreVertical className="w-5 h-5 text-gray-600 cursor-pointer" />
        </div>
        </div>

      {/* Messages display area */}
      <ScrollArea className="flex-grow ">
        <div className="p-4">
          {sampleMessages.map((message, index, array) => (
            <React.Fragment key={message.id}>
              {/* Timestamp */}
              {index === 0 || message.time !== array[index - 1].time ? (
                <div className="text-center text-xs text-gray-500 my-2">
                  {message.time}
                </div>
              ) : null}
              {/* Message bubble */}
              <div className={`flex items-end text-xs ${message.isOwnMessage ? 'justify-end' : 'justify-start'}`}>
                {!message.isOwnMessage && (
                  <div className="flex items-center mr-2">
                    <div className="rounded-full bg-gray-300 p-1">
                      <User className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                )}
                <div
                  className={`flex flex-col ${message.isOwnMessage ? 'items-end' : 'items-start'} max-w-3/4 mb-4`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg ${message.isOwnMessage ? 'bg-blue-100' : 'bg-gray-300'}`}
                  >
                    <div>{message.content}</div>
                  </div>
                </div>
              </div>
              {/* Conditional rendering of separator based on whether the next message is on a different day */}
              {index < array.length - 1 && message.time.split(',')[0] !== array[index + 1].time.split(',')[0] && (
                <Separator className="my-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>

      {/* Message input area */}
      <SendMessageForm />
    </div>
  );
};

export default TextMessagingArea;









