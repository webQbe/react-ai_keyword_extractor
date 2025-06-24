# React-AI Keyword Extractor
- Building & deploying AI powered keyword extractor
- User can extract keywords from articles 
- When a user enter text and click **Extract Keywords** button, it will open a modal with the extracted keywords.
- Using **OpenAI Completions API** and **Chakra UI** library

### 1. Create React App 
1. Download and Install **Node.js** on project root directory
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`

5. Install dependencies:
    1. Open terminal and run `npm install`
    2. Install packages:
        ```
        npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
        ```
6. Delete: `public/vite.svg`, `src/index.css`, and files in `src/assets` 
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify and Remove from `src/App.jsx`:
        ```
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        ```
    3. Clear contents in `src/App.css`

7. Start frontend and backend servers: `npm run dev`
