import openai from "./chatgpt";

const query = async (prompt: string, model: string) => {
  const res = await openai.createCompletion({
      model,
      prompt, //fetching the prompt and model from chatinput component
      temperature: 0.9, //modify this to change the creativity of the response
      top_p: 1, 
      max_tokens: 1000, //modify this to change the length of the response
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `Oops I wasn't able to find awesome answers for you. (Error: ${err.message})`
    );
  return res;
};

export default query;
