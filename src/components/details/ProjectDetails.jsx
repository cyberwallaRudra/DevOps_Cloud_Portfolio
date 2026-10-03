import React from "react";
import { TopicIcon } from "../common/TopicIcon";
import { DetailBlock } from "../common/DetailBlock";

export function ProjectDetails({ project }) {
  return (
    <div className="details">
      <div className="detail-kicker">
        {project.category} / {project.year}
      </div>

      <div className="detail-hero">
        <span>{project.status}</span>
        <div className="detail-hero-icon">
          <TopicIcon topic={project.title} size={30} />
        </div>
        <b>{project.title}</b>
      </div>

      <p className="detail-summary">{project.summary}</p>

      <DetailBlock title="01 / WHY I BUILT IT">
        <p>{project.problem}</p>
      </DetailBlock>

      <DetailBlock title="02 / TOOLS">
        <div className="detail-tags">
          {project.tools.map((tool) => (
            <span key={tool}>
              <TopicIcon topic={tool} size={13} />
              {tool}
            </span>
          ))}
        </div>
      </DetailBlock>

      <DetailBlock title="03 / MY CONTRIBUTION">
        <ul>
          {project.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </DetailBlock>

      <DetailBlock title="04 / WHERE I LEARNED">
        <p>{project.learned}</p>
      </DetailBlock>

      <DetailBlock title="05 / GUIDANCE">
        <p>{project.guidance}</p>
      </DetailBlock>

      <DetailBlock title="06 / CHALLENGES">
        <p>{project.challenges}</p>
      </DetailBlock>

      <DetailBlock title="07 / RESULT">
        <p>{project.outcome}</p>
      </DetailBlock>

      <DetailBlock title="08 / NEXT ITERATION">
        <p>{project.next}</p>
      </DetailBlock>
    </div>
  );
}
