import { ChevronLeft, ChevronRight, Plus, CheckCircle, MoreHorizontal, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export function DiaryPage() {
  const CircularProgress = ({ value, max, label }: { value: number; max: number; label: string }) => {
    const percentage = (value / max) * 100;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full transform -rotate-90">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="50%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
            {/* Background circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              fill="none"
              stroke={label === "Expenditure" ? "url(#gradient)" : "#E5E7EB"}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={label === "Expenditure" ? strokeDashoffset : circumference}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xl">{value}</div>
            <div className="text-xs text-gray-500">kcal</div>
          </div>
        </div>
        <div className="text-sm mt-2">{label}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 pb-20 overflow-y-auto">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <button className="p-2">
            <CheckCircle className="w-6 h-6 text-teal-600" />
          </button>
          <div className="flex items-center gap-3">
            <button>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-lg">Today</h1>
            <button>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2">
              <Plus className="w-6 h-6 text-teal-600" />
            </button>
            <button className="p-2">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Energy Summary */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center gap-1 text-sm">
              ENERGY SUMMARY
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-sm text-teal-600">
              TARGET
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/>
              </svg>
            </button>
          </div>

          {/* Circular Progress Indicators */}
          <div className="flex justify-between items-center mb-4">
            <button className="text-gray-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-4">
              <CircularProgress value={0} max={1328} label="Consumed" />
              <CircularProgress value={1328} max={1328} label="Expenditure" />
              <CircularProgress value={1328} max={1328} label="Remaining" />
            </div>
            <button className="text-gray-400">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Meal Sections */}
      <div className="bg-white">
        {/* Water */}
        <Collapsible>
          <CollapsibleTrigger className="w-full flex items-center justify-between p-4 border-b hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="text-sm">Water</div>
              <div className="text-sm text-gray-500">0 / 48 fl oz</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 bg-gray-50 border-b">
            <p className="text-sm text-gray-500">Track your water intake here</p>
          </CollapsibleContent>
        </Collapsible>

        {/* Uncategorized */}
        <Collapsible>
          <CollapsibleTrigger className="w-full flex items-center justify-between p-4 border-b hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <Plus className="w-5 h-5 text-teal-600" />
              <div className="text-sm">Uncategorized</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
        </Collapsible>

        {/* Breakfast */}
        <Collapsible>
          <CollapsibleTrigger className="w-full flex items-center justify-between p-4 border-b hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <Plus className="w-5 h-5 text-teal-600" />
              <div className="text-sm">Breakfast</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
        </Collapsible>

        {/* Lunch */}
        <Collapsible>
          <CollapsibleTrigger className="w-full flex items-center justify-between p-4 border-b hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <Plus className="w-5 h-5 text-teal-600" />
              <div className="text-sm">Lunch</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
        </Collapsible>

        {/* Dinner */}
        <Collapsible>
          <CollapsibleTrigger className="w-full flex items-center justify-between p-4 border-b hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <Plus className="w-5 h-5 text-teal-600" />
              <div className="text-sm">Dinner</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
        </Collapsible>

        {/* Snacks */}
        <Collapsible>
          <CollapsibleTrigger className="w-full flex items-center justify-between p-4 border-b hover:bg-gray-50">
            <div className="flex items-center gap-3">
              <Plus className="w-5 h-5 text-teal-600" />
              <div className="text-sm">Snacks</div>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </CollapsibleTrigger>
        </Collapsible>
      </div>
    </div>
  );
}
