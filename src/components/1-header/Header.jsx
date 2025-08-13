import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-2 py-2 px-4 bg-gray-900 text-white">
      {/* مساحة للشعار أو العنصر الأول */}
      <div className="text-lg font-bold">Logo</div>

      {/* قائمة الروابط */}
      <nav>
        <ul className="flex gap-4">
          <li><a href="#" className="hover:text-red-500">About</a></li>
          <li><a href="#" className="hover:text-red-500">Articles</a></li>
          <li><a href="#" className="hover:text-red-500">Projects</a></li>
          <li><a href="#" className="hover:text-red-500">Speaking</a></li>
          <li><a href="#" className="hover:text-red-500">Contact</a></li>
        </ul>
      </nav>

      {/* زر الوضع الفاتح/الداكن */}
      <div className="text-2xl">
        <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition">Light</button>
      </div>
    </div>
  );
}
