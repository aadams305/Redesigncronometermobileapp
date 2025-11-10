import { 
  ChevronRight,
  Search,
  User,
  Target,
  Clock,
  Smartphone,
  RefreshCw,
  Share2,
  Users,
  HelpCircle,
  Info
} from "lucide-react";
import { Input } from "./ui/input";

export function MorePage() {
  const menuItems = [
    { icon: User, label: "Account" },
    { icon: User, label: "Profile" },
    { icon: Target, label: "Targets" },
    { icon: Clock, label: "Fasting" },
    { icon: Smartphone, label: "Display" },
    { icon: RefreshCw, label: "Connect Apps & Devices" },
    { icon: Share2, label: "Sharing" },
    { icon: Users, label: "Referrals" },
    { icon: HelpCircle, label: "Support" },
    { icon: Info, label: "About" },
  ];

  return (
    <div className="flex flex-col h-full bg-white pb-20 overflow-y-auto">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-4xl">More</h1>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input 
            type="text"
            placeholder="Search..."
            className="pl-10 bg-gray-100 border-0 h-12 rounded-xl"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="divide-y">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-6 h-6" />
              <span className="text-base">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
