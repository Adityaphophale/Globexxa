import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize server-side Gemini client utility
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey
    ? new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      })
    : null;

  // AI Assistant endpoint
  app.post("/api/assistant", async (req, res) => {
    try {
      if (!ai) {
        return res.status(200).json({
          text: "Hi there! I am the Globexxa B2B Trade & Compliance Assistant. Since my server-side GEMINI_API_KEY is not configured yet, I am running in local-advisory mode. I can still explain that Globexxa exports premium Indian-origin spices, grains, sugar, sauces, and packaged foods. Try setting up your key in **Secrets** for complete dynamic regulatory insights!",
        });
      }

      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      const systemInstruction = `
You are the senior B2B international trade and export compliance consultant for "Globexxa", a premium, enterprise-level private-label export solutions company headquartered in Vadodara, Gujarat, India, with international offices in Singapore and the USA.

Your tone of voice:
- Highly professional, knowledgeable, authoritative, and helpful corporate persona.
- Clear, confident, and direct. Avoid excessive technical jargon, but use standard B2B trade terms like Incoterms (FOB, CIF, DDP), Letters of Credit (LC), Phytosanitary Certificates, Custom Clearance, etc., appropriately.
- Answer questions in a structured and concise manner.

Provide helpful and accurate insights about exporting Indian-origin goods such as:
1. Agro products, Spices & Herbs, Grains/Staples (Basmati rice, Millets), Packaged foods, Organic goods, Sauces & Pastes.
2. Compliance certification (FSSAI, APEDA, IEC, Phytosanitary certification, ISO).
3. Packaging and custom branding options. Globexxa offers premium private-label solutions.
4. Export logistics, container freight coordination, custom clearance from Indian ports (Mundra, Nhava Sheva).
5. Explain Incoterms, payment terms, minimum order quantities (MOQ).

Do NOT mention internal software code, database columns, or API routes. Make it sound like a real premier advisory consultation. Keep responses structured and elegant.
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API Error in /api/assistant:", err);
      res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // Handle contact or quote submissions on server too
  app.post("/api/quote", (req, res) => {
    const quoteData = req.body;
    console.log("New B2B Quote Inquiry received:", quoteData);
    res.json({
      success: true,
      referenceNo: `GXXA-${Date.now().toString().slice(-6)}`,
      message: "Our B2B Global Trade desk has received your request and will contact you within 24 hours.",
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Globexxa Server running on port ${PORT}`);
  });
}

startServer();
