import OpenAI from "openai";


const API_KEY = ""//add your api key here
const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMessageToOpenAI(message) {
  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: message,
      temperature: 0.9,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response.choices[0].text;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
