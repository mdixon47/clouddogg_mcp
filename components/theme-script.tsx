import Script from 'next/script'

/**
 * ThemeScript component that prevents flash of unstyled content (FOUC)
 * by setting the theme before the page renders.
 *
 * This replaces the inline script for better security and CSP compliance.
 */
export function ThemeScript() {
  // The script content as a string - this will be loaded as an external script
  const themeScriptContent = `
    (function() {
      try {
        var savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(savedTheme);
      } catch (e) {
        console.error('Failed to set theme:', e);
        // Fallback to dark theme if there's an error
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <Script
      id="theme-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: themeScriptContent,
      }}
    />
  );
}

/**
 * Client-side theme script for additional theme management
 * This runs after the page is interactive and handles theme changes
 */
export function ClientThemeScript() {
  return (
    <Script
      id="client-theme-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Listen for theme changes and update localStorage
            function updateTheme(theme) {
              try {
                localStorage.setItem('theme', theme);
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {
                console.error('Failed to update theme:', e);
              }
            }

            // Make updateTheme available globally for theme toggle
            window.updateTheme = updateTheme;

            // Listen for storage changes (for cross-tab theme sync)
            window.addEventListener('storage', function(e) {
              if (e.key === 'theme' && e.newValue) {
                document.documentElement.classList.remove('dark', 'light');
                document.documentElement.classList.add(e.newValue);
              }
            });
          })();
        `,
      }}
    />
  );
}
