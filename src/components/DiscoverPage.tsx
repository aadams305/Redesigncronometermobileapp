import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Megaphone, Settings, Lock, ChevronRight, Share2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { ChartsTab } from "./ChartsTab";
import { ReportTab } from "./ReportTab";
import { useState } from "react";

export function DiscoverPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  // Energy history data - representing different macros
  const energyData = [
    {
      date: "Nov 4",
      protein: 60,    // Orange
      carbs: 80,      // Green  
      fat: 40,        // Purple
      alcohol: 20     // Yellow
    },
    {
      date: "Nov 7",
      protein: 0,
      carbs: 0,
      fat: 0,
      alcohol: 0
    },
    {
      date: "Nov 10",
      protein: 0,
      carbs: 0,
      fat: 0,
      alcohol: 0
    }
  ];

  const maxValue = 200; // Max height for scaling

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1"/>
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h1 className="text-2xl">Cronometer</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2">
              <Megaphone className="w-6 h-6 text-teal-600" />
            </button>
            <button className="p-2">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4 bg-gray-100 h-10 rounded-full">
            <TabsTrigger value="dashboard" className="rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white text-sm">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="charts" className="rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white text-sm">
              Charts
            </TabsTrigger>
            <TabsTrigger value="report" className="rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white text-sm">
              Report
            </TabsTrigger>
            <TabsTrigger value="snapshot" className="rounded-full data-[state=active]:bg-gray-800 data-[state=active]:text-white text-sm">
              Snapshot
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Tab Content */}
      {activeTab === "dashboard" && (
        <div className="p-4 space-y-4">
        {/* 1. Energy Budget Average / Report Summary */}
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg">Report Summary</h2>
            <button className="text-teal-600 text-sm">EDIT</button>
          </div>
          
          <div className="mb-4">
            <div className="text-xs text-gray-500 mb-1">ENERGY BUDGET AVERAGE</div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl">1239.5 kcal</span>
              <span className="text-sm text-gray-500">Last 7 days ▼</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Energy Target</span>
              <span>1328 kcal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Expenditure Above Baseline</span>
              <span>+ 0 kcal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Total Target</span>
              <span>1328 kcal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Consumed</span>
              <span>- 88 kcal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Remaining</span>
              <span>1240 kcal</span>
            </div>
          </div>

          <Button variant="link" className="w-full text-teal-600 text-sm p-0 h-auto">
            VIEW FULL REPORT
          </Button>
        </Card>

        {/* Share the Crono Love */}
        <Card className="p-4">
          <h2 className="text-lg mb-2">Share the Crono Love!</h2>
          <p className="text-sm text-gray-600 mb-4">
            Invite your friends to Cronometer and they'll receive $5 off a Gold Subscription. If they upgrade, you'll also get $5 off a Gold Subscription.
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-teal-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <div className="w-12 h-12 rounded-full border-2 border-teal-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
            <div className="w-12 h-12 rounded-full border-2 border-teal-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
          </div>
          <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 h-12">
            REFER A FRIEND
          </Button>
        </Card>

        {/* 2. Your Streaks */}
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg">Your Streaks</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="flex justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2z"/>
                </svg>
              </div>
              <button className="p-2">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="text-4xl mb-2">0</div>
            <div className="text-sm text-gray-600 mb-4">day streak</div>
            <p className="text-sm text-gray-500">Start logging to begin your streak!</p>
          </div>
        </Card>

        {/* 3. Energy History */}
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg">Energy History (kcal)</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="relative h-56">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-16 flex flex-col justify-between text-xs text-gray-500">
              <span>200</span>
              <span>160</span>
              <span>120</span>
              <span>80</span>
              <span>40</span>
              <span>0</span>
            </div>
            
            {/* Grid lines */}
            <div className="absolute left-12 right-0 top-0 bottom-16 flex flex-col justify-between pointer-events-none">
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
            </div>
            
            {/* Chart area */}
            <div className="ml-12 h-full pb-16 flex items-end justify-start gap-12">
              {energyData.map((data, idx) => {
                const total = data.protein + data.carbs + data.fat + data.alcohol;
                const proteinHeight = (data.protein / maxValue) * 160;
                const carbsHeight = (data.carbs / maxValue) * 160;
                const fatHeight = (data.fat / maxValue) * 160;
                const alcoholHeight = (data.alcohol / maxValue) * 160;
                
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-12 flex flex-col-reverse">
                      {data.protein > 0 && <div className="w-full bg-orange-500" style={{ height: `${proteinHeight}px` }}></div>}
                      {data.carbs > 0 && <div className="w-full bg-teal-500" style={{ height: `${carbsHeight}px` }}></div>}
                      {data.fat > 0 && <div className="w-full bg-purple-500" style={{ height: `${fatHeight}px` }}></div>}
                      {data.alcohol > 0 && <div className="w-full bg-amber-400" style={{ height: `${alcoholHeight}px` }}></div>}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-8 left-12 right-0 flex justify-start gap-12 text-xs text-gray-500">
              {energyData.map((data, idx) => (
                <span key={idx} className="w-12 text-center">{data.date}</span>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
              <span>Protein</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
              <span>Carbs</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
              <span>Fat</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-amber-400 rounded-sm"></div>
              <span>Alcohol</span>
            </div>
          </div>
        </Card>

        {/* 4. Weight Chart */}
        <Card className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div className="text-xs text-gray-500">1</div>
            <div className="flex-1 relative h-32">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                <line x1="0" y1="90" x2="300" y2="90" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="0" y1="60" x2="300" y2="60" stroke="#e5e7eb" strokeWidth="1"/>
                <line x1="0" y1="30" x2="300" y2="30" stroke="#e5e7eb" strokeWidth="1"/>
                
                {/* Weight line */}
                <polyline
                  points="50,70 150,50 250,40"
                  fill="none"
                  stroke="#FF6B35"
                  strokeWidth="2"
                />
                {/* Target line */}
                <line x1="0" y1="45" x2="300" y2="45" stroke="#6B7280" strokeWidth="1" strokeDasharray="4 2"/>
                
                {/* End point */}
                <circle cx="250" cy="40" r="4" fill="#FF6B35"/>
              </svg>
              
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Oct 13</span>
                <span>Oct 27</span>
                <span>Nov 9</span>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-0.5 bg-orange-500"></div>
              <span>Weight (lbs)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-0.5 bg-gray-600" style={{ borderTop: "1px dashed #6B7280" }}></div>
              <span>Target: 149.9</span>
            </div>
          </div>
        </Card>

        {/* 5. Sleep */}
        <Card className="p-4">
          <h2 className="text-lg mb-2">Sleep</h2>
          <p className="text-sm text-gray-600 mb-4">Your Sleep Breakdown</p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-center mb-4">Duration</h3>
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <span className="text-xs">?</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600">No Data Available</p>
          </div>
        </Card>

        {/* 6. Fasting */}
        <Card className="p-4">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-lg">Fasting</h2>
            <Lock className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-sm text-gray-600 mb-2">No fasts yet.</p>
          <p className="text-sm text-gray-600 mb-4">Quick start or schedule a fast now!</p>
          <Button variant="secondary" className="w-auto bg-gray-300 text-gray-500 hover:bg-gray-400 h-10 px-6">
            NEW FAST
          </Button>
        </Card>
        </div>
      )}

      {/* Charts Tab */}
      {activeTab === "charts" && <ChartsTab />}

      {/* Report Tab */}
      {activeTab === "report" && <ReportTab />}

      {/* Snapshot Tab */}
      {activeTab === "snapshot" && (
        <div className="p-4">
          <p className="text-gray-500 text-center py-8">Snapshot coming soon...</p>
        </div>
      )}
    </div>
  );
}
