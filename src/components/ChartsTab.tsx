import { Card } from "./ui/card";
import { ChevronRight } from "lucide-react";

export function ChartsTab() {
  return (
    <div className="p-4 space-y-4">
      {/* Weight Chart */}
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg">Weight</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        
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

      {/* Calories Consumed Chart */}
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg">Calories Consumed (kcals)</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="relative h-48">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-500">
            <span>200</span>
            <span>160</span>
            <span>120</span>
            <span>80</span>
            <span>40</span>
            <span>0</span>
          </div>
          
          {/* Grid lines */}
          <div className="absolute left-12 right-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
            <div className="border-t border-gray-200"></div>
            <div className="border-t border-gray-200"></div>
            <div className="border-t border-gray-200"></div>
            <div className="border-t border-gray-200"></div>
            <div className="border-t border-gray-200"></div>
            <div className="border-t border-gray-200"></div>
          </div>
          
          {/* Bar chart */}
          <div className="ml-12 h-full pb-6 flex items-end justify-start gap-8">
            {/* Nov 4 */}
            <div className="flex flex-col items-center">
              <div className="w-10 flex flex-col-reverse">
                <div className="w-full bg-orange-500 h-24 rounded-t"></div>
              </div>
            </div>
            
            {/* Nov 7 - empty */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-0"></div>
            </div>
            
            {/* Nov 10 - empty */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-0"></div>
            </div>
          </div>
          
          {/* X-axis labels */}
          <div className="absolute bottom-0 left-12 right-0 flex justify-start gap-8 text-xs text-gray-500">
            <span className="w-10 text-center">Nov 4</span>
            <span className="w-10 text-center">Nov 7</span>
            <span className="w-10 text-center">Nov 10</span>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <span>Consumed avg</span>
        </div>
      </Card>
    </div>
  );
}
