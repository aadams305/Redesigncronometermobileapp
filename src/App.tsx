import { useState } from "react";
import { DiscoverPage } from "./components/DiscoverPage";
import { DiaryPage } from "./components/DiaryPage";
import { FoodsPage } from "./components/FoodsPage";
import { MorePage } from "./components/MorePage";
import { AddFoodDialog } from "./components/AddFoodDialog";
import { BarChart3, FileText, Apple, MoreHorizontal, Plus } from "lucide-react";

type Page = "discover" | "diary" | "foods" | "more";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("discover");
  const [showAddDialog, setShowAddDialog] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case "discover":
        return <DiscoverPage />;
      case "diary":
        return <DiaryPage />;
      case "foods":
        return <FoodsPage />;
      case "more":
        return <MorePage />;
      default:
        return <DiscoverPage />;
    }
  };

  return (
    <div className="h-screen flex flex-col max-w-md mx-auto bg-white relative">
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200">
        <div className="grid grid-cols-5 h-16">
          {/* Discover */}
          <button
            onClick={() => setCurrentPage("discover")}
            className={`flex flex-col items-center justify-center transition-colors ${
              currentPage === "discover"
                ? "text-orange-500"
                : "text-gray-400"
            }`}
          >
            <BarChart3 className="w-6 h-6 mb-1" />
            <span className="text-xs">Discover</span>
          </button>

          {/* Diary */}
          <button
            onClick={() => setCurrentPage("diary")}
            className={`flex flex-col items-center justify-center transition-colors ${
              currentPage === "diary"
                ? "text-orange-500"
                : "text-gray-400"
            }`}
          >
            <FileText className="w-6 h-6 mb-1" />
            <span className="text-xs">Diary</span>
          </button>

          {/* Add Button (Center) */}
          <button
            onClick={() => setShowAddDialog(true)}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-14 h-14 -mt-6 rounded-full bg-orange-500 shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
              <Plus className="w-8 h-8 text-white" />
            </div>
          </button>

          {/* Foods */}
          <button
            onClick={() => setCurrentPage("foods")}
            className={`flex flex-col items-center justify-center transition-colors ${
              currentPage === "foods"
                ? "text-orange-500"
                : "text-gray-400"
            }`}
          >
            <Apple className="w-6 h-6 mb-1" />
            <span className="text-xs">Foods</span>
          </button>

          {/* More */}
          <button
            onClick={() => setCurrentPage("more")}
            className={`flex flex-col items-center justify-center transition-colors ${
              currentPage === "more"
                ? "text-orange-500"
                : "text-gray-400"
            }`}
          >
            <MoreHorizontal className="w-6 h-6 mb-1" />
            <span className="text-xs">More</span>
          </button>
        </div>
        
        {/* iOS Home Indicator */}
        <div className="h-1 flex justify-center pb-2">
          <div className="w-32 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </nav>

      {/* Add Food Dialog */}
      <AddFoodDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
    </div>
  );
}
