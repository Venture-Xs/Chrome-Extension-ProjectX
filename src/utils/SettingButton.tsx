import { CiSettings } from "react-icons/ci";
 
import { Button } from "@/components/ui/button"
 
export function SettingButton() {
  return (
    <Button variant="outline" size="icon">
      <CiSettings  className="h-4 w-4" />
    </Button>
  )
}