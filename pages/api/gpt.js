const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function gptHandler(req, res) {

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body,
      max_tokens: 2000,
      temperature: 0,
    });
    if(!response.status ==="ok"){
        throw new Error("Something went wrong")
    }
    let data = response.data.choices[0].text

    res.status(200).json(data)
   
  } catch (error) {
    res.status(500).json(error.message)
  }
}



