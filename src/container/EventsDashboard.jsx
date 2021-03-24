import React from "react";
import "../assets/style/style.css";
import FooterDown from "../components/footer";
import HeaderUp from "../components/header";
import { Link } from "react-router-dom";

const EventsDashboard = () => {
  return (
    <>
      <header>
        <HeaderUp />
      </header>
      <body>
        <div className="body-container">
          <div className="top">
            <div className="container text-center b">
              <h1 className="b text-white">
                <br />
                <br />
                CREATE YOUR EVENT, <br />
                AND MAKE IT COME TRUE <br />
                <br />
              </h1>
              <h1>
                <Link to="/create">
                  <button className="button-create mb-5" onClick>
                    <b>+ CREATE EVENT NOW</b>
                  </button>
                </Link>
              </h1>
            </div>
          </div>
          <div className="container mt-3 mb-3 event">
            <div className="row mb-3">
              <div className="col-12 text-center mt-3">
                <h3 className="text-white">EVENT</h3>
              </div>
            </div>

            <div
              className="container"
              style={{
                overflowX: "auto",
                maxWidth: "1100px",
                maxHeight: "500px",
              }}
            >
              <div className="row">
                <div className="col-3 mb-3">
                  <div className="card p-1" style={{ height: "350px" }}>
                    <img
                      src="../img/meeting.jpg"
                      className="img-event"
                      alt=""
                    />
                    <span>WARU, SIDOARJO</span>
                    <span style={{ fontSize: "22px" }}>MEETING WITH CEO</span>
                    <span style={{ fontSize: "13px" }}>17 Agustus 2021</span>
                    <div className="row mt-1 mb-1">
                      <div className="col">aku</div>
                      <div className="col">kamu</div>
                    </div>
                    <span>Note:</span>
                    <span style={{ fontSize: "14px" }}>
                      jashjdkagdlqwuhdkjwefbjwehfgbjewgfjfwekjhdweludhwekufhkljefhlkwerghlkeurfhwlke
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card p-1" style={{ height: "350px" }}>
                    <img
                      src="../img/meeting.jpg"
                      className="img-event"
                      alt=""
                    />
                    <span>WARU, SIDOARJO</span>
                    <span style={{ fontSize: "22px" }}>MEETING WITH CEO</span>
                    <span style={{ fontSize: "13px" }}>17 Agustus 2021</span>
                    <div className="row mt-1 mb-1">
                      <div className="col">aku</div>
                      <div className="col">kamu</div>
                    </div>
                    <span>Note:</span>
                    <span style={{ fontSize: "14px" }}>
                      jashjdkagdlqwuhdkjwefbjwehfgbjewgfjfwekjhdweludhwekufhkljefhlkwerghlkeurfhwlke
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card p-1" style={{ height: "350px" }}>
                    <img
                      src="../img/meeting.jpg"
                      className="img-event"
                      alt=""
                    />
                    <span>WARU, SIDOARJO</span>
                    <span style={{ fontSize: "22px" }}>MEETING WITH CEO</span>
                    <span style={{ fontSize: "13px" }}>17 Agustus 2021</span>
                    <div className="row mt-1 mb-1">
                      <div className="col">aku</div>
                      <div className="col">kamu</div>
                    </div>
                    <span>Note:</span>
                    <span style={{ fontSize: "14px" }}>
                      jashjdkagdlqwuhdkjwefbjwehfgbjewgfjfwekjhdweludhwekufhkljefhlkwerghlkeurfhwlke
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card p-1" style={{ height: "350px" }}>
                    <img
                      src="../img/meeting.jpg"
                      className="img-event"
                      alt=""
                    />
                    <span>WARU, SIDOARJO</span>
                    <span style={{ fontSize: "22px" }}>MEETING WITH CEO</span>
                    <span style={{ fontSize: "13px" }}>17 Agustus 2021</span>
                    <div className="row mt-1 mb-1">
                      <div className="col">aku</div>
                      <div className="col">kamu</div>
                    </div>
                    <span>Note:</span>
                    <span style={{ fontSize: "14px" }}>
                      jashjdkagdlqwuhdkjwefbjwehfgbjewgfjfwekjhdweludhwekufhkljefhlkwerghlkeurfhwlke
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card p-1" style={{ height: "350px" }}>
                    <img
                      src="../img/meeting.jpg"
                      className="img-event"
                      alt=""
                    />
                    <span>WARU, SIDOARJO</span>
                    <span style={{ fontSize: "22px" }}>MEETING WITH CEO</span>
                    <span style={{ fontSize: "13px" }}>17 Agustus 2021</span>
                    <div className="row mt-1 mb-1">
                      <div className="col">aku</div>
                      <div className="col">kamu</div>
                    </div>
                    <span>Note:</span>
                    <span style={{ fontSize: "14px" }}>
                      jashjdkagdlqwuhdkjwefbjwehfgbjewgfjfwekjhdweludhwekufhkljefhlkwerghlkeurfhwlke
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <FooterDown />
      </footer>
    </>
  );
};

export default EventsDashboard;
