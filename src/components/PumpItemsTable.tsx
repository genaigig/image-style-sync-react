
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { apiService, RequestType, OEM, Plant } from "@/services/api";

const PumpItemsTable = () => {
  const [request_types, setRequestTypes] = useState<RequestType[]>([]);
  const [oems, setOems] = useState<OEM[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from API...");
        const data = await apiService.getAllData();
        console.log("Received data:", data.request_types);
        console.log("Received data:", data.request_types);
        setRequestTypes(data.request_types || []);
        setOems(data.oems || []);
        setPlants(data.plants || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Pump Items</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Request Type <span className="text-red-500">*</span>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Receiving Team
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Serial Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Search</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OEM</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Equipment Model
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Equipment Size
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tag Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plant <span className="text-red-500">*</span>
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead Plant?
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-900">1</td>
              <td className="px-4 py-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {request_types.map((type) => (
                      <SelectItem key={type.id} value={type.name}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">SCP</td>
              <td className="px-4 py-3">
                <Input className="w-full" />
              </td>
              <td className="px-4 py-3">
                <Button variant="ghost" size="sm">
                  <Search size={16} className="text-blue-600" />
                </Button>
              </td>
              <td className="px-4 py-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {oems.map((oem) => (
                      <SelectItem key={oem.id} value={oem.name}>
                        {oem.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900"></td>
              <td className="px-4 py-3 text-sm text-gray-900"></td>
              <td className="px-4 py-3 text-sm text-gray-900"></td>
              <td className="px-4 py-3">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {plants.map((plant) => (
                      <SelectItem key={plant.id} value={plant.name}>
                        {plant.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <Checkbox checked className="data-[state=checked]:bg-blue-600" />
                  <span className="text-red-500 text-xl">×</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Button variant="link" className="text-blue-600 p-0 h-auto font-normal">
          <Plus size={16} className="mr-1" />
          Add New Request
        </Button>
      </div>
    </div>
  );
};

export default PumpItemsTable;
