import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";



const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ulmanfilip@gmail.com", // Použijte svůj e-mail
        pass: "yiomnnllxckuiduf", // Použijte App Password
    }
});

app.post("/send-email", async (req, res) => {
    const { message, name } = req.body;

    const mailOptions = {
        from: "ulmanfilip@gmail.com", // Může být i váš e-mail
        to: "ulmanfilip@gmail.com",   // E-mail, kam se zprávy posílají
        subject: `Nový vzkaz od ${name}`,  // Předmět e-mailu bude obsahovat jméno
        text: `Zpráva od ${name}:\n\n${message}`, // Tělo e-mailu s textem a jménem
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "E-mail úspěšně odeslán!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Chyba při odesílání e-mailu." });
    }
});

app.listen(5000, () => {
    console.log("Server běží na http://localhost:5000");
});