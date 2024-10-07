import React from 'react';

const Lista = ({ titulo, img }) => {
  return (
    <div>
      <button type="button" className="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--variant-elevated button-style">
        <span className="v-btn__overlay"></span>
        <span className="v-btn__underlay"></span>
        <span className="v-btn__content" data-no-activator>
          <i className={`mdi ${img} mdi v-icon notranslate v-theme--light`} aria-hidden="true"></i>
          <h3 className="text-position">{titulo}</h3>
        </span>
      </button>
    </div>
  );
};

export default Lista;