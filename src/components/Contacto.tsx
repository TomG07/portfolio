import { useState } from "react";

function Contacto() {
    const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Contacto de ${formData.nome}`);
        const body = encodeURIComponent(
            `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`
        );

        window.location.href = `mailto:teuemail@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contacto" className="contacto-section">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit} className="contacto-form">
                <input
                    type="text"
                    name="nome"
                    placeholder="O teu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="contacto-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="O teu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contacto-input"
                />
                <textarea
                    name="mensagem"
                    placeholder="Escreve a tua mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="contacto-textarea"
                />
                <button type="submit" className="contacto-button">
                    Enviar
                </button>
            </form>
        </section>
    );
}

export default Contacto;
