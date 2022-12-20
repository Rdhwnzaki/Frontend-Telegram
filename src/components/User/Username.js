import React from "react";
import Assets from "../../images";

function Username() {
  return (
    <div>
      <img src={Assets.profile} alt="" className="mt-5" />
      <h4 className="mt-3">Gloria Mckinney</h4>
      <h6 className="mt-2 text-secondary">@wdlam</h6>
    </div>
  );
}

export default Username;
