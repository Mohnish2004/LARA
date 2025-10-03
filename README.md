# LARA Website Documentation

This document explains how to update and maintain the LARA (Laboratory for AI, Robotics, and Automation) website.

## Folder Structure

```
LARA/
├── public/           # Static assets
│   ├── publications/ # Publication media (images, videos)
│   ├── pics/         # Team member photos
│   └── ...          # Other static assets
├── content/          # Blog posts and articles (MDX)
├── src/
│   ├── app/         # Next.js pages
│   ├── components/  # React components
│   └── data/        # Data files (publications, people, etc.)
```

## How to Update Content

### 1. Public Folder Organization

The `public` folder contains all static assets and follows this structure:

```
public/
├── publications/
│   ├── images/      # Publication images (.png, .jpg)
│   ├── videos/      # Demo videos (.mp4)
│   └── gifs/        # Animations (.gif)
├── pics/
│   └── [Name].jpg   # Team member photos
└── general/         # General website images
```

**Best Practices for Media:**
- Optimize images before uploading
- Use consistent naming: `FirstnameLastname.jpg` for people
- For publications: `paper-short-name-year.png`
- Recommended formats:
  - Photos: JPG/JPEG
  - Graphics/UI: PNG
  - Animations: GIF
  - Videos: MP4

### 2. Blog Posts (MDX)

Blog posts are stored in `/content/` as MDX files.

**Creating a New Post:**
1. Create a new file: `your-post-name.mdx`
2. Add the following frontmatter:

```mdx
---
title: "Your Blog Post Title"
publishedAt: "2025-01-01"
summary: "Brief description of your post"
image: "/path/to/image.jpg"  # Optional
---

## Your Content Here

Write your content using Markdown syntax.

### Code Examples
\`\`\`python
def example():
    return "Hello, World!"
\`\`\`
```

### 3. Publications

Publications are managed in `/src/data/publications.ts`. Each publication follows this schema:

```typescript
type Publication = {
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: "journal" | "conference" | "patent" | "preprint";
  link?: string;
  citations?: number;
  media?: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
  };
};
```

**Adding a New Publication:**
1. Add media files to `/public/publications/`
2. Add publication entry to `publications.ts`:

```typescript
{
  title: "Your Paper Title",
  authors: ["Author 1", "Author 2"],
  year: 2025,
  venue: "Conference/Journal Name",
  type: "conference",  // or "journal", "patent", "preprint"
  link: "https://paper-url.com",
  citations: 0,  // optional
  media: {
    type: "image",  // or "video"
    url: "/publications/your-image.png",
    thumbnail: "/publications/thumbnail.png"  // optional
  }
}
```

**Note:** Patents are automatically filtered for the patents page using:
```typescript
const patents = ALL_PUBLICATIONS.filter(pub => pub.type === "patent");
```

### 4. People

Team members are managed in `/src/app/people/page.tsx`. The file contains different categories of team members:

```typescript
const people = {
  director: [...],
  researchScientists: [...],
  postdoctoralFellows: [...],
  phdStudents: [...],
  mastersStudents: [...],
  undergraduateResearchers: [...],
  highSchoolInterns: [...],
  alumni: [...]
};
```

**Adding a New Team Member:**
1. Add photo to `/public/pics/` (recommended size: 400x400px)
2. Add entry to appropriate category:

```typescript
{
  name: "Full Name",
  major: "Field of Study",
  image: "/pics/FirstnameLastname.jpg"
}
```

**For Director:**
```typescript
{
  name: "Name",
  title: "Director, LARA Lab",
  major: "Department(s)",
  image: "/path/to/image.jpg"
}
```

## Development Workflow

Before pushing changes to main (which auto-deploys to production), always follow these steps:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Test Locally:**
   ```bash
   npm run dev
   ```
   - Visit http://localhost:3000
   - Verify all changes work as expected
   - Test on different screen sizes

3. **Build Check:**
   ```bash
   npm run build
   ```
   - Ensure build completes without errors
   - Fix any build warnings

4. **Push to Main:**
   - Only after successful build
   - Changes to main branch automatically deploy to production
   - Monitor deployment status

## Development Guidelines

1. **Image Optimization:**
   - Use the optimize script: `./scripts/optimize-images.sh`
   - Keep images under 500KB
   - Use appropriate formats for content type

2. **Content Updates:**
   - Keep publications in chronological order (newest first)
   - Maintain consistent naming conventions
   - Update news items regularly
   - Archive old content appropriately

3. **Code Style:**
   - Follow TypeScript best practices
   - Use consistent formatting
   - Comment complex logic
   - Keep components modular

## Troubleshooting

Common issues and solutions:

1. **Images not showing:**
   - Verify file exists in correct location
   - Check file permissions
   - Ensure correct path in code

2. **Publication not appearing:**
   - Check type is correct
   - Verify media paths
   - Ensure proper JSON format

3. **Blog post not visible:**
   - Verify MDX frontmatter format
   - Check file extension is .mdx
   - Ensure date is not in future

## Contact

For technical issues or questions, contact the development team at [contact@email.com]