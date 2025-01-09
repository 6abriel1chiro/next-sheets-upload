import Link from "next/link";

export default function ConfirmSignupPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-2 w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-6">Check your email</h1>
          <div className="mb-6 text-gray-600">
            <p className="mb-4">
              We sent you a confirmation email. Please click the link in the
              email to verify your account.
            </p>
            <p className="text-sm">
              If you don&apos;t see the email, check your spam folder.
            </p>
          </div>
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
