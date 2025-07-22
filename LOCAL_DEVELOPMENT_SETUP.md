# Local Development Setup for VS Code/Cursor

## Prerequisites
Make sure you have these installed on your machine:
- **Node.js** (version 18 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **Git** - Download from [git-scm.com](https://git-scm.com/)
- **VS Code** or **Cursor** editor

## Setup Steps

### 1. Clone the Repository
```bash
git clone https://github.com/Sharedwebflow/ritefit-website.git
cd ritefit-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```bash
# Database (optional for basic development)
DATABASE_URL=your_database_url_here

# Development mode
NODE_ENV=development
```

### 4. Start Development Server
```bash
npm run dev
```

This will start:
- Frontend (React): http://localhost:5173
- Backend (Express): http://localhost:5000
- The app will be accessible at http://localhost:5000

## VS Code/Cursor Extensions (Recommended)

Install these extensions for better development experience:

### Essential Extensions:
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **TypeScript Importer** - Auto import for TypeScript
- **Tailwind CSS IntelliSense** - Tailwind class suggestions
- **Prettier - Code formatter** - Code formatting
- **ESLint** - Code linting
- **Auto Rename Tag** - HTML/JSX tag renaming

### Additional Helpful Extensions:
- **Thunder Client** - API testing (alternative to Postman)
- **GitLens** - Enhanced Git capabilities
- **Bracket Pair Colorizer** - Color matching brackets
- **Material Icon Theme** - Better file icons

## Project Structure
```
ritefit-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
├── server/                # Express backend
│   ├── routes.ts          # API routes
│   └── index.ts           # Server entry point
├── shared/                # Shared types/schemas
├── static_website_new/    # Static HTML version
└── package.json           # Dependencies
```

## Development Workflow

### Frontend Development
- Edit files in `client/src/`
- Hot reload enabled - changes appear instantly
- Tailwind CSS for styling
- React Router for navigation

### Backend Development
- Edit files in `server/`
- TypeScript with hot reload
- Express.js REST API
- Database integration ready

### Database Setup (Optional)
If you need database functionality:
1. Set up PostgreSQL locally or use a cloud service
2. Update `DATABASE_URL` in `.env`
3. Run migrations: `npm run db:push`

## Available Scripts
```bash
npm run dev          # Start development servers
npm run build        # Build for production
npm run start        # Start production server
npm run db:push      # Push database schema changes
```

## Debugging in VS Code/Cursor

### 1. Create Debug Configuration
Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Backend",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/server/index.ts",
      "env": {
        "NODE_ENV": "development"
      },
      "runtimeArgs": ["-r", "tsx/cjs"]
    }
  ]
}
```

### 2. Set Breakpoints
- Click in the gutter next to line numbers
- Use F5 to start debugging
- Use browser dev tools for frontend debugging

## Common Issues & Solutions

### Port Already in Use
```bash
# Kill processes on port 5000
npx kill-port 5000

# Or use different port
PORT=3001 npm run dev
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

## Hot Tips for Development

1. **Use Terminal in VS Code**: View → Terminal (Ctrl+`)
2. **Split Terminal**: Use multiple terminals for frontend/backend
3. **Auto-format on Save**: Enable Prettier in settings
4. **Use Emmet**: Built-in HTML/CSS abbreviations
5. **Git Integration**: Use Source Control panel (Ctrl+Shift+G)

## Building for Production
```bash
npm run build
npm run start
```

The built files will be in `dist/` directory.

## Static Website Development
If you want to work on the static HTML version:
- Files are in `static_website_new/`
- Open `index.html` directly in browser
- Use Live Server extension for auto-reload

Your local development environment is now ready! The website will auto-reload as you make changes.