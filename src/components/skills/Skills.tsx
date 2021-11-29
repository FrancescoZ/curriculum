import { Row, Col } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { useState } from "react";
import "./Skills.css";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import ScrollAnimation from "react-animate-on-scroll";
import AddIcon from '@material-ui/icons/Add';

import {
    DiRuby,
    DiPython,
    DiJavascript1,
    DiDotnet,
    DiNodejsSmall,
    DiReact
} from "react-icons/di";
import {
    SiElixir,
    SiDocker,
    SiKubernetes,
    SiTensorflow,
    SiAmazonaws,
    SiTypescript
} from "react-icons/si";
import {
    AiFillGitlab,
    AiOutlineConsoleSql
} from "react-icons/ai";
import {FaVuejs} from "react-icons/fa";

const generateSkill = (name, icon) => {
    return {
        name: name,
        style: {
            background: "#122",
            color: "#fff",
            width: "5rem",
            height: "5rem",
            margin: "10px auto"
        },
        icon: icon
    };
};
const big = 70;
const normal = 60;
const small = 40;
const skills = [
    generateSkill("Python", <DiPython size={big} />),
    generateSkill("Elixir", <SiElixir size={normal} />),
    generateSkill("Javascript", <DiJavascript1 size={big} />),
    generateSkill("C#", <DiDotnet size={normal} />),
    generateSkill("Node JS", <DiNodejsSmall size={big} />),
    generateSkill("Typescript", <SiTypescript size={small} />),
    generateSkill("React", <DiReact size={big} />),
    generateSkill("SQL", <AiOutlineConsoleSql size={normal} />),
    generateSkill("Tensorflow", <SiTensorflow size={small} />),
    generateSkill("AWS", <SiAmazonaws size={normal} />),
    generateSkill("Kubernetes", <SiKubernetes size={normal - 10} />),
    generateSkill("Docker", <SiDocker size={normal} />),
    generateSkill("Ruby", <DiRuby size={small} />),
    generateSkill("GitlabCI", <AiFillGitlab size={small}/>),
    generateSkill("Vue", <FaVuejs size={small}/>)
];

function Skill() {
    const [index, setIndex] = useState(4);

    const loadMore = (_event) => {
        let newIndex = index + 4;
        if (newIndex > skills.length)
            newIndex = skills.length;
        setIndex(newIndex)
    }

    const addButton = () => {
        if (index < skills.length)
            return (
                <Button
                    onClick={loadMore}
                    size="large"
                    color="primary"
                >
                    <AddIcon
                        style={{color: "white"}}
                        fontSize="large" />
                </Button>
            );
        else return;
    };

    const getSkillsElements = () =>
        skills.slice(0, index).map((skillCategory, index) => (
            <Col key={index} lg="3">
                <ScrollAnimation
                    animatePreScroll={false}
                    animateIn="animate__flipInX">
                    <CardContent>
                        <Avatar style={{ ...skillCategory.style }}>
                            {skillCategory.icon}
                        </Avatar>
                        <h3
                            dangerouslySetInnerHTML={{ __html: skillCategory.name }}
                        />
                    </CardContent>
                </ScrollAnimation>
            </Col>

        ));

    return (
        <section className="section skill" id="skill">
            <div>
                <h1>Skills</h1>
            </div>
            <div>
                <Row>
                    {getSkillsElements()}
                </Row>
                <Row>
                    <Col>
                        {addButton()}
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Skill;
