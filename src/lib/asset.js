// Resolves a file in /public against Vite's base path, so images work both
// locally and on GitHub Pages (served under /ojt-portfolio-website/).
export const asset = (path) =>
  import.meta.env.BASE_URL + path.replace(/^\/?(public\/)?/, '');

// Placeholder social links like "https://github.com/" point at a site's home
// page rather than a profile, so they are hidden until filled in.
export const isProfileUrl = (url) =>
  Boolean(url) && !/^https?:\/\/(www\.)?[^/]+\/?$/.test(url);
