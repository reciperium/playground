import { Recipe } from "@reciperium/recipe-parser-wasm";

import { Instructions, RecipeRef } from "@reciperium/react-recipe";
import { Badge } from "./ui/badge";
import { ShareButton } from "./share";

const BASE_URL = "https://reciperium.com";

export type RecipeProps = {
  parsedRecipe: Recipe;
  rawRecipe: string;
};

export default function RecipeCard({ parsedRecipe, rawRecipe }: RecipeProps) {
  const tags =
    parsedRecipe.metadata
      ?.get("tags")
      ?.split(",")
      .filter((v) => !!v) || [];

  return (
    <div className="relative rounded-md border bg-muted p-6 border-slate-400 dark:border-slate-500 shadow-lg hover:shadow-xl transition duration-400">
      <div className="absolute top-0 right-0 pt-3 pr-3">
        <ShareButton recipe={rawRecipe} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        {parsedRecipe.ingredients?.length > 0 ||
        parsedRecipe.recipes_refs?.length > 0 ? (
          <div className="pb-4">
            <h2 className="text-lg font-semibold">Ingredients</h2>
            <ul className="mt-2 mb-6 list-disc list-inside">
              {parsedRecipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="mb-2 text-left antialiased"
                >
                  <span>
                    {ingredient.quantity} {ingredient.unit}
                  </span>{" "}
                  {ingredient.name}{" "}
                </li>
              ))}

              {parsedRecipe.recipes_refs.map((ref) => (
                <li key={ref.name} className="mb-2 text-left antialiased">
                  <span>
                    {ref.quantity} {ref.unit}
                  </span>{" "}
                  <RecipeRef baseUrl={BASE_URL} path={ref.name}>
                    {ref.name}
                  </RecipeRef>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {parsedRecipe.materials?.length > 0 ? (
          <div>
            <h2 className="text-lg font-semibold">Materials</h2>
            <ul className="mt-2 mb-6 list-disc list-inside">
              {parsedRecipe.materials?.map((material) => (
                <li key={material.name} className="mb-2 text-left antialiased">
                  {material.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {parsedRecipe.tokens?.length > 0 && (
        <div className="recipe-content whitespace-pre text-wrap">
          <h2 className="text-lg font-semibold mb-2 ">Instructions</h2>
          <Instructions tokens={parsedRecipe.tokens} baseUrl={BASE_URL} />
        </div>
      )}
      <div className="flex flex-wrap gap-2 pt-12">
        {tags.map((tag) => (
          <Badge key={tag}>
            <a
              href={`https://www.reciperium.com/recipes?search=${tag}`}
              target="_blank"
              className="after:content-['_↗']"
            >
              {tag}
            </a>
          </Badge>
        ))}
      </div>
    </div>
  );
}
