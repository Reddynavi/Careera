import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    console.log("📩 New Contact Message Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optional: Save to database or send email (can add later)
    res.status(200).json({ success: true, msg: "Message received successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact message:", err);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

export default router;
