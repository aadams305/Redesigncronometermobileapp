import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { 
  Apple, 
  Camera, 
  Heart, 
  FileText, 
  Clock, 
  Activity,
  ImageIcon,
  Lightbulb
} from "lucide-react";

interface AddFoodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddFoodDialog({ open, onOpenChange }: AddFoodDialogProps) {
  const menuItems = [
    { icon: Lightbulb, label: "Suggest Food", color: "text-amber-500" },
    { icon: Apple, label: "Add Food", color: "text-orange-500" },
    { icon: Camera, label: "Scan Food", color: "text-blue-500" },
    { icon: Heart, label: "Add Biometric", color: "text-rose-500" },
    { icon: FileText, label: "Add Note", color: "text-gray-600" },
    { icon: Clock, label: "New Fast", color: "text-purple-500" },
    { icon: Activity, label: "Add Exercise", color: "text-green-500" },
    { icon: ImageIcon, label: "Photo Log", color: "text-pink-500" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0" aria-describedby={undefined}>
        <VisuallyHidden>
          <DialogTitle>Add Item</DialogTitle>
        </VisuallyHidden>
        <div className="grid grid-cols-2 gap-0">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center justify-center p-6 hover:bg-gray-50 transition-colors border-b border-r last:border-r-0 even:border-r-0"
              onClick={() => onOpenChange(false)}
            >
              <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-sm text-center">{item.label}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
