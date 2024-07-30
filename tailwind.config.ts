import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        input: "var(--input)",
        ring: "var(--ring)",
        border: {
          DEFAULT: "var(--border)",
          variant: "var(--border-variant)",
          100: "var(--border-100)",
        },
        background: {
          DEFAULT: "var(--background)",
          100: "var(--background-100)",
          200: "var(--background-200)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          variant: "var(--foreground-variant)",
          100: "var(--foreground-100)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          100: "var(--secondary-100)",
        },
        grey: {
          DEFAULT: "var(--grey)",
          100: "var(--grey-100)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        lato: ["Lato", "Arial", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: ["0.86rem", { lineHeight: "1.3" }],
        subtitle: ["clamp(1.1rem, 3vw, 24px)", { lineHeight: "1.2" }],
        secondaryFont: ["clamp(2rem, 6vw, 32px) ", { lineHeight: "1.2" }],
        primaryFont: ["clamp(2.5rem, 6vw, 48px)", { lineHeight: "1.2" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".clip-circle ": {
          clipPath: "circle()",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
} satisfies Config;

export default config;
