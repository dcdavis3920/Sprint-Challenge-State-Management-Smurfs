import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const SmurfList = (props) => {
  return (
    <div>
      {props.smurf.map((smurf) => (
        <div key={smurf.id}>
          <h1>{smurf.name}</h1>
          <h2>{smurf.age}</h2>
          <h2>{smurf.height}</h2>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
