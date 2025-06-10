
import Header from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600">Welcome to the Dashboard page!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
