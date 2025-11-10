import { Card } from "./ui/card";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useState } from "react";
import { Progress } from "./ui/progress";

export function ReportTab() {
  const [highlightedOpen, setHighlightedOpen] = useState(true);
  const [nutritionOpen, setNutritionOpen] = useState(true);

  return (
    <div className="p-4 space-y-4">
      {/* Daily Average Header */}
      <button className="flex items-center gap-2 text-teal-600">
        <h2 className="text-lg">Daily Average for Nov 3 - 9, 2025</h2>
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Energy Budget */}
      <Card className="p-4">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="w-full flex items-center justify-between mb-4">
            <h3 className="text-lg">Energy Budget (kcals)</h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex gap-6">
              {/* Circular Progress */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <defs>
                      <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E5E7EB" />
                        <stop offset="100%" stopColor="#E5E7EB" />
                      </linearGradient>
                    </defs>
                    {/* Background circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                    />
                    {/* Small progress arc */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#6B7280"
                      strokeWidth="12"
                      strokeDasharray="352"
                      strokeDashoffset="330"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl">1240</div>
                    <div className="text-xs text-gray-500">kcal</div>
                  </div>
                </div>
                <div className="text-sm mt-2">Remaining</div>
              </div>

              {/* Budget Breakdown */}
              <div className="flex-1 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Energy Target</span>
                  <span>1328 kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Expenditure Above Baseline</span>
                  <span>+ 0 kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Total Target</span>
                  <span>1328 kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Consumed</span>
                  <span>- 88 kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Remaining</span>
                  <span>1240 kcal</span>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Macronutrient Targets */}
      <Card className="p-4">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="w-full flex items-center justify-between mb-4">
            <h3 className="text-lg">Macronutrient Targets</h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3">
            {/* Energy */}
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Energy- 88.4 / 1327.9 kcal</span>
                <span>7%</span>
              </div>
              <Progress value={7} className="h-2 bg-gray-200" />
            </div>

            {/* Protein */}
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Protein- 0.1 / 83.0 g</span>
                <span>0%</span>
              </div>
              <Progress value={0} className="h-2 bg-gray-200" />
            </div>

            {/* Net Carbs */}
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Net Carbs- 11.4 / 149.4 g</span>
                <span>8%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500" style={{ width: '8%' }}></div>
              </div>
            </div>

            {/* Fat */}
            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Fat- 4.6 / 44.3 g</span>
                <span>10%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: '10%' }}></div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Calories Consumed */}
      <Card className="p-4">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="w-full flex items-center justify-between mb-4">
            <h3 className="text-lg">Calories Consumed (kcals)</h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex gap-6">
              {/* Pie Chart */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#14B8A6" strokeWidth="16" strokeDasharray="176 176" strokeDashoffset="0" />
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#FF6B35" strokeWidth="16" strokeDasharray="165 176" strokeDashoffset="-176" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl">88</div>
                    <div className="text-xs text-gray-500">kcal</div>
                  </div>
                </div>
                <div className="text-sm mt-2">Consumed</div>
              </div>

              {/* Breakdown */}
              <div className="flex-1 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#10B981' }}></div>
                    <span className="text-green-600">Protein</span>
                  </div>
                  <div className="flex gap-4">
                    <span>1</span>
                    <span className="text-gray-500">1%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-teal-600">Carbs</span>
                  </div>
                  <div className="flex gap-4">
                    <span>46</span>
                    <span className="text-gray-500">52%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-orange-600">Fat</span>
                  </div>
                  <div className="flex gap-4">
                    <span>42</span>
                    <span className="text-gray-500">47%</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Calorie Expenditure */}
      <Card className="p-4">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="w-full flex items-center justify-between mb-4">
            <h3 className="text-lg">Calorie Expenditure (kcals)</h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex gap-6">
              {/* Pie Chart */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#A855F7" strokeWidth="16" strokeDasharray="292 60" strokeDashoffset="0" />
                    <circle cx="64" cy="64" r="56" fill="none" stroke="#14B8A6" strokeWidth="16" strokeDasharray="60 292" strokeDashoffset="-292" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl">1328</div>
                    <div className="text-xs text-gray-500">kcal</div>
                  </div>
                </div>
                <div className="text-sm mt-2">Expenditure</div>
              </div>

              {/* Breakdown */}
              <div className="flex-1 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-purple-600">BMR</span>
                  </div>
                  <div className="flex gap-4">
                    <span>1107</span>
                    <span className="text-gray-500">83%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-teal-600">Baseline Activity</span>
                  </div>
                  <div className="flex gap-4">
                    <span>221</span>
                    <span className="text-gray-500">17%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-orange-600">Exercise</span>
                  </div>
                  <div className="flex gap-4">
                    <span>0</span>
                    <span className="text-gray-500">0%</span>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Highlighted Targets */}
      <Card className="p-4">
        <Collapsible open={highlightedOpen} onOpenChange={setHighlightedOpen}>
          <CollapsibleTrigger className="w-full flex items-center justify-between mb-4">
            <h3 className="text-lg">Highlighted Targets</h3>
            {highlightedOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">Fiber</span>
                <span className="ml-auto text-gray-500">2%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">Vitamin C</span>
                <span className="ml-auto text-gray-500">7%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">Iron</span>
                <span className="ml-auto text-gray-500">11%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">B12 (Cobalamin)</span>
                <span className="ml-auto text-gray-500">5%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">Calcium</span>
                <span className="ml-auto text-gray-500">6%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">Folate</span>
                <span className="ml-auto text-gray-500">3%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">Vitamin A</span>
                <span className="ml-auto text-gray-500">4%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-gray-700">Potassium</span>
                <span className="ml-auto text-gray-500">3%</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Nutrition Scores */}
      <Card className="p-4">
        <Collapsible open={nutritionOpen} onOpenChange={setNutritionOpen}>
          <CollapsibleTrigger className="w-full flex items-center justify-between mb-4">
            <h3 className="text-lg">Nutrition Scores</h3>
            {nutritionOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-gray-700">All Targets</span>
                <span className="text-gray-500">4%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400" style={{ width: '4%' }}></div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}
