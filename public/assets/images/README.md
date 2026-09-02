# Public Assets & Images Directory

This directory is used to store static images and assets for your Next.js application.

## How to use images in Next.js:

Place your image files in this folder (e.g. `public/assets/images/logo.png` or `public/images/property.jpg`).

You can reference them in your components as:
```tsx
import Image from 'next/image';

<Image 
  src="/assets/images/logo.png" 
  alt="Logo" 
  width={200} 
  height={50} 
/>
```
Or for standard HTML `<img>` tag:
```html
<img src="/assets/images/logo.png" alt="Logo" />
```
