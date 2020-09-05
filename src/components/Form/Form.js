import React from "react";

import sounOnImg from "../../images/sounfOn.png";
import sounOffImg from "../../images/sounfOff.png";

const Form = ({
  soundOn,
  setSoundOn,
  sendForm,
  RandomVerbs,
  check,
  skip,
  error,
}) => (
  <form
    className={`Form ${error ? "error" : ""}`}
    onSubmit={(e) => sendForm(e)}
  >
    <div className="sound">
      {soundOn ? (
        <img onClick={() => setSoundOn(!soundOn)} src={sounOnImg} alt="" />
      ) : (
        <img onClick={() => setSoundOn(!soundOn)} src={sounOffImg} alt="" />
      )}
    </div>
    <div className="input">{RandomVerbs}</div>

    <div className="buttons">
      <button className="check" disabled={error} onClick={() => check()}>
        Check
      </button>
      <button className="skip" disabled={error} onClick={() => skip()}>
        Skip
      </button>
    </div>
  </form>
);

export default Form;
