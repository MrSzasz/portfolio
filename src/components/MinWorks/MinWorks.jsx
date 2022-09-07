// =========================  STYLES  ========================= //

import "./MinWorks.scss";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import MinWorkCard from "../MinWorkCard/MinWorkCard";

const MinWorks = ({ works }) => {
  // ----------  RETURN  ---------- //

  return (
    <div className="minWorkContainer">
      {works.map((work) => (
        <MinWorkCard
        key={work.id}
          classCard={work.classCard}
          name={work.name}
          text={work.text}
          linkDeploy={work.linkDeploy}
          linkRepo={work.linkRepo}
        />
      ))}
    </div>
  );
};

export default MinWorks;
