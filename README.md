# P Nandieswar Reddy - Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and Vanilla JavaScript. Features smooth animations, dark/light theme toggle, and mobile-first design.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional layout
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: AOS (Animate On Scroll) library for elegant reveals
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Contact Form**: Netlify Forms integration for contact submissions
- **Performance Optimized**: Fast loading with optimized assets
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with theme support
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: Interactive functionality
- **AOS Library**: Scroll animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📱 Sections Included

1. **Hero Section**: Introduction with animated text and CTA buttons
2. **About Me**: Professional summary and technical skills
3. **Experience**: Timeline of work experience
4. **Projects**: Showcase of academic and personal projects
5. **Education & Publications**: Academic background and research papers
6. **Contact**: Contact information and form

## 🚀 Deployment Instructions for Netlify

### Method 1: Drag and Drop (Easiest)

1. **Prepare Files**:
   - Ensure all files (`index.html`, `styles.css`, `script.js`) are in the same folder
   - No additional build process required

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login to your account
   - Drag and drop your project folder to the deploy area
   - Your site will be live instantly with a random URL

3. **Custom Domain** (Optional):
   - Go to Site Settings > Domain Management
   - Add your custom domain or use Netlify's subdomain

### Method 2: Git Repository (Recommended)

1. **Create Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to Netlify Dashboard
   - Click "New site from Git"
   - Connect your GitHub/GitLab account
   - Select your repository
   - Deploy settings:
     - Build command: (leave empty)
     - Publish directory: (leave empty or use `/`)
   - Click "Deploy site"

3. **Automatic Deployments**:
   - Any push to main branch will trigger automatic deployment
   - Perfect for continuous updates

### Method 3: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and Deploy**:
   ```bash
   netlify login
   netlify deploy --prod --dir .
   ```

## ⚙️ Configuration

### Contact Form Setup

The contact form uses Netlify Forms. No additional setup required - it works automatically when deployed to Netlify.

Form attributes already included:
```html
<form name="contact" method="POST" data-netlify="true">
```

### Environment Variables

No environment variables required for basic functionality.

### Custom Domain Setup

1. Purchase domain from your preferred registrar
2. In Netlify: Site Settings > Domain Management > Add custom domain
3. Update DNS records as instructed by Netlify
4. SSL certificate will be automatically provisioned

## 🎨 Customization

### Colors and Themes

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
    /* ... other variables */
}
```

### Content Updates

1. **Personal Information**: Update in `index.html`
2. **Resume Content**: Modify sections in HTML
3. **Projects**: Add/edit project cards in the projects section
4. **Skills**: Update skills grid in about section

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link if needed
4. Include AOS animations with `data-aos` attributes

## 📊 Performance Optimization

- **Images**: Use WebP format for better compression
- **Fonts**: Preload critical fonts
- **CSS**: Minify for production
- **JavaScript**: Consider code splitting for larger applications

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 SEO Optimization

- Add meta descriptions
- Include Open Graph tags
- Add structured data (JSON-LD)
- Optimize images with alt tags
- Create sitemap.xml

## 🚨 Troubleshooting

### Common Issues:

1. **Fonts not loading**: Check Google Fonts URL
2. **Icons missing**: Verify Font Awesome CDN link
3. **Animations not working**: Ensure AOS library is loaded
4. **Form not submitting**: Check Netlify Forms setup
5. **Mobile menu not working**: Verify JavaScript is loaded

### Debug Steps:

1. Open browser developer tools
2. Check console for errors
3. Verify all assets are loading
4. Test on different devices/browsers

## 📞 Support

For issues or questions:
- Check browser console for errors
- Verify all CDN links are working
- Test on different browsers
- Contact: nandieswar.pelleti@example.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by P Nandieswar Reddy**

*Last updated: January 2025*
