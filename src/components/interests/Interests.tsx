import {
    Container,
    Row,
    Col,
    Carousel,
    Badge,
    ProgressBar
} from "react-bootstrap";

import travelling from "../../images/travelling.jpg";
import keyboard from "../../images/keyboard.jpeg";
import photography from "../../images/photography.jpg";

import "./Interests.css";

import { LinkedIn, Email, WhatsApp, GitHub } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { Camera, Keyboard, Flight  } from "@material-ui/icons";

const languages = [
    {
        title: "Italian",
        detail: "Native",
        percentage: "100",
        color: "success"
    },
    {
        title: "English",
        detail: "Fluent, C1 level",
        percentage: "85",
        color: "warning"
    },
    {
        title: "French",
        detail: "Proficient, C2 level",
        percentage: "90",
        color: "danger"
    },
    {
        title: "Portuguese",
        detail: "Elementary proficiency",
        percentage: "30",
        color: "info"
    }
];


const interests = [
    {
        src: photography,
        alt: "Photography",
        icon: <Camera fontSize="large" />,
        title: "Hobbiest Photographer"
    },
    {
        src: keyboard,
        alt: "Second slide",
        icon: <Keyboard fontSize="large" />,
        title: "Mechanical keyboard builder"
    },
    {
        src: travelling,
        alt: "Third slide",
        icon: <Flight fontSize="large" />,
        title: "Passionate Traveler"
    }];

function Interests() {
    return (
        <section className="section interests" id="interests">
            <Container>
                <h1>Interests & Languages</h1>
                <Row className="interests-row">
                    <Col lg="6">
                        <Carousel className="photoCarousel">
                            {interests.map((interestCarousel, index) => (
                                <Carousel.Item
                                    key={index}
                                    interval={3000}
                                    className="interests-img"
                                >
                                    <img
                                        className="d-block w-100"
                                        src={interestCarousel.src}
                                        alt={interestCarousel.alt}
                                    />
                                    <Carousel.Caption>
                                        <h3>
                                            <Badge>
                                                {interestCarousel.icon}
                                                {"  "}
                                                {interestCarousel.title}
                                            </Badge>
                                        </h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col lg="6">
                        {languages.map((language, index) => (
                            <div key={index}>
                                <h3>{language.title}</h3>
                                <h6>{language.detail}</h6>
                                <ProgressBar
                                    variant={language.color}
                                    now={+language.percentage}
                                />
                            </div>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Contacts</h1>
                        <IconButton
                            href="https://github.com/FrancescoZ"
                            target="_blank"
                            rel="noopener noreferrer">
                            <GitHub fontSize="large" />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/francescozanoli/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <LinkedIn fontSize="large" />
                        </IconButton>
                        <IconButton
                            href="https://wa.me/393929148300"
                            target="_blank"
                            rel="noopener noreferrer">
                            <WhatsApp fontSize="large" />
                        </IconButton>
                        <IconButton
                            href="mailto:francesco.zanoli@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Email fontSize="large" />
                        </IconButton>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Interests;
