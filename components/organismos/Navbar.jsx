import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-customBgColor p-6 pl-10 pr-20">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 29.984375 1.9863281 A 1.0001 1.0001 0 0 0 29.839844 2 L 7 2 L 7 48 L 43 48 L 43 47 L 43 15.167969 A 1.0001 1.0001 0 0 0 43 14.841797 L 43 14.585938 L 42.806641 14.392578 A 1.0001 1.0001 0 0 0 42.623047 14.207031 A 1.0001 1.0001 0 0 0 42.617188 14.203125 L 30.791016 2.3769531 A 1.0001 1.0001 0 0 0 30.603516 2.1894531 L 30.414062 2 L 30.154297 2 A 1.0001 1.0001 0 0 0 29.984375 1.9863281 z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 L 9 4 z M 31 5.4140625 L 39.585938 14 L 31 14 L 31 5.4140625 z M 15 22 L 15 24 L 35 24 L 35 22 L 15 22 z M 15 28 L 15 30 L 31 30 L 31 28 L 15 28 z M 15 34 L 15 36 L 35 36 L 35 34 L 15 34 z"></path>
</svg>
        <span className="ml-2 ">CURRICULUM VITAE</span>
      </div>
      <ul className="flex flex-row items-center">
        <li className="ml-10">Home</li>
        <li className="ml-10">About</li>
        <li className="ml-10">Info</li>
      </ul>
    </nav>
  );
}


