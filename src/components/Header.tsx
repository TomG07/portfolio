import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import "../styles/global.css";

function Header() {
    return (
        <div>
            <header id="header">
                <div className="personal-info">
                    <img src='url(https://tomasfrazao.eu/imagem?name=top-bg.png&password=$PASS)' alt="Top BG" id='top-bg' />
                    <div className='blur-area'>
                        <img src='url(https://tomasfrazao.eu/imagem?name=pessoal.png&password=$PASS)' alt="TF Logo" id='tf-logo' />
                        <div className='container-infos'>
                            <h1>Olá, sou o Tomás Frazão</h1>
                            <ReactTyped
                                strings={[
                                    'Futuro estudante de Engenharia Informática',
                                    'Apaixonado por código e design',
                                    'Crio soluções modernas e funcionais',
                                    'Entusiasta de tecnologias web',
                                    'Sempre a aprender e a evoluir',
                                    'Transformo ideias em realidade digital'
                                ]}
                                typeSpeed={60}
                                backDelay={3000}
                                fadeOut={true}
                                smartBackspace={true}
                                loop={true}
                            />
                            <Link to='projetos' smooth={true} duration={500} className="btn-cta">Ver Projetos</Link>
                        </div>
                    </div>
                </div>
            </header>
            <nav id="nav">
                <Link to="sobre" smooth={true} duration={500}>Sobre</Link>
                <Link to="projetos" smooth={true} duration={500}>Projetos</Link>
                <Link to="competencias" smooth={true} duration={500}>Competências</Link>
                <Link to="contacto" smooth={true} duration={500}>Contacto</Link>
            </nav>
        </div>
    )
}

export default Header;