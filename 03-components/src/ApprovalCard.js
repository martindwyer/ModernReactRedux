import React from "react";

const ApprovalCard = (props) => {
  const approvalLink = "/" + props.id + "/approve";
  const denyLink = "/" + props.id + "/deny";

  return (
    <div className="extra content">
      <div className="ui two buttons">
        <div href={approvalLink} className="ui basic green button">
          Approve
        </div>
        <div href={denyLink} className="ui basic red button">
          Decline
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
