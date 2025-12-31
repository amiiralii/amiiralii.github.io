# Amirali Rayegan - Personal Academic Website

A clean, modern, single-page academic portfolio website designed for GitHub Pages.

## 🚀 Deployment to GitHub Pages

### Option 1: User/Organization Site (username.github.io)

1. Create a new repository named `amirali-rayegan.github.io` (replace with your GitHub username)
2. Push this code to the `main` branch
3. Go to **Settings** → **Pages**
4. Under "Source", select **Deploy from a branch**
5. Select `main` branch and `/ (root)` folder
6. Click **Save**
7. Your site will be live at `https://amirali-rayegan.github.io`

### Option 2: Project Site

1. Create any repository name
2. Push this code to the `main` branch
3. Go to **Settings** → **Pages**
4. Configure as above
5. Your site will be at `https://username.github.io/repo-name`

## 📁 Structure

```
├── index.html    # Main website (single file, self-contained)
└── README.md     # This file
```

## ✨ Features

- **Responsive Design**: Works on all devices
- **Dark Theme**: Elegant gold accent on dark background
- **Smooth Animations**: Subtle fade-in and hover effects
- **Mobile Navigation**: Hamburger menu for small screens
- **Single File**: No dependencies to manage (fonts loaded from CDN)

## 🎨 Customization

All styling is contained in the `<style>` tag within `index.html`. Key CSS variables:

```css
:root {
    --bg-primary: #0d0d0d;      /* Main background */
    --bg-secondary: #161616;     /* Section backgrounds */
    --accent: #c9a227;           /* Gold accent color */
    --text-primary: #f5f5f5;     /* Main text */
    --text-secondary: #a0a0a0;   /* Secondary text */
}
```

## 📝 Updating Content

Edit the HTML sections directly in `index.html`:

- **About/Hero**: Update the intro text and social links
- **News**: Add/remove `.news-item` blocks
- **Research**: Modify `.research-area` blocks
- **Publications**: Update `.publication` blocks
- **Education**: Edit `.education-item` blocks
- **Projects**: Add/remove `.project-card` blocks
- **Contact**: Update email and social links

## 📄 License

Feel free to use this template for your own academic website.

