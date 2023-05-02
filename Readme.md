# ReactJS Chrome Extension with GPT-3 integration and Webpage text clipping

# Steps for installation

## clone the project

## Install the dependencies
```
yarn
```

## Run the project
```
yarn build
```

### In your browser (chromium based):
-> Manage Extensions
-> Turn on Developer mode
-> Load unpacked extension
-> Locate the dist file in the project directory

### For openAI key, insert your apikey into lib/chatgpt.tsx  (there are some errors with .env currently, tried dotenv package as well) DO NOT COMMIT!

### Open a webpage (might need to reload if page was already there before extension init. Then press Ctrl+Shift+Y for the web clipper to activate.
