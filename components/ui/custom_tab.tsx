"use client";

import { useState, ReactNode } from "react";

type Tab = {
  label: string;
  content: ReactNode;
};

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 -mb-px border-b-2 ${
              active === i
                ? "border-blue-500  ext-blue-500"
                : "border-transparent"
            }`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>{tabs[active].content}</div>
    </div>
  );
}
