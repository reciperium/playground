import { Trash } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  onClick: () => void;
};
export function ClearButton({ onClick }: Props) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      title="Clear recipe"
      className="flex gap-2"
    >
      <Trash size={16} /> Clear
    </Button>
  );
}
