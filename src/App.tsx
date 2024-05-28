import { useEffect, useState } from "react";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { parse, Recipe, WasmParserError } from "@reciperium/recipe-parser-wasm";
import { cn } from "./lib/utils";
import { Badge } from "./components/ui/badge";

const createTitle = (
  value1?: string | null,
  value2?: string | null
): string | undefined => {
  if (value1 && value2) {
    return `${value1} ${value2}`;
  } else if (value1) {
    return value1;
  } else if (value2) {
    return value2;
  }
  return "at will";
};

function App() {
  const [recipe, setRecipe] = useState(
    `>> tags: vegan, high-protein, high-fiber
    >> lang: en

    Add {boiled chickpeas}(400 gr) to the &{blender} with {garlic}(1),
    {tahini}(2 tsp), {lemon}(1/2), {olive oil}(2 tsp), {salt} and {pepper}.

    Blend for t{3 minutes}.

    Serve or store.
    `
      .split("\n")
      .map((s) => s.trim())
      .join("\n")
  );
  const [parsedRecipe, setParsedRecipe] = useState({} as Recipe);
  const [error, setError] = useState({} as WasmParserError | null);

  useEffect(() => {
    try {
      const parsed: Recipe = parse(recipe);
      setParsedRecipe(parsed);
      setError(null);
    } catch (err) {
      const error = err as WasmParserError;
      console.error(error);
      setError(error);
    }
  }, [recipe]);

  const tags =
    parsedRecipe.metadata
      ?.get("tags")
      ?.split(",")
      .map((t) => t.trim()) || [];

  const firstIndex =
    parsedRecipe.tokens?.findIndex(
      (token) => token.token !== "Metadata" && token.token !== "Space"
    ) || 0;

  return (
    <div className="flex-col h-screen w-screen ">
      {/* Start "Navbar" */}
      <div className="container w-full flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <div className="flex shrink-0 gap-2 content-end items-stretch">
          <h2 className="text-lg font-semibold self-end">Recipe Lang</h2>
        </div>
        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
          Playground
        </div>
      </div>
      {/* End "Navbar" */}

      <Separator />

      {/* Start "Main Section" */}
      <div className="container py-6">
        <div className="flex flex-col space-y-4">
          <div className="grid h-full grid-cols-1 grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
            {/* Start "Recipe text" */}
            <div className="flex">
              <Textarea
                placeholder="Write your recipe here"
                className={cn(
                  "h-full min-h-[300px] lg:min-h-[500px] xl:min-h-[500px]",
                  error?.message &&
                    "focus:ring-red-500 border-red-500 ring-offset-red-500 focus-visible:ring-red-100 "
                )}
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
              />
              <p className="text-red-400 whitespace-pre">{error?.message}</p>
            </div>
            {/* End "Recipe text" */}

            {/* Start "Render recipe" */}
            <div className="rounded-md border bg-muted p-4">
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
                        <li
                          key={ref.name}
                          className="mb-2 text-left antialiased"
                        >
                          <span className="mr-2">
                            {ref.quantity} {ref.unit}
                          </span>
                          {ref.name}
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
                        <li
                          key={material.name}
                          className="mb-2 text-left antialiased"
                        >
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

                  {parsedRecipe.tokens?.slice(firstIndex).map((token, i) => {
                    switch (token.token) {
                      case "Space":
                        return token.content;
                      case "Word":
                        return (
                          <span key={i} className="mb-1">
                            {token.content}
                          </span>
                        );
                      case "Ingredient":
                        return (
                          <span
                            title={createTitle(
                              token.content.quantity,
                              token.content.unit
                            )}
                            // @ts-ignore
                            tabIndex="0"
                            className="bg-fuchsia-100 dark:bg-fuchsia-800 mb-1"
                            key={i}
                          >
                            {token.content.name}
                          </span>
                        );
                      case "RecipeRef":
                        return (
                          <span
                            key={i}
                            title={createTitle(
                              token.content.quantity,
                              token.content.unit
                            )}
                            // @ts-ignore
                            tabIndex="0"
                            className="mb-1"
                          >
                            {token.content.name}
                            {/* <Suspense fallback={<RecipeRefLoader />}>
                          <RecipeRef name={token.content.name} />
                        </Suspense> */}
                          </span>
                        );
                      case "Material":
                        return (
                          <span
                            className="bg-yellow-100 dark:bg-yellow-800 mb-1"
                            key={i}
                          >
                            {token.content}
                          </span>
                        );
                      case "Timer":
                        return (
                          <span
                            className="bg-orange-100 dark:bg-orange-800 mb-1"
                            key={i}
                          >
                            {token.content}
                          </span>
                        );
                    }
                  })}
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
            {/* End "Render recipe" */}
          </div>
        </div>
      </div>
      {/* End "Main Section" */}

      {/* Start "Footer" */}
      <div className="flex flex-col w-full gap-4 items-center justify-center py-4 bg-gray-100 dark:bg-gray-800 inset-x-0 bottom-0 relative lg:absolute">


        <div className="grid grid-cols-1 gap-4 text-sm">

          <a
            href="https://github.com/reciperium/recipe-lang/blob/main/spec.md"
            className="text-blue-500 hover:text-blue-600 after:content-['_↗']"
            target="_blank"
          >
            Recipe Lang Specification
          </a>
          <a
            href="https://www.reciperium.com"
            className="text-blue-500 hover:text-blue-600 after:content-['_↗']"
            target="_blank"
          >
            Reciperium
          </a>

        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          2024 Reciperium
        </p>
      </div>
      {/* End "Footer" */}
    </div>
  );
}

export default App;