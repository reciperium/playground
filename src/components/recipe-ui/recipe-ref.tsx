type Props = {
  link: string;
};

const RecipeRef = ({ link }: Props) => {
  const url = new URL(link, "https://www.reciperium.com");
  return (
    <a
      href={url.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-600 after:content-['_↗']"
    >
      {link}
    </a>
  );
};

export { RecipeRef };
