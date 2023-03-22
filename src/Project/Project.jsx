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

Notifications.forEach((item) => {
    item.addEventListener('click' , function(e) {
        console.log('submited')
    })
})

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
            <h5>Mark All Is Read</h5>
        </div>
        <ReturnElements />
        {/* <div className="notification unread">
            <div className="image"></div>
            <div className="category">
            <p>Fares Yasser</p>
            <p>1M Ago</p>
            </div>
            <p>Reacted to your recent post</p>
            <h3>Chass Club</h3>
        </div> */}
        </div>
    </div>
    );
};

export default Project;
