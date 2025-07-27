import Competencias from "../components/Competencias";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Projetos from "../components/Projetos";
import Header from "../components/Header";
import Sobre from "../components/Sobre";
import "../styles/global.css"
import { useEffect, useState } from "react";

function Index() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div id="loader" className={isLoading ? "visible" : "hidden"}>
                <img src="/loading.gif" />
            </div>
            <div id="content" className={isLoading ? "hidden" : "visible"}>
                <Header />
                <Sobre />
                <Projetos />
                <Competencias />
                <Contacto />
                <Footer />
            </div>
        </div>
    );
}

export default Index;