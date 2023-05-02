# ReactJS Chrome Extension with GPT-3 integration and Webpage text clipping
## OpenAi model integration
[preview](https://user-images.githubusercontent.com/67530432/235746084-2c0694c6-c205-40a0-b034-533e745d548f.webm)
## clipping
[clipping.webm](https://user-images.githubusercontent.com/67530432/235746620-1cf1ccd7-87ea-4843-8ac9-8287596b2740.webm)

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
