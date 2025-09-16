import { useState } from 'react';

function DashboardLayout({ tabs }) {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-2xl font-bold text-green-700">🌍 Blue Carbon</div>
        <nav className="mt-6">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full text-left px-6 py-3 text-lg font-medium
                ${activeTab === tab ? 'bg-green-100 text-green-700 border-l-4 border-green-600' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{tabs[activeTab]}</main>
    </div>
  );
}

export default DashboardLayout;
