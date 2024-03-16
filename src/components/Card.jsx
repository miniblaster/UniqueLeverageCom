import React from "react";

export default function Card(props) {
    return (
        <div className="section3">
        <div className="sec3text">
          <div className="sec3texttitle">{props.title}</div>
          <div className="sec3textsmall">
            {props.desc}
          </div>
          <div className="sec3textradio">
            <div>
              <img src="/img/icon-8.svg" />
              {props.check1}
            </div>
            <div>
              <img src="/img/icon-8.svg" />
              {props.check2}
            </div>
            <div>
              <img src="/img/icon-8.svg" />
              {props.check3}
            </div>
          </div>
          <div className="actions mb-4">
            <button className="default">
              Schedule a Demo
              <img src="/img/svg-8.svg" alt="" style={{ marginLeft: "10px" }} />
            </button>
            <button className="secondary">Request Quote</button>
          </div>
        </div>
        <div className="sec5img">
          <div></div>
        </div>
      </div>
    )
}