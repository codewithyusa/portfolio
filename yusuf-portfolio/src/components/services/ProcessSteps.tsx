import { memo } from "react";
import { processSteps } from "../../data/services";

function ProcessSteps() {
  return (
    <ol className="space-y-4">
      {processSteps.map(({ title, description }, i) => (
        <li
          key={title}
          className="flex gap-5 rounded-2xl border border-border bg-surface p-6"
        >
          <span className="pt-0.5 text-sm font-semibold text-accent">{i + 1}</span>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted">{description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default memo(ProcessSteps);