"use client";

interface ThemeToggleProps {
  label: string;
}

const storageKey = "portfolio-theme";

export function ThemeToggle({ label }: ThemeToggleProps) {
  function toggleTheme() {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button
      type="button"
      className="control-button size-10 text-[1.05rem]"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <span aria-hidden="true" className="theme-symbol-light">
        ☾
      </span>
      <span aria-hidden="true" className="theme-symbol-dark">
        ☀
      </span>
    </button>
  );
}
