import Whiteboard from "@/components/Whiteboard";
import { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("black");
  const [tool, setTool] = useState("pencil");
  return (
    <div className="container-fluid ">
      <div className="row">
        <h1 className="display-5 pt-4 pb-3 text-center">
          Real time White Board
        </h1>
      </div>
      <div className="row justify-content-center align-items-center text-center py-2">
        <div className="col-md-2">
          <div className="color-picker d-flex align-items-center justify-content-center">
            Color Picker : &nbsp;
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3 d-flex justify-content-center py-2">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tools"
              id="pencil"
              value="pencil"
              checked={tool === "pencil"}
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
            />
            <label className="form-check-label" htmlFor="pencil">
              Pencil
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tools"
              id="line"
              value="line"
              checked={tool === "line"}
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
            />
            <label className="form-check-label" htmlFor="line">
              Line
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tools"
              id="rect"
              value="rect"
              checked={tool === "rect"}
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
            />
            <label className="form-check-label" htmlFor="rect">
              Rectangle
            </label>
          </div>
        </div>

        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => {}}
          >
            Undo
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-outline-success ml-1"
            onClick={() => {}}
          >
            Redo
          </button>
          &nbsp;&nbsp;
          <input
            type="button"
            className="btn btn-outline-danger"
            value="Clear"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="row">
        <Whiteboard />
      </div>
    </div>
  );
};

export default Home;
