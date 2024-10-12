import { Suspense, useCallback, useEffect, useState } from "react";
import { parse, Recipe, WasmParserError } from "@reciperium/recipe-parser-wasm";
import { Github } from "lucide-react";
import RecipeCard from "./components/recipe-card";
import { ind } from "@reciperium/react-recipe";
import Editor from "./components/editor";
import { ClearButton } from "./components/clear";
import { CopyButton } from "./components/copy";

const BaseRecipe = ind`>> tags: vegan, high-protein, high-fiber
>> lang: en

Add {boiled chickpeas}(400 gr) to the &{blender} with {garlic}(1),
{tahini}(2 tsp), {lemon}(1/2), {olive oil}(2 tsp), {salt} and {pepper}.

Blend for t{3 minutes}.

Serve or store.
`;

function atobWithDefault(value: string, defaultValue: string) {
  try {
    return atob(value);
  } catch (e) {
    return defaultValue;
  }
}

function App() {
  const currentUrl = new URL(window.location.href);
  const shareParam = currentUrl.searchParams.get("share");

  const defaultRecipe = shareParam
    ? atobWithDefault(shareParam, ind`Failed to decode the recipe`)
    : BaseRecipe;

  const [recipe, setRecipe] = useState(defaultRecipe);
  const [parsedRecipe, setParsedRecipe] = useState({} as Recipe);
  const [error, setError] = useState({} as WasmParserError | null);
  const onChange = useCallback((val: string) => {
    setRecipe(val);
  }, []);
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

  return (
    <div className="grid grid-rows-layout h-screen w-screen antialiased">
      {/* Start "Navbar" */}
      <div className="w-full border-b">
        <div className="container w-full flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 ">
          <div className="flex shrink-0 gap-2 content-end items-stretch">
            <h2 className="text-lg font-semibold self-end">Recipe Lang</h2>
          </div>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            Playground
          </div>
        </div>
      </div>
      {/* End "Navbar" */}

      {/* Start "Main Section" */}
      <div className="container py-6 ">
        <div className="flex flex-col space-y-4 ">
          <div className="flex flex-col lg:flex-row justify-center gap-6 ">
            {/* Start "Recipe text" */}
            <div className="flex flex-col rounded-md lg:w-1/2 text-wrap md:h-[300px]">
              <Suspense
                fallback={
                  <div className="h-[300px] animate-pulse bg-slate-100 rounded-md" />
                }
              >
                <Editor
                  error={error}
                  className="w-full h-full font-sans bg-background"
                  value={recipe}
                  onChange={onChange}
                />
              </Suspense>
              <div className="mt-4">
                <p className="text-red-400 whitespace-pre font-mono text-sm">
                  {error?.message}
                </p>
              </div>
              <div className="flex gap-4 justify-end">
                <ClearButton onClick={() => setRecipe("")} />
                <CopyButton value={recipe} />
              </div>
            </div>
            {/* End "Recipe text" */}
            {/* Start "Render recipe" */}
            <div className="lg:w-1/2">
              <RecipeCard parsedRecipe={parsedRecipe} rawRecipe={recipe} />
              {parsedRecipe.backstory && (
                <div className="relative rounded-md border bg-muted p-6 border-slate-400 dark:border-slate-500 shadow-lg mt-6 hover:shadow-xl transition duration-400">
                  {parsedRecipe.backstory}
                </div>
              )}
            </div>
            {/* End "Render recipe" */}
          </div>
        </div>
      </div>
      {/* End "Main Section" */}

      {/* Start "Footer" */}
      <div className="flex flex-col w-full gap-4 items-center justify-center p-6 md:py-12 bg-gray-100 dark:bg-gray-800 inset-x-0 relative ">
        <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 text-sm justify-between w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Reciperium Playground</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Play with the recipe language used at{" "}
              <a
                href="https://www.reciperium.com"
                className="text-blue-500 hover:text-blue-600 after:content-['_↗']"
                target="_blank"
              >
                Reciperium
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Built with ❤️ by{" "}
              <a
                href="https://woile.dev"
                target="_blank"
                className="text-blue-500 hover:text-blue-600"
              >
                woile
              </a>
            </p>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-4 text-left">
              <h3 className="text-lg">Resources</h3>
              <a
                href="https://www.reciperium.com"
                className="text-blue-500 hover:text-blue-600 after:content-['_↗']"
                target="_blank"
              >
                Reciperium
              </a>
              <a
                href="https://learn.reciperium.com"
                className="text-blue-500 hover:text-blue-600 after:content-['_↗']"
                target="_blank"
              >
                Learn to write recipes
              </a>
              <a
                href="https://github.com/reciperium/recipe-lang/blob/main/spec.md"
                className="text-blue-500 hover:text-blue-600 after:content-['_↗']"
                target="_blank"
              >
                Recipe Lang Specification
              </a>
            </div>
            <div className="flex flex-col justify-center justify-self-center self-end">
              <div className="flex">
                {/* Github icon */}
                <a
                  href="https://github.com/reciperium/playground"
                  className="flex flex-wrap items-end self-end  after:content-['_↗'] hover:text-gray-400 dark:hover:text-gray-200"
                  target="_blank"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End "Footer" */}
    </div>
  );
}

export default App;
