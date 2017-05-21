import React from 'react';

export default class EligibilityFilter extends React.Component {
  render () {
    return (
      <div className="form-group">
        <label className="col-md-4 control-label" for="Eligibility">Eligibility</label>
        <div className="col-md-4">
        <div className="checkbox">
          <label for="Eligibility-0">
            <input name="Eligibility" id="Eligibility-0" value="criminal_history" type="checkbox" />
            Criminal history
          </label>
        </div>
        <div className="checkbox">
          <label for="Eligibility-1">
            <input name="Eligibility" id="Eligibility-1" value="commercial_sex_industry" type="checkbox" />
            Commercial Sex Industry
          </label>
        </div>
        <div className="checkbox">
          <label for="Eligibility-2">
            <input name="Eligibility" id="Eligibility-2" value="lgbtq" type="checkbox" />
            LGBTQ
          </label>
        </div>
        <div className="checkbox">
          <label for="Eligibility-3">
            <input name="Eligibility" id="Eligibility-3" value="hiv_aids" type="checkbox" />
            HIV / AIDS
          </label>
        </div>
        </div>
      </div>
    );
  }
}