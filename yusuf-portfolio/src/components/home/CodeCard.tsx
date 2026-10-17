import type { ReactNode } from "react";

const Kw = ({ children }: { children: ReactNode }) => (
  <span className="text-code-kw">{children}</span>
);
const Id = ({ children }: { children: ReactNode }) => (
  <span className="text-code-id">{children}</span>
);
const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-code-str">{children}</span>
);
const Item = ({ children }: { children: ReactNode }) => (
  <span className="text-code-item">{children}</span>
);

export default function CodeCard() {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-code-line bg-code-bg p-6 text-code-fg shadow-[0_0_70px_-10px_var(--code-glow)] md:p-7">
      <div className="flex items-center justify-between border-b border-code-line pb-4">
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-[#ffbd2e]" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-mono text-xs text-code-muted">yusuf_developer.ts</span>
      </div>

      <pre className="whitespace-pre-wrap break-words py-5 font-mono text-[13px] leading-7 md:text-sm md:leading-7">
        <Kw>const</Kw> <Id>developer</Id> = {"{"}
        {"\n  "}name: <Str>'Yusuf Umer'</Str>,
        {"\n  "}title: <Str>'Full-Stack &amp; Mobile Engineer'</Str>,
                {"\n  "}skills: [<Item>'React'</Item>, <Item>'Angular'</Item>, <Item>'.NET'</Item>,
        {"\n    "}<Item>'Flutter'</Item>, <Item>'React Native'</Item>, <Item>'Node.js'</Item>,
        {"\n    "}<Item>'NestJS'</Item>],
        {"\n  "}passions: [<Str>'Clean Architecture'</Str>, <Str>'Secure APIs'</Str>],
        {"\n  "}location: <Str>'Addis Ababa'</Str>,
        {"\n  "}status: <Str>'Ready for Next Challenge'</Str>
        {"\n"}
        {"};"}
        {"\n\n"}
        <Kw>function</Kw> <Id>buildFuture</Id>() {"{"}
        {"\n  "}
        <Kw>return</Kw> developer.skills.<Id>map</Id>(tech ⇒ <Id>createSolution</Id>(tech));
        {"\n"}
        {"}"}
      </pre>

      <div className="flex items-center justify-between border-t border-code-line pt-4">
        <div className="flex items-center gap-4">
          <img
            src="/yusuf.jpg"
            alt="Yusuf Umer"
            className="size-12 shrink-0 rounded-full object-cover object-top"
          />
          <div>
            <p className="font-semibold text-fg">Yusuf Umer</p>
            <p className="text-xs text-code-muted">Addis Ababa &amp; Remote</p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-sm text-code-muted">
          <span className="size-2.5 rounded-full bg-green-500" />
          Online
        </div>
      </div>
    </div>
  );
}