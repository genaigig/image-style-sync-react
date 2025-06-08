
import Header from "@/components/Header";
import PumpItemsTable from "@/components/PumpItemsTable";
import EngineeringItemsTable from "@/components/EngineeringItemsTable";
import ActionButtons from "@/components/ActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6 space-y-8">
        <PumpItemsTable />
        <EngineeringItemsTable />
        <ActionButtons />
      </div>
    </div>
  );
};

export default Index;
