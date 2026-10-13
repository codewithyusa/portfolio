import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} Yusuf Umer Abduljewad. All rights reserved.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}