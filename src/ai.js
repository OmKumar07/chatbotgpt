
const { GoogleGenerativeAI } = require("@google/generative-ai");


// Initialize the API with the key
const apiKey = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);


async function run(input) {

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: { maxOutputTokens: 200, temperature: 0.9 },
    })
    const prompt = input.toString();

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    return error;
  }
}

run();

module.exports = { run };
