import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "insert your key here",
});


const openai = new OpenAIApi(config)

export default openai;