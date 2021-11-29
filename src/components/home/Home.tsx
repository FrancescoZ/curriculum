import { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import useTypewriter from "react-typewriter-hook";
import ScrollAnimation from "react-animate-on-scroll";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import pdf from "../../files/curriculum.pdf";
import { BsChevronDoubleDown } from "react-icons/bs";


//Update wordsDisplay data
const wordsDisplay = [
    "I'm a passionate software engineer",
    "I'm an hobbist photographer",
    "Scroll down to see more"
];
let index = 0;

function Home() {
    const [displayName, setDisplayName] = useState("Welcome to my webpage");
    const intervalRef = useRef({});
    const name = useTypewriter(displayName);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            // index = Math.floor(Math.random() * wordsDisplay.length);
            // index = index > 2 ? 0 : ++index;
            index = index > wordsDisplay.length ? 0 : ++index;
            setDisplayName(wordsDisplay[index]);
        }, 5000);
        return function clear() {
            clearInterval(+intervalRef.current);
        };
    }, [displayName]);

    function handleClick(event) {
    }


    return (
        <section className="section home" id="home">
            <Row>
                <Col xs={6} md={4} className="home-col">
                    <ScrollAnimation animateIn="animate__fadeIn">
                        <h2>Hello, my name is</h2>
                        <h1 className="home">Francesco<br />Zanoli</h1>
                        <p>
                            <span>{name}</span>
                        </p>
                        <p>
                            <span />
                        </p>
                        <Button
                            className="button-home"
                            variant="dark"
                            size="lg"
                            target="_blank"
                            href={pdf}
                        >
                            <PictureAsPdfIcon fontSize="large" />
                            Download CV
                        </Button>
                    </ScrollAnimation>
                </Col>
                <Col xs={6} md={4} className="scroll-container">
                    <a href="#timeline" onClick={handleClick} >
                        <BsChevronDoubleDown size="100" className="scroll" />
                    </a>
                </Col>
                <Col xs={6} md={4} className="image-container">
                </Col>
            </Row>
        </section>
    );
}

export default Home;
