
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
          <h1 className="text-2xl font-semibold text-gray-900">
            [144325 / ] FLOWSERVE BV
          </h1>
          
          <div className="flex gap-2">
            <Button variant="outline" className="text-blue-600 border-blue-600">
              ADD NEW REQUESTS
            </Button>
            <Button variant="outline" className="text-blue-600 border-blue-600">
              CREATE QUOTE
            </Button>
            <Button variant="outline" className="text-blue-600 border-blue-600">
              LAUNCH LINKED AFTERMARKET ...
            </Button>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <Tabs defaultValue="summary" className="px-6">
          <TabsList className="h-12 bg-transparent border-0 gap-0">
            <TabsTrigger 
              value="summary" 
              className="bg-blue-600 text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none px-6"
            >
              Summary
            </TabsTrigger>
            <TabsTrigger value="documents" className="text-blue-600 bg-transparent rounded-none px-6">
              Documents
            </TabsTrigger>
            <TabsTrigger value="parts" className="text-blue-600 bg-transparent rounded-none px-6">
              Parts | Routers | Pass Gates Status
            </TabsTrigger>
            <TabsTrigger value="quote" className="text-blue-600 bg-transparent rounded-none px-6">
              Quote Revisions
            </TabsTrigger>
            <TabsTrigger value="flowforce" className="text-blue-600 bg-transparent rounded-none px-6">
              Flowforce
            </TabsTrigger>
            <TabsTrigger value="job" className="text-blue-600 bg-transparent rounded-none px-6">
              Job Dates
            </TabsTrigger>
            <TabsTrigger value="related" className="text-blue-600 bg-transparent rounded-none px-6">
              Related Actions
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <Tabs defaultValue="summary">
          <TabsContent value="summary" className="space-y-6">
            {/* Header Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-6">Header Information</h2>
              
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">AMP ID</span>
                    <span className="text-blue-600">245487</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900 flex items-center gap-2">
                      Shared Requests
                      <div className="w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">?</div>
                    </span>
                    <span className="text-gray-600">N/A</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Active Revision</span>
                    <span className="text-gray-600">0</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Sales Engineer</span>
                    <span className="text-blue-600">Ajith Kumar Baskar</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Quote Creator</span>
                    <span className="text-blue-600">Ajith Kumar Baskar</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Requester</span>
                    <span className="text-blue-600">Ajith Kumar Baskar</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Equipment</span>
                    <span className="text-gray-600">AIC - d61999 - HDX - 12 - 3</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Project Name</span>
                    <span className="text-gray-600"></span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Order Type</span>
                    <span className="text-gray-600">Repairs - OEM</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Request flags</span>
                    <span className="text-gray-600"></span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Scheduled Ship Date</span>
                    <span className="text-gray-600"></span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Quotation Engine</span>
                    <span className="text-gray-600">AMP Lite; AMP Advanced; Quick Quote</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Job Status</span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Active</span>
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Has FlowForce ID?</span>
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">×</div>
                      <span className="text-gray-600">No</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Workscope Detail */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <ChevronDown className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-blue-600">Workscope Detail</h2>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="font-medium text-gray-900">Latest Comment</span>
                  <span className="ml-2 text-gray-600">[2] Ajith Kumar Baskar (05/20/2025 01:01 PM):</span>
                </div>
                <div className="ml-8 text-gray-600">kjjp</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FlowserveDetail;
