import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  // Mock data - replace with real data later
  const stats = {
    lastUpload: {
      totalRows: 156,
      timestamp: new Date().toLocaleDateString(),
    },
    transactions: {
      processed: 1234,
      failed: 23,
      sent: 1211,
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {data.user.email}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Last Upload Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Last Upload
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">
                {stats.lastUpload.totalRows}
              </p>
              <p className="text-sm text-gray-500">Rows uploaded</p>
            </div>
            <p className="text-sm text-gray-500">
              {stats.lastUpload.timestamp}
            </p>
          </div>
        </div>

        {/* Transaction Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Processed
          </h2>
          <div className="flex items-center space-x-2">
            <p className="text-3xl font-bold text-green-600">
              {stats.transactions.processed}
            </p>
            <div className="text-sm text-gray-500">
              <p>Total rows</p>
              <p>processed</p>
            </div>
          </div>
        </div>

        {/* Transaction Results */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Results</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Successful</span>
              <span className="text-green-600 font-semibold">
                {stats.transactions.sent}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Failed</span>
              <span className="text-red-600 font-semibold">
                {stats.transactions.failed}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{
                  width: `${
                    (stats.transactions.sent / stats.transactions.processed) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Upload New File
        </h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-2">
            Drag and drop your CSV or XLSX file here
          </p>
          <p className="text-sm text-gray-500">or</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Browse Files
          </button>
        </div>
      </div>
    </div>
  );
}
