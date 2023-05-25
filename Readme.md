# ReactJS Chrome Extension with GPT-3 integration and Webpage text clipping
## OpenAi model integration

[gottext.mp4](https://github.com/abhrajitray77/reactjs-chrome-extension/assets/67530432/22754f00-0901-4126-85ec-211f320dcfff)

## clipping
[clipping.webm](https://github.com/abhrajitray77/reactjs-chrome-extension/assets/67530432/f7a0e2fa-31bd-4c78-bb52-6ac3e24b5889)

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

## In your browser (chromium based):
-> Manage Extensions
-> Turn on Developer mode
-> Load unpacked extension
-> Locate the dist file in the project directory

## For openAI key, insert your apikey into lib/chatgpt.tsx  (there are some errors with .env currently, tried dotenv package as well) DO NOT COMMIT!

## Open a webpage (might need to reload if page was already there before extension init. Then press Ctrl+Shift+Y for the web clipper to activate.
##Link to original template https://github.com/manshu/reactjs-chrome-extension
