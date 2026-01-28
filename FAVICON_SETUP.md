# Favicon Setup Guide

## Where to Add Your Favicon Files

Place all favicon files in the **`public/`** folder at the root of your project.

## Required Favicon Files

Create and add these files to the `public/` folder:

### 1. **favicon.svg** (Recommended - Modern browsers)
- **Size**: Any (scalable)
- **Location**: `public/favicon.svg`
- **Best for**: Modern browsers, supports dark mode

### 2. **favicon.ico** (Fallback for older browsers)
- **Size**: 16x16, 32x32, 48x48 (multi-size ICO file)
- **Location**: `public/favicon.ico`
- **Best for**: Older browsers, Windows

### 3. **favicon-32x32.png**
- **Size**: 32x32 pixels
- **Location**: `public/favicon-32x32.png`

### 4. **favicon-16x16.png**
- **Size**: 16x16 pixels
- **Location**: `public/favicon-16x16.png`

### 5. **apple-touch-icon.png**
- **Size**: 180x180 pixels
- **Location**: `public/apple-touch-icon.png`
- **Used for**: iOS home screen icons

### 6. **favicon-192x192.png** (For Android)
- **Size**: 192x192 pixels
- **Location**: `public/favicon-192x192.png`

### 7. **favicon-512x512.png** (For Android)
- **Size**: 512x512 pixels
- **Location**: `public/favicon-512x512.png`

## Quick Setup Options

### Option 1: Use Your Existing Logo SVG

If you have the Trinetra logo SVG (`assets/aigc/design/trinetra.svg`), you can copy it:

```bash
cp assets/aigc/design/trinetra.svg public/favicon.svg
```

### Option 2: Generate Favicons from Your Logo

1. **Online Tools** (Recommended):
   - https://realfavicongenerator.net/
   - https://favicon.io/
   - Upload your logo and download all sizes

2. **Using Your Logo**:
   - Use your Trinetra logo SVG or PNG
   - Upload to favicon generator
   - Download all generated files
   - Place them in the `public/` folder

### Option 3: Create Simple Favicon

If you want a simple favicon quickly:

1. Create a 32x32 PNG with "T" or your logo
2. Save as `public/favicon-32x32.png`
3. Copy it to `public/favicon-16x16.png` (resize to 16x16)
4. Use an online converter to create `favicon.ico`

## File Structure After Setup

Your `public/` folder should look like this:

```
public/
├── favicon.svg
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-192x192.png
├── favicon-512x512.png
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml
└── manifest.json
```

## Testing Your Favicon

After adding the files:

1. **Clear browser cache** (important!)
2. **Hard refresh**: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
3. Check the browser tab - you should see your favicon
4. Test on mobile devices

## Current Setup

The `index.html` file is already configured with favicon links. You just need to add the actual image files to the `public/` folder.

## Quick Copy from Existing Logo

If you want to use your existing Trinetra logo as a favicon:

```bash
# Copy the SVG logo
cp assets/aigc/design/trinetra.svg public/favicon.svg

# Then generate other sizes using an online tool
```

## Notes

- **SVG favicons** are best for modern browsers (supports dark mode, scalable)
- **PNG favicons** provide better compatibility
- **ICO files** are needed for older browsers
- Always test in multiple browsers after adding favicons
