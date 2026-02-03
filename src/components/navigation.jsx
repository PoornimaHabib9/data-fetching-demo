import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="flex items-center justify-between p-3 border-b border-gray-300">
        <div>
          <h1 className="text-left font-bold text-2xl">My App</h1>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal" className="mr-4" forceRedirectUrl="/dashboard" />
          </SignedOut>
          <SignedIn>
            <Link
              href="/user-profile"
              className="text-blue-500 hover:underline"
            >
              Profile
            </Link>
            <Link href="/products" className="text-blue-500 hover:underline">
              Products
            </Link>
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
