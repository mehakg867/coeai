
import React, { useState } from "react";

interface IProps {
  close?: boolean;
  title: string;
  children: React.ReactNode;
}
const Collapsible: React.FC<IProps> = ({ close, children, title }) => {
  const [isOpen, setIsOpen] = useState(close);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="card">
        <div>

          <div className="p-3 d-flex ">
            <div className="bloc">
              <div className="block1">
            <h1 className='expertTopic' style={{fontSize:'1.4vw', fontWeight:'bolder', paddingRight:'2vw'}}>{title}</h1>
            </div>
            <div className="block2">
            <button type="button" className="btn" onClick={handleFilterOpening}>
            
              {!isOpen ? (
                  '^'
) : (
                'v'
              )}
            </button>
            </div>
            </div>
          </div>
        </div>

        <div>
          <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
