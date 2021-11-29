import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import SchoolIcon from "@material-ui/icons/School";
import AddIcon from '@material-ui/icons/Add';
import DotIcon from "@material-ui/icons/FiberManualRecord";
import { Row, Col, Container, Button } from "react-bootstrap";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import { SiVodafone, SiApple, SiQuasar } from "react-icons/si";
import { GiPositionMarker, GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaIdBadge } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { useState } from 'react';

const timeline = [
    {
        date: "November 2019 - Today",
        event: "Senior Software Engineer", employer: "Onfido",

        location: "Lisbon, Portugal",
        detail: "Development of a <b>micro-services</b> environment for the biometrics verification product. In charge of the Quality Control process and of the creation of the new liveness product, focusing on its <b>maintainability and scalability</b>",
        icon: <FaIdBadge />,
        type: "work",
        duration: "On going",
        technologies: "Elixir, Python, Ruby, Docker, Kubernets, AWS, React, Redux, Typescript",
        link: "onfido.com"
    },
    {
        date: "June 2019",
        title: "Could deep learning in neural networks improve the QSAR models?",

        location: "Milan, Italy",
        detail: "Accademic Paper on DeepLearning",
        icon: <BsNewspaper />,
        type: "paper",
        technologies: "Python",
        link: "https://www.tandfonline.com/eprint/PGYFEJABGMYG5FCXWCDN/full?target=10.1080/1062936X.2019.1650827"
    },

    {
        date: "September 2018 - November 2019",
        event: "Artificial Intelligence Software Engineer", employer: "Vodafone",

        location: "Milan, Italy",
        detail: "Development of a <b>multi-channel ChatBot</b> (TOBI) using Microsoft AI services. Creating the Vodafone <b>Cloud Platform for AI</b>",
        icon: <SiVodafone />,
        type: "work",
        duration: "1y",
        technologies: "C#, Azure Cloud, Java, React, Redux, Typescript",
        link: "vodafone.it"
    },

    {
        date: "December 2018",
        title: "T-Tox: A new deep learning model to predict mutagenicity of chemicals",
        location: "Milan, Italy",
        detail: "Master Thesis on DeepLearning",
        icon: <BsNewspaper />,
        type: "paper",
        technologies: "Python",
        link: "https://www.politesi.polimi.it/bitstream/10589/144738/3/2018_12_Zanoli.pdf"
    },
    {
        date: "Sept 2016 - December 2018",
        title: "MSc in Computer Science and Engineering",
        university: "Politecnico di Milano",
        location: "Milan, Italy",
        icon: <SchoolIcon />,
        type: "school",
        link: "https://www.polimi.it/"
    },
    {
        date: "May 2018 - Semptember 2018",
        event: "Technical Specialist", employer: "Apple",

        location: "Milan, Italy",
        detail: "Applied problem solving skills to solve customer issues",
        icon: <SiApple />,
        type: "work",
        duration: "6m",
        technologies: "nil",
        link: "apple.com"
    },
    {
        date: "June 2017 - December 2017",
        title: "Exchange program in Computer Science",
        university: "Hindustan University",
        location: "Chennai, India",
        icon: <SchoolIcon />,
        type: "school",
        link: "https://hindustanuniv.ac.in/"
    },
    {
        date: "April 2016 - Semptember 2016",
        event: "Research Engineer Intern", employer: "AASDAP",

        location: "Sao Paolo, Brazil",
        detail: "Creation of a <b>C# Compiler</b> to create, build and execute <b>visual block coded programs</b>. Handling interaction with external I/O: VR environment, <b>humanoid robot</b>, µs timers and IOT devices",
        icon: <GiEarthAfricaEurope />,
        type: "work",
        duration: "6m",
        technologies: "Python, C++, C#",
        link: "https://aasdap.org.br/"

    },
    {
        date: "Sept 2014 - June 2016",
        title: "Double Degree in Industrial Engineering",
        university: "Ecole Centrale de Lyon",
        location: "Lyon, France ",
        icon: <SchoolIcon />,
        type: "school",
        link: "https://www.ec-lyon.fr/"
    },
    {
        date: "April 2015 - November 2016",
        event: "Full stack Developer", employer: "Creatella",
        location: "Singapore, Remote",
        detail: "Design & Development of a strong and clean <b>MVC platform</b> to ensure maintainability, scalability and security. Management and development of a <b>video chat</b> based on REST API",
        icon: <AiOutlineLoading3Quarters />,
        type: "work",
        duration: "1y",
        technologies: "React, PHP, NodeJS",
        link: "https://creatella.ventures/"
    },

    {
        date: "Sept 2012 - Sept 2016",
        title: "BSc in Computer Science Engineering",
        university: "Politecnico di Milano",
        location: "Milan, Italy",
        icon: <SchoolIcon />,
        type: "school",
        link: "https://www.polimi.it/"
    },
    {
        date: "May 2011 - November 2013",
        event: "Full stack Developer", employer: "Quasar Free",
        location: "Cervia, Italy",
        detail: "Creation of a complex management system and <b>CRM</b> for hotels in C#.",
        icon: <SiQuasar />,
        type: "work",
        technologies: "C#, WPF, Javascript",
        duration: "2y",
        link: "https://www.quasarcervia.it/default.asp?ID_pagina=4374"
    },

    {
        date: "Sept 2007 - June 2012",
        location: "Cesena, Italy",
        university: "ITT Blaise Pascal",
        title: "Secondary School Diploma in Industral Engineering",
        icon: <SchoolIcon />,
        type: "school",
        link: "https://www.ioscelgoittpascal.it/"
    }
];

function Timeline() {
    const [index, setIndex] = useState(3);

    const loadMore = () => {
        let newIndex = index + 4;
        if (newIndex > timeline.length)
            newIndex = timeline.length;
        setIndex(newIndex)
    }

    const addButton = () => {
        if (index < timeline.length)
            return (
                <AddIcon />);
        else return (
            <DotIcon />
        );
    };

    const iconColor = (t) => {
        if (t === "work") return "var(--color-1)";
        else if (t === "paper") return "var(--color-3)";
        else return "var(--color-2)";
    };

    const createWorkStep = (step) => (
        <div>
            <p>{"{"}</p>
            <Container>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Role</span>:</Col>
                    <Col xl lg="6"><span className="role"><b>"{step.event}"</b></span></Col>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Company</span>:</Col>
                    <Col xl lg="6"><span className="role"><a href={step.link}>"<b>{step.employer}</b>"</a></span></Col>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Details</span>:</Col>
                    <Col xl lg="6"><span className="role" dangerouslySetInnerHTML={{ __html: `"${step.detail}"` }}></span></Col>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Duration</span>:</Col>
                    <Col xl lg="6"><span className="role">{step.duration}</span></Col>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Tech</span>:</Col>
                    <Col xl lg="6"><span className="role">[{step.technologies}]</span></Col>
                </Row>
            </Container>
            <p>{"}"}</p>
            <span> <GiPositionMarker />{step.location}</span >
        </div>);

    const createEducationStep = (step) => {
        return <div>
            <p>{"{"}</p>
            <Container>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Title</span>:</Col>
                    <Col xl lg="6"><span className="role">"<b>{step.title}</b>"</span></Col>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="4"><span className="role-title">University</span>:</Col>
                    <Col xl lg="6"><span className="role"><a href={step.link}>"{step.university}"</a></span></Col>
                </Row>
            </Container>
            <p>{"}"}</p>
            <span> <GiPositionMarker />{step.location}</span >
        </div>
    };

    const createArticleStep = (step) => {
        return <div>
            <p>{"{"}</p>
            <Container>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Details</span>:</Col>
                    <Col xl lg="6"><span className="role">"{step.detail}"</span></Col>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Title</span>:</Col>
                    <Col xl lg="6"><span className="role">"<b>{step.title}</b>"</span>
                        <Button
                            variant="dark"
                            size="sm"
                            href={step.link}
                        >
                            <PictureAsPdfIcon fontSize="small" />
                            Download
                        </Button>

                    </Col>
                </Row>
                <Row xs="auto" className="justify-content-md-center">
                    <Col xs lg="3"><span className="role-title">Tech</span>:</Col>
                <Col xl lg="6"><span className="role">[{step.technologies}]</span></Col>
                </Row>
                </Container>
                <p>{"}"}</p>
                    <span> <GiPositionMarker />{step.location}</span >
        </div>
    };


    const getTimelineElements = () =>
        timeline.slice(0, index).map((step, ind) => (
            <VerticalTimelineElement
                key={ind}
                position={step.type === "work" ? "left" : "right"}
                triggerOnce={false}
                contentStyle={{
                    background: "rgb(52 60 68)", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)", fontFamily: "Roboto Mono, monospace", fontSize: "17px"
                }}
                contentArrowStyle={{ borderLeft: "7px solid rgb(52 60 68)" }}
                date={step.date}
                dateClassName="education-date"
                iconStyle={{ background: iconColor(step.type), color: "#fff" }}
                icon={step.icon}
            >
                {
                    step.type === "work" ? createWorkStep(step) : step.type === "paper" ? createArticleStep(step) : createEducationStep(step)
                }
            </VerticalTimelineElement>
        ));
    return (
        <section className="section timeline" id="timeline">
            <div>
                <h1>Timeline</h1>
                <VerticalTimeline >
                    {getTimelineElements()}
                    <VerticalTimelineElement
                        iconOnClick={loadMore}
                        iconStyle={{
                            background: "var(--color-1)",
                            color: "#071a52",
                            cursor: "pointer"
                        }}
                        icon={addButton()}
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Timeline;
