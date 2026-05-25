# LensBro — Uploads Directory

This folder is for manually placed local assets (images, videos).

## How Media Upload Works

When you use the "Upload File" feature in the Admin Panel (`edit-projects.html`), 
your files are converted to **base64 data URIs** and stored in the browser's localStorage.
This means they work without any server or file hosting.

## Important: For Permanent Storage
1. After uploading and saving your projects, click **"💾 Export Data File"** in the admin panel.
2. Replace the `js/projects-data.js` file with the downloaded file.
3. This permanently bakes your uploaded images into the site data.

## Size Limits
- **Images**: Keep under 2MB for smooth performance (localStorage has ~5-10MB total limit)
- **Videos**: For videos, always prefer using a URL (YouTube, Pixabay, Vimeo) rather than uploading
- Large base64 strings consume localStorage quickly

## Supported Formats (via Upload)
| Type | Formats |
|------|---------|
| Images | JPG, PNG, WEBP, GIF, AVIF |
| Videos | MP4, WebM, MOV (small files only) |

## Recommended Workflow
1. Compress images before uploading (use tools like [Squoosh](https://squoosh.app))
2. Host videos on YouTube/Vimeo and use the URL option in the admin panel
3. Export the data file regularly as a backup
