import React, { useEffect, useState } from "react";
import "../assets/style/style.css";
import FooterDown from "../components/footer";
import HeaderUp from "../components/header";
import { fetchData } from "../store/actions/event";
import { useDispatch, useSelector } from "react-redux";

const EventsTable = (props) => {
  //   const { dispatch } = props;
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchData);
  //   }, []);

  return (
    <>
      <header>
        <HeaderUp />
      </header>
      <body>
        <div className="body-container">
          <div className="container mt-5 mb-3">
            <div className="row mt-5 mb-3">
              <div className="mt-5 list-event">
                <span style={{ fontSize: "24px", color: "white" }}>
                  LIST EVENT
                </span>
                <div className="col-12 mt-3">
                  <div className="input-group border-0">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text border-0 bg-white"
                        id="basic-addon1"
                      >
                        <i className="fa fa-search" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search..."
                      //   onChange={() => onChange(event)}
                    />
                  </div>
                </div>
              </div>

              <table className="table mt-3">
                <thead className="thead-light">
                  <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Participant</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: "whitesmoke" }}>
                  {/* {events?.map((event, index) => ( */}
                  {/* <tr key={index}> */}
                  <tr>
                    <td>1</td>
                    <td>Meeting with CEO</td>
                    <td>Sidoarjo, Indonesia</td>
                    <td>23/06/2021</td>
                    <td>a,b,c</td>
                    <td>lorem ipsum</td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
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

export default EventsTable;
