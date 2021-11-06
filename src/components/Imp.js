import React from "react";

class Imp extends React.Component {
  state = {term: ""};

  render() {
    return (
      <div className="import-button ui segment">
        <form className="ui form">
          <div className="field">
            <button>
              <label>Import File</label>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Imp;
