import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "insert your key here", //process.env not working for now so do not commit to git with your key
});


const openai = new OpenAIApi(config)

export default openai;