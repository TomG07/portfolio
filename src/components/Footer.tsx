import { FaInstagram, FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    &copy; {new Date().getFullYear()} Tomás Frazão. Todos os direitos reservados.
                </p>
                <div className="footer-social">
                    <a
                        href="https://www.instagram.com/teu_usuario_instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="footer-icon instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://discord.gg/seu_discord_invite"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                        className="footer-icon discord"
                    >
                        <FaDiscord />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
