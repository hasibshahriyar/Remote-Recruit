# RemoteRecruit - Home Page

This is a responsive web application for the RemoteRecruit - Features page, built as part of the Web Developer Technical Examination. 

It accurately recreates the provided Figma design using modern frontend technologies.

## Frameworks & Libraries Used
- **React.js (v18.3)** - Core library for building the UI component-based architecture.
- **Vite** - Lightning-fast build tool and development server.
- **Tailwind CSS (v4)** - Utility-first CSS framework used for precise styling and responsive layouts.
- **Framer Motion** - Animation library used for the smooth scroll reveals and transitions.
- **Lucide React** - High-quality vector icon library.
- **TypeScript** - For type safety and better developer experience.

## Project Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hasibshahriyar/Remote-Recruit.git
   cd Remote-Recruit
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the app locally.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This will compile the application into static files inside the `dist` directory.

## Known Issues or Limitations
- Some highly complex vector illustrations from the original Figma (such as the globe and the intricate dashboard UI mockup) were substituted with approximate placeholder designs or truncated during export, which may lack the perfect 1:1 fidelity of the raw Figma vectors unless manually exported and dropped into `src/assets/images`.
- The contact forms and sign-up inputs are UI components only and do not have backend API integration for form submissions.