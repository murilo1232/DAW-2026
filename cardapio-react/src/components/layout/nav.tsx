import type { Category } from "../../date/categories";
type NavProps = {
  categories: Category[];
  activeCategory: string;
  onselectCategory: (alias: string) => void;
};
export function Nav({ categories, activeCategory, onselectCategory }: NavProps) {
  return (
    <nav>
        <ul className="container">
          {categories.map((category) => (
            <li key={category.alias}>
              <button 
                type="button" 
                className={activeCategory === category.alias ? "active" : ""}
                onClick={() => onselectCategory(category.alias)}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
  )
}