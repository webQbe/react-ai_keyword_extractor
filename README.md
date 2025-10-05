# React-AI Keyword Extractor
This repo is an adaptation of [Build a Keyword Extractor: React + OpenAI API + Chakra UI](https://www.youtube.com/watch?v=jJNPPP2YEdM) by Brad Traversy. I followed the tutorial to learn followings.
- Building & deploying AI powered keyword extractor
- User can extract keywords from articles 
- When a user enter text and click **Extract Keywords** button, it will open a modal with the extracted keywords.
- Using **OpenAI Completions API** and **Chakra UI** library


## What I changed
- Changed copy button text to "Copied" when clicked
- Switched to current Chat Completion model (`gpt-3.5-turbo`) 

## Getting Started

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

### 2. Set up OpenAI API
1. Login to `https://platform.openai.com/` 

2. Open API Keys page: `https://platform.openai.com/settings/organization/api-keys`
    1. Click **Create new secret key**
    2. Generate & Copy your key

3. Create `.env` file:
    ```
    VITE_OPENAI_API_KEY=your_openapi_key
    VITE_OPENAI_API_URL=https://api.openai.com/v1/chat/completions
    ```
    - Add `.env` file to `.gitignore` file

4. Go to `https://platform.openai.com/account/billing`
    1. Open **Payment methods** tab
    2. Click **Add payment method** to add your credit/debit card

## Credits
Original tutorial: [Build a Keyword Extractor: React + OpenAI API + Chakra UI](https://www.youtube.com/watch?v=jJNPPP2YEdM) — Brad Traversy.
This repo includes my changes (noted above).

## License
MIT License