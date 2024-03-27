import React, { useState } from "react";
import Arrow from "../../assets/arrow.svg";
import "./info.css";

export default function Info({ title, content = null, equipments = null }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="info">
      <div className="info-title" onClick={() => setOpen(!open)}>
        {" "}
        <h3>{title}</h3> <button className={`${open ? "open" : ""}`}><img src={Arrow} /></button>
      </div>
      {open && content && <div className="info-content">{content}</div>}
      {open && equipments && (
        <div className="info-content">
          <ul>
            {equipments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
