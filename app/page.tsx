'use client';
// app/page.tsx

import NavigationBar from '@/components/NavigationBar';
import MessagesList from '@/components/MessagesList';
import TextMessagingArea from '@/components/TextMessagingArea';
import ContactBar from '@/components/ContactBar';
import '@/app/globals.css'

const DashboardPage = () => {
  return (
    <div className="flex h-screen w-screen">
      <NavigationBar />
      <MessagesList />
      <TextMessagingArea />
      <ContactBar />
    </div>
  );
};

export default DashboardPage;
