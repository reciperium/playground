import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Info } from "lucide-react";

export function InfoButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Info size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-170">
        <DialogHeader>
          <DialogTitle className="mb-4">Recipe lang cheatsheet</DialogTitle>
          <DialogDescription className="mt-8 grid grid-cols-3 gap-6 text-left">
            <span className="font-semibold">tags</span>
            <code className="col-span-2">
              {">> tags: vegan, protein-rich, low-sugar"}
            </code>
            <span className="font-semibold">language</span>
            <code className="col-span-2">{">> lang: en"}</code>
            <span className="font-semibold">ingredient</span>
            <code className="col-span-2">
              {"{ingredient name}(amount unit)"}
            </code>
            <span className="font-semibold">material</span>
            <code className="col-span-2">{"&{material name}"}</code>
            <span className="font-semibold">timer</span>
            <code className="col-span-2">{"t{number time-unit}"}</code>
            <span className="font-semibold">related recipe</span>
            <code className="col-span-2">{"@{woile/tomato-sauce}"}</code>
            <span className="font-semibold">comment</span>
            <code className="col-span-2">{"/** my comment */"}</code>
            <span className="font-semibold">backstory</span>
            <code className="col-span-2">{"---"}</code>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
