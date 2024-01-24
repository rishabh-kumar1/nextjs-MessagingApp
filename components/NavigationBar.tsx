// components/NavigationBar.tsx
import {
    Settings,
    User,
    Search,
    Activity,
    BarChart2,
    Info,
    Inbox,
    Heart,
    PlusCircle,
    Users,
    Gift,
  } from 'lucide-react';
  import { Button } from '@/components/ui/button';
  import { Separator } from '@/components/ui/separator';
  
  const NavigationBar = () => {
    // Updated to match the provided image
    const navItems = [
      { id: 'search', icon: <Search />, label: 'Search' },
      { id: 'activity', icon: <Activity />, label: 'Activity' },
      { id: 'contacts', icon: <User />, label: 'Contacts' },
      { id: 'analytics', icon: <BarChart2 />, label: 'Analytics' },
      { id: 'settings', icon: <Settings />, label: 'Settings' },
    ];
  
    // Add Inboxes and team member sections as separate arrays
    const inboxItems = [
      { id: 'sales', icon: <Inbox />, label: 'Sales', notifications: 5 },
      { id: 'support', icon: <Heart />, label: 'Support', notifications: 10 },
    ];
  
    const teamMembers = [
      // Add team member objects here
      { id: 'team-member-1', name: 'John Doe', icon: <Users /> },
      // More team members...
    ];
  
    return (
      <nav className="flex flex-col h-screen shadow-lg border-r border-gray-300 ">
        <div className="flex items-center justify-center p-4">
        <img
          src= 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyLXJvdW5kIj48cGF0aCBkPSJNMTggMjBhNiA2IDAgMCAwLTEyIDAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI0Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=' // Replace with your logo path
          alt="Company Logo"
          className="h-6"
        />
        <span className="text-xs ml-2">LeaseMagnets™ Team</span>
      </div>
        <div className="flex flex-col mt-1">
          {/* Main navigation items */}
          <div className=" border-b border-gray-300">
          {navItems.map((item) => (
            <Button
              key={item.id}
              color="transparent"
              className="flex items-center justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              {item.icon}
              <span className="text-xs ml-4">{item.label}</span>
            </Button>
          ))}
          <Separator className="my-1" />
          </div>
          {/* Inboxes section */}
          <div className="mt-3">
            <span className="px-4 py-2 text-xs text-gray-500">Inboxes</span>
            {inboxItems.map((item) => (
               <Button
               key={item.id}
               color="transparent"
               className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors w-full"
             >
               <div className="flex items-center">
                 {item.icon}
                 <span className="text-xs ml-4">{item.label}</span>
               </div>
               {item.notifications > 0 && (
                 <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                   {item.notifications}
                 </span>
               )}
             </Button>
             
            ))}
            </div>

          {/* Your team section */}
          <div className="mt-3">
            <span className="px-4 py-2 text-xs text-gray-500">Your team</span>
            {teamMembers.map((member) => (
              <Button
                key={member.id}
                color="transparent"
                className="flex items-center justify-start px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                {member.icon}
                <span className="text-xs ml-4">{member.name + "'s Team"}</span>
              </Button>
            ))}
            <Button color="transparent" className="flex items-center justify-start px-4 py-3 text-purple-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <PlusCircle />
              <span className="text-xs ml-4">Invite your team</span>
            </Button>
          </div>
        </div>
        {/* Refer and Earn section */}
      <div className="mt-auto">
        <Separator className="my-1" />
        <Button color="transparent" className="flex items-center justify-start px-3 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
          <Gift size="18" className="text-gray-700" />
          <span className="text-xs ml-1">Refer and earn</span>
          <Info size="10" className="text-gray-700 ml-8" />
        </Button>
      </div>
      </nav>
    );
  };
  
  export default NavigationBar;
  