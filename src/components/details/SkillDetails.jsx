import React from "react";
import { TopicIcon } from "../common/TopicIcon";

export function SkillDetails({ skill }) {
  return (
    <div className="details">
      <div className="detail-kicker">SKILL / {skill.level.toUpperCase()}</div>
      <div className="detail-icon">
        <TopicIcon topic={skill.name} size={25} />
      </div>
      <h2>{skill.name}</h2>
      <p>{skill.proof}</p>
      <div className="detail-box">
        <span>STATUS</span>
        <b>{skill.level}</b>
      </div>
      <h4>Evidence</h4>
      <p>
        This skill is represented honestly as a current learning state. Expand the data
        object in <code>src/data.js</code> whenever you have a stronger project,
        certification or measurable result to attach.
      </p>
    </div>
  );
}
