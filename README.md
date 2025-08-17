## What is this project?

This is my personal portfolio site, my previous portfolio sites can also be found on GitHub. See cmrnsmrt-v3/v2/v1.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Local deployment

1. **Install dependencies:**
   ```sh
   npm install
   # or, if you use bun:
   bun install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   # or
   bun run dev
   ```
   The app will be available at http://localhost:5173 (or as indicated in the terminal).

### Production Build

1. **Build the app:**
   ```sh
   npm run build
   ```
2. **Preview the production build:**
   ```sh
   npm run preview
   ```

### Run in a Container (Docker)

1. **Build the Docker image:**
   ```sh
   docker build -t software-engineer-resume .
   ```
   > **Note:** If you do not use Bun, you may not have a `bun.lockb` file. The Dockerfile will work with either Bun or npm.
2. **Run the container:**
   ```sh
   docker run -p 4173:4173 software-engineer-resume
   ```
   The app will be available at http://localhost:4173

### Deploy to Azure

You can deploy the Docker image to Azure Web App for Containers or Azure Container Apps. See [Azure documentation](https://learn.microsoft.com/en-us/azure/app-service/quickstart-custom-container?tabs=dotnet&pivots=container-linux) for details.