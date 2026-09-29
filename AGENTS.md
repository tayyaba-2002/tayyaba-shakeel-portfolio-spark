# Project Architecture

- Keep the portfolio as a single-page React experience with section components co-located in `src/App.tsx`; the site is small, content-led, and benefits from one clear narrative source.
- Express all visual roles through semantic CSS variables and Tailwind tokens; this preserves consistency and avoids one-off color decisions in page markup.
- Store downloadable résumé media as a Lovable Asset pointer; this keeps the repository lightweight while maintaining a stable public download URL.