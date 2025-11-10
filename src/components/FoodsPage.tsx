import { Button } from "./ui/button";
import { ChevronRight, Utensils, Apple } from "lucide-react";

export function FoodsPage() {
  const sections = [
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
          <Utensils className="w-5 h-5 text-white" />
        </div>
      ),
      title: "Custom Meals",
      description: "Combine your favourite recipes and foods into one meal for faster logging.",
      buttons: [
        { label: "CREATE MEAL", primary: false }
      ]
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
          <Utensils className="w-5 h-5 text-white" />
        </div>
      ),
      title: "Custom Recipes",
      description: "Create recipes manually or import them from a website for quick logging.",
      buttons: [
        { label: "CREATE RECIPE", primary: false },
        { label: "IMPORT RECIPE", primary: false }
      ]
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
          <Apple className="w-5 h-5 text-white" />
        </div>
      ),
      title: "Custom Foods",
      description: "Add any item not in our database as Custom Food.",
      buttons: [
        { label: "CREATE FOOD", primary: false }
      ]
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Repeat Items",
      description: "Schedule foods, meals, recipes and supplements that you log regularly.",
      buttons: []
    },
    {
      icon: (
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      ),
      title: "Suggest Food",
      description: "Can't find the food you're looking for? Suggest a food for our database.",
      buttons: []
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white pb-20 overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Foods</h1>
          <div className="flex items-center gap-3">
            <button className="p-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button className="p-2">
              <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="divide-y">
        {sections.map((section, idx) => (
          <div key={idx} className="p-4 hover:bg-gray-50">
            <div className="flex items-start gap-3 mb-4">
              {section.icon}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg">{section.title}</h2>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
            {section.buttons.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {section.buttons.map((button, btnIdx) => (
                  <Button
                    key={btnIdx}
                    variant="outline"
                    className="rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-100 text-sm h-10 px-6"
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
