"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function Navbar() {
  const pathname = usePathname();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo/Home */}
            <Link
              href="/dashboard"
              className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600"
            >
              <span className="font-semibold">Sheet Validator</span>
            </Link>
          </div>

          <div className="flex space-x-4">
            {/* Navigation Links */}
            <Link
              href="/transactions"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive("/transactions")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              All Transactions
            </Link>

            <Link
              href="/account"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                isActive("/account")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Account
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
