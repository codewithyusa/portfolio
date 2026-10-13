import { memo } from "react";
import { skills } from "../../data/skills";

function SkillsGrid() {
  return (
    <ul className="space-y-2 text-muted">
      {skills.map(({ label, items }) => (
        <li key={label}>
          <strong className="font-semibold text-fg">{label}:</strong> {items.join(", ")}
        </li>
      ))}
    </ul>
  );
}

export default memo(SkillsGrid);