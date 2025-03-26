import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactForm() {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");  // Přidáme stav pro jméno
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Odesílám...");

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message, name }),  // Posíláme jméno uživatele
            });

            const data = await response.json();
            if (response.ok) {
                setStatus("Email úspěšně odeslán!");
                setMessage(""); // Vymazání textového pole po odeslání
                setName("");    // Vymazání jména po odeslání
            } else {
                setStatus(`Chyba: ${data.error}`);
            }
        } catch (error) {
            setStatus("Chyba při odesílání e-mailu.",error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card bg-light text-dark p-4 shadow-lg">
                <h2 className="text-center">Máte dotazy nebo zájem o spolupráci?</h2>
                <p className="text-center">Rád se s vámi spojím!</p>
                <form onSubmit={handleSubmit} className="text-center">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Vaše jméno"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <textarea
                        className="form-control bg-light text-dark mb-3"
                        rows="4"
                        placeholder="Máte nějaký dotaz? Můžete mě napsat..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary">Odeslat</button>
                </form>

                {status && <p className="mt-3 text-center">{status}</p>}
            </div>
        </div>
    );
}
