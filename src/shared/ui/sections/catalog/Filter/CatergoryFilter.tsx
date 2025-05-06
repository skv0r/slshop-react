import { Label, Checkbox } from "@/shared/ui/components";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategories, toggleCategory }: CategoryFilterProps) {
  return (
    <div>
        <h3 className="mb-2" >Категории</h3>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Label className="flex cursor-pointer items-center gap-2 font-normal">
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                  className="bg-[#f1f1f1] mb-1"
                />
                <span>{category}</span>
              </Label>
            </li>
          ))}
        </ul>
    </div>
  );
}