
import { Button } from "@/components/ui/button";

const ActionButtons = () => {
  return (
    <div className="flex justify-between items-center pt-4">
      <Button 
        variant="outline" 
        className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-2"
      >
        CANCEL
      </Button>
      <Button 
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
      >
        NEXT
      </Button>
    </div>
  );
};

export default ActionButtons;
