import React from 'react';
import './Cube.styled.scss';

function Cube() {
  return (
    <div className="cubes-position">
      <div className="cubes">
        <div className="cube" data-cube="111">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-z" data-cube="112" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="121">
          <div className="cube-wrap">
            <div className="cube-top" />
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="131">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-z" data-cube="132" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="211">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="111" />
              <div className="shadow-y" data-cube="111" />
              <div className="shadow-z" data-cube="212" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="221">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="121" />
              <div className="shadow-y" data-cube="121" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="231">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="131" />
              <div className="shadow-y" data-cube="131" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="311">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="211" />
              <div className="shadow-y" data-cube="211" />
              <div className="shadow-z" data-cube="312" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="321">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="221" />
              <div className="shadow-y" data-cube="221" />
              <div className="shadow-z" data-cube="322" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="331">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="231" />
              <div className="shadow-y" data-cube="231" />
              <div className="shadow-z" data-cube="332" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>

        <div className="cube" data-cube="112">
          <div className="cube-wrap">
            <div className="cube-top" />
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="122">
          <div className="cube-wrap">
            <div className="cube-top" />
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="132">
          <div className="cube-wrap">
            <div className="cube-top" />
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="212">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="112" />
              <div className="shadow-y" data-cube="112" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="222">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="122" />
              <div className="shadow-y" data-cube="122" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="232">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="132" />
              <div className="shadow-y" data-cube="132" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="312">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="212" />
              <div className="shadow-y" data-cube="212" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="322">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="222" />
              <div className="shadow-y" data-cube="222" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="332">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="232" />
              <div className="shadow-y" data-cube="232" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>

        <div className="cube" data-cube="113">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-z" data-cube="111" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="123">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-z" data-cube="121" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="133">
          <div className="cube-wrap">
            <div className="cube-top" />
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="213">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="113" />
              <div className="shadow-y" data-cube="113" />
              <div className="shadow-z" data-cube="211" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="223">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-y" data-cube="123" />
              <div className="shadow-z" data-cube="221" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="233">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-y" data-cube="133" />
              <div className="shadow-z" data-cube="231" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="313">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="213" />
              <div className="shadow-y" data-cube="213" />
              <div className="shadow-z" data-cube="311" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="323">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="223" />
              <div className="shadow-y" data-cube="223" />
              <div className="shadow-z" data-cube="321" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>
        <div className="cube" data-cube="333">
          <div className="cube-wrap">
            <div className="cube-top">
              <div className="shadow-flip" data-cube="233" />
              <div className="shadow-y" data-cube="233" />
              <div className="shadow-z" data-cube="331" />
            </div>
            <div className="cube-bottom" />
            <div className="cube-front-left" />
            <div className="cube-front-right" />
            <div className="cube-back-left" />
            <div className="cube-back-right" />
          </div>
        </div>

        <div className="large-shadows">
          <div className="large-shadow" data-cube="113" />
          <div className="large-shadow" data-cube="123" />
          <div className="large-shadow" data-cube="133" />
          <div className="large-shadow" data-cube="213" />
          <div className="large-shadow" data-cube="223" />
          <div className="large-shadow" data-cube="233" />
          <div className="large-shadow" data-cube="313" />
          <div className="large-shadow" data-cube="323" />
          <div className="large-shadow" data-cube="333" />
        </div>
      </div>
    </div>
  );
}

export default Cube;
