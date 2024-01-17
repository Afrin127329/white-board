import { useState } from "react";

const RoomPage = () => {
  // @ts-ignore
  const [roomId, setRoomId] = useState<any>();
  const [joinName, setJoinName] = useState<string>();
  const [joinRoomId, setJoinRoomId] = useState("");
  const [name, setName] = useState("");

  const handleJoinSubmit = () => {};

  const handleCreateSubmit = () => {};
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-5">
            Welcome To Realtime Whiteboard Sharing App
          </h1>
        </div>
      </div>
      <div className="row mx-5 mt-5">
        <div className="col-md-5 p-5 border mx-auto">
          <h1 className="text-center text-primary mb-5">Create Room</h1>
          <form onSubmit={handleCreateSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group my-2 border align-items-center">
              <input
                type="text"
                className="form-control border-0 outline-0"
                value={roomId}
                readOnly={true}
                style={{
                  boxShadow: "none",
                  zIndex: "0 !important",
                  fontSize: "0.89rem !important",
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-primary  border-0 btn-sm"
                  type="button"
                  onClick={() => {}}
                >
                  Generate
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn btn-outline-dark border-0 btn-sm"
                  type="button"
                  onClick={() => {
                    window.navigator.clipboard.writeText(roomId);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="form-control btn btn-dark">
                Create Room
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5 p-5 border mx-auto">
          <h1 className="text-center text-primary mb-5">Join Room</h1>
          <form onSubmit={handleJoinSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={joinName}
                onChange={(e) => setJoinName(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control outline-0"
                value={joinRoomId}
                onChange={(e) => setJoinRoomId(e.target.value)}
                placeholder="Room Id"
                style={{
                  boxShadow: "none",
                }}
              />
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="form-control btn btn-dark">
                Join Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
