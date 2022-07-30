
import React, { useState } from "react";

interface IProps {
  open?: boolean;
  title1: string;
  title2: string;
  children: React.ReactNode;
}
const Collapsible: React.FC<IProps> = ({ open, children, title1, title2 }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <div>
          <div className="p-3 border-bottom d-flex justify-content-between">
            <h6 className='expertTopic' style={{fontSize:'1vw', fontWeight:'bolder', paddingRight:'2vw'}}>{title1}</h6>
            <br/>
            <br/>
            <h6 className='expertTopic' style={{fontSize:'1vw', fontWeight:'bolder', paddingRight:'2vw'}}>{title2}</h6>

            <button type="button" className="btn" onClick={handleFilterOpening}>
              {!isOpen ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-up"></i>
              )}
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