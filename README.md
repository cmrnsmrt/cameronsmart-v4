# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cf9b162e-7931-4693-b6ab-15dd9b671fa0

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cf9b162e-7931-4693-b6ab-15dd9b671fa0) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?


### Local Development

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

---

Alternatively, you can still open [Lovable](https://lovable.dev/projects/cf9b162e-7931-4693-b6ab-15dd9b671fa0) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
