import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const SmurfList = (props) => {
  console.log(props.smurf);
  useEffect(() => {
    props.getSmurf();
    console.log(props.smurf);
  }, []);
  return (
    <div>
      {props.smurf.map((smurf) => {
        return (
          <div key={smurf.id}>
            <h1>{smurf.name}</h1>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurf: state.smurf,
    // fetchingSmurfs: state.fetchingSmurfs,
    // error: state.error,
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
