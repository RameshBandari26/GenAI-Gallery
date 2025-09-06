// server/controllers/GenerateAIImage.js

// server/controllers/GenerateAIImage.js
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const generateAIImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      { prompt },
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // important, image comes as binary
      }
    );

    // Convert binary to base64
    const base64Image = Buffer.from(response.data, "binary").toString("base64");

    return res.status(200).json({ photo: base64Image });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error.response?.data?.error || error.message || "Image generation failed",
    });
  }
};




// import * as dotenv from "dotenv";
// import { createError } from "../error.js";
// import { Configuration, OpenAIApi } from "openai";

// dotenv.config();

// // setup openai api key
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// // controller to generate ai image
// export const generateAIImage = async (req, res, next) => {
//   try {
//     const { prompt } = req.body;

//     const response = await openai.createImage({
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });

//     const generatedImage = response.data.data[0].b64_json;
//     return res.status(200).json({ photo: generatedImage });
//   } catch (error) {
//     next(
//       createError(
//         error.status,
//         error?.response?.data?.error?.message || error.message
//       )
//     );
//   }
// };



// server/controllers/GenerateAIImage.js

// import axios from "axios";
// import { createError } from "../error.js";
// import * as dotenv from "dotenv";

// dotenv.config();

// const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

// // controller to generate AI image using Hugging Face
// export const generateAIImage = async (req, res, next) => {
//   try {
//     const { prompt } = req.body;

//     const response = await axios.post(
//   "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
//   { inputs: prompt, options: { wait_for_model: true } },
//   {
//     headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}` },
//     responseType: "arraybuffer",
//   }
// );



//     // convert binary to base64
//     const base64Image = Buffer.from(response.data, "binary").toString("base64");

//     return res.status(200).json({ photo: base64Image });
//   } catch (error) {
//     next(createError(error.status || 500, error.message));
//   }
// };
