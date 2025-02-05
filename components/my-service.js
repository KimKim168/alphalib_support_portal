"use client";

import React, { useState } from "react";
import { SquareTerminal, ChevronDown, ChevronRight } from "lucide-react";

const navItems = [
  {
    title: "Services",
    items: ["Koha", "Elibrary", "DDC", "LLC"],
  },
];

export function SidebarMenu() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white border-r border-[#03254E] shadow-sm px-3 pb-3">
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => toggleMenu(index)}
            
              className="flex items-center bg-[#03254E] justify-between w-full text-left px-3 py-2 text-gray-100 hover:bg-[#336eb8] rounded-md"
            >
              <span className="flex items-center gap-2">
                {item.icon}
                {item.title}
              </span>
              {openIndex === index ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
            {openIndex === index && (
              <ul className="ml-6 mt-1 space-y-1 border-l border-gray-300 pl-3">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href="#"
                      className="block px-3 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                    >
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
