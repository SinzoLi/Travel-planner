const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(apiKey)

const modal = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        "role": "user",
        "parts": [
          "Generate Travel Plan:"
        ]
      },
      {
        "role": "model",
        "parts": [
          
        ]
      }
    ],
  });