import React from "react";
import { createElement } from "react";
import { data } from "./Data";
import "./Style.scss";

function CreateElements({ ImgSRC, Name, Date, Reacted, Area }) {
    return React.createElement(
    "div",
    { className: "notification unread" },
    createElement(
        "div",
        { className: "image" },
        createElement("img", { src: ImgSRC })
    ),
    createElement(
        "div",
        { className: "category" },
        createElement("p", null, Name),
        createElement("p", null, Date)
    ),
    createElement("p", null, Reacted),
    createElement("h4", null, Area)
    );
}

const ReturnElements = () => {
    for(let i = 0; i < data.length ; i++) {
        content.push(<CreateElements 
            key={i}
            ImgSRC={data[i].image}
            Name={data[i].name}
            Date={data[i].time}
            Reacted={data[i].message}
            Area={data[i].reacted}
        />)
    }
    return content
}


const content = []



const Notifications = document.querySelectorAll('.notification')


const Res = () => {
    Notifications.forEach((item) => {
        item.classList.remove('unread')
    })
}

const Project = () => {
    return (
    <div className="project">
        <div className="container">
        <div className="header">
            <h2>
            Notifications{" "}
            <div className="span">
                <h3>{data.length}</h3>
            </div>{" "}
            </h2>
            <h5 className='reset' onClick={Res}>Mark All Is Read</h5>
        </div>
        <ReturnElements />
        </div>
    </div>
    );
};

export default Project;
