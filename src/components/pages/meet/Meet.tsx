import React, { Fragment } from 'react';

const Meet = () => {
  const memberDetails = [{}, {}, {}, {}, {}, {}];
  return (
    <Fragment>
      {memberDetails.map((member, i) => (
        <div className="grid-container" key={i}>
          <div className="member-details">
            <p>
              At ICON.I.C, we are on a social mission to support and create,
              innovative and strategic measures to cut down unemployment already
              from an early phase and strengthen individuals in attaining a
              solid and profound ground in their respective fields through the
              measures we put in place per time.
            </p>
          </div>
          <div className="member-picture">
            <img
              src="https://res.cloudinary.com/fabrixrus/image/upload/v1574077307/test.png"
              alt="Charlie Sheen"
            />
          </div>
          <span className="member-role">
            <span className="role">Chief Technology Office (C.T.O)</span>
            <span className="name">Israel Akintunde</span>
          </span>
        </div>
      ))}
    </Fragment>
  );
};

export default Meet;
