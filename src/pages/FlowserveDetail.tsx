
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import Header from "@/components/Header";

const FlowserveDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Title and Action Buttons */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            [144325 / ] FLOWSERVE BV
          </h1>
          
          <div className="flex gap-3">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              ADD NEW REQUESTS
            </Button>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              CREATE QUOTE
            </Button>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              LAUNCH LINKED AFTERMARKET ...
            </Button>
            <Button variant="outline" size="icon" className="border-gray-300">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6">
          <div className="flex">
            <div className="bg-blue-600 text-white px-6 py-3 font-medium">
              Summary
            </div>
            <div className="text-blue-600 px-6 py-3 hover:bg-gray-50 cursor-pointer">
              Documents
            </div>
            <div className="text-blue-600 px-6 py-3 hover:bg-gray-50 cursor-pointer">
              Parts | Routers | Pass Gates Status
            </div>
            <div className="text-blue-600 px-6 py-3 hover:bg-gray-50 cursor-pointer">
              Quote Revisions
            </div>
            <div className="text-blue-600 px-6 py-3 hover:bg-gray-50 cursor-pointer">
              Flowforce
            </div>
            <div className="text-blue-600 px-6 py-3 hover:bg-gray-50 cursor-pointer">
              Job Dates
            </div>
            <div className="text-blue-600 px-6 py-3 hover:bg-gray-50 cursor-pointer">
              Related Actions
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Header Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-blue-600">Header Information</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">AMP ID</span>
                  <span className="text-blue-600 font-medium">245487</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700 flex items-center gap-2">
                    Shared Requests
                    <div className="w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-bold">?</div>
                  </span>
                  <span className="text-gray-600">N/A</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Active Revision</span>
                  <span className="text-gray-600">0</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Sales Engineer</span>
                  <span className="text-blue-600 font-medium">Ajith Kumar Baskar</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Quote Creator</span>
                  <span className="text-blue-600 font-medium">Ajith Kumar Baskar</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Requester</span>
                  <span className="text-blue-600 font-medium">Ajith Kumar Baskar</span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Equipment</span>
                  <span className="text-gray-600">AIC - d61999 - HDX - 12 - 3</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Project Name</span>
                  <span className="text-gray-600"></span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Order Type</span>
                  <span className="text-gray-600">Repairs - OEM</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Request flags</span>
                  <span className="text-gray-600"></span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Scheduled Ship Date</span>
                  <span className="text-gray-600"></span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Quotation Engine</span>
                  <span className="text-gray-600">AMP Lite; AMP Advanced; Quick Quote</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Job Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Active</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Has FlowForce ID?</span>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">×</div>
                    <span className="text-gray-600">No</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workscope Detail */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center gap-2 mb-4">
              <ChevronDown className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-blue-600">Workscope Detail</h2>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="font-medium text-gray-700">Latest Comment</span>
                <span className="text-gray-600">[2] Ajith Kumar Baskar (05/20/2025 01:01 PM):</span>
              </div>
              <div className="ml-8 text-gray-600">kjjp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowserveDetail;
