
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-6">
        {/* Title and Action Buttons */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">[144325 / ] FLOWSERVE BV</h1>
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
            <Button variant="outline" className="text-gray-600">
              <span className="text-xl">⋯</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-8 bg-white border-b">
            <TabsTrigger value="summary" className="bg-blue-600 text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Summary
            </TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="parts">Parts | Routers | Pass Gates Status</TabsTrigger>
            <TabsTrigger value="quote">Quote Revisions</TabsTrigger>
            <TabsTrigger value="flowforce">Flowforce</TabsTrigger>
            <TabsTrigger value="job">Job Dates</TabsTrigger>
            <TabsTrigger value="related">Related Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="mt-6 space-y-6">
            {/* Header Information Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600 text-xl">Header Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">AMP ID</span>
                      <span className="text-blue-600">245487</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Shared Requests 🛈</span>
                      <span>N/A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Active Revision</span>
                      <span>0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Sales Engineer</span>
                      <span className="text-blue-600">Ajith Kumar Baskar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Quote Creator</span>
                      <span className="text-blue-600">Ajith Kumar Baskar</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Requester</span>
                      <span className="text-blue-600">Ajith Kumar Baskar</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Equipment</span>
                      <span>AIC - d61999 - HDX - 12 - 3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Project Name</span>
                      <span></span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Order Type</span>
                      <span>Repairs - OEM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Request flags</span>
                      <span></span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Scheduled Ship Date</span>
                      <span></span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Quotation Engine</span>
                      <span>AMP Lite; AMP Advanced; Quick Quote</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Job Status</span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Active
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Has FlowForce ID?</span>
                      <span className="flex items-center">
                        <span className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs mr-2">✕</span>
                        No
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workscope Detail Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600 text-xl flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Workscope Detail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-gray-700">Latest Comment</span>
                    <span className="text-gray-600">[2] Ajith Kumar Baskar (05/20/2025 01:01 PM):</span>
                  </div>
                  <div className="ml-8 text-gray-700">kijjp</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <div className="p-8 text-center text-gray-500">Documents content will be displayed here</div>
          </TabsContent>

          <TabsContent value="parts">
            <div className="p-8 text-center text-gray-500">Parts, Routers & Pass Gates Status content will be displayed here</div>
          </TabsContent>

          <TabsContent value="quote">
            <div className="p-8 text-center text-gray-500">Quote Revisions content will be displayed here</div>
          </TabsContent>

          <TabsContent value="flowforce">
            <div className="p-8 text-center text-gray-500">Flowforce content will be displayed here</div>
          </TabsContent>

          <TabsContent value="job">
            <div className="p-8 text-center text-gray-500">Job Dates content will be displayed here</div>
          </TabsContent>

          <TabsContent value="related">
            <div className="p-8 text-center text-gray-500">Related Actions content will be displayed here</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
