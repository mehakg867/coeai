
import React, { useState } from "react";
<<<<<<< HEAD

=======
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronUp,
//   faChevronDown
// } from "@fortawesome/fontawesome-free-solid";
>>>>>>> af46db9866b7a05956384ad491c39ec83a5f0c21
interface IProps {
  open?: boolean;
  title: string;
  children: React.ReactNode;
}
const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <div>
          <div className="p-3 border-bottom d-flex justify-content-between">
            <h6 className="font-weight-bold">{title}</h6>
            <button type="button" className="btn" onClick={handleFilterOpening}>
              {!isOpen ? (
<<<<<<< HEAD
               <i className="fa-solid fa-angle-down"></i>):( <i className="fa-solid fa-angle-down"></i>)                 
              }
=======
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-up"></i>
              )}
>>>>>>> af46db9866b7a05956384ad491c39ec83a5f0c21
            </button>
          </div>
        </div>

        <div className="border-bottom">
          <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;