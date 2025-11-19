import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-glass-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="h-4 w-4 text-accent fill-accent" /> by{" "}
          <span className="text-accent font-semibold">Chetan B K</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
