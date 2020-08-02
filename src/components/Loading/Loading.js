import React from "react";
function Loading() {
  return (
    <div>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span className="pl-1">Loading...</span>
    </div>
  );
}

export default Loading;
