import { Copy } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  value: string;
};
export function CopyButton({ value }: Props) {
  return (
    <Button
      variant="outline"
      onClick={() => navigator.clipboard.writeText(value)}
      title="Copy recipe text"
      className="flex gap-2"
    >
      <Copy size={16} /> Copy
    </Button>
  );
}
