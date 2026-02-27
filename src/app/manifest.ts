export default function manifest() {
  return {
    name: 'JusCleanIt — Accessible Exceptional Cleaning Services',
    short_name: 'JusCleanIt',
    description: 'Affordable professional cleaning services in Alberta. General cleaning from $205 + tax. All supplies included.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#112057',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
