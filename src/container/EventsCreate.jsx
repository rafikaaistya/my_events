import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { change, Field, reduxForm } from "redux-form";
import { required, inputField } from "../components/field";
import "../assets/style/style.css";
import FooterDown from "../components/footer";
import HeaderUp from "../components/header";
import { createData } from "../store/actions/event";

const EventsTable = (props) => {
  const { handleSubmit, dispatch } = props;

  const onSubmit = (value) => {
    console.log(value);
    // const form = {
    //   title: value.title,
    //   note: value.note,
    // };
    // dispatch(createData(form));
  };
  return (
    <>
      <header>
        <HeaderUp />
      </header>
      <body>
        <div className="body-container">
          <div className="container mt-5 mb-3">
            <div className="mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="card px-md-4 mt-4 rounded">
                    <div className="card-header pt-4 bg-white border-0 text-center">
                      <span className="h4">Create Event</span>
                    </div>
                    <div className="card-body pb-5">
                      <form>
                        <div className="row ">
                          <div className="col-md-6 ">
                            <div className="pb-1">
                              <Form.Group controlId="formBasicTelephone">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="Input your title"
                                />
                              </Form.Group>
                              <Form.Group controlId="formBasicTelephone">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Input location"
                                />
                              </Form.Group>
                              <Form.Group controlId="formBasicTelephone">
                                <Form.Label>Participant</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Input participant"
                                />
                              </Form.Group>
                              <Form.Group controlId="formBasicTelephone">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" />
                              </Form.Group>
                              <Form.Group controlId="formBasicTelephone">
                                <Form.Label>Note</Form.Label>
                                <textarea
                                  className="form-control"
                                  type="text"
                                  placeholder="Input your phone number"
                                  rows="3"
                                />
                              </Form.Group>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <Form.Group controlId="formBasicTelephone">
                              <Form.Label>Upload Image</Form.Label>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="customImage"
                                />
                                <label
                                  class="custom-file-label"
                                  for="customImage"
                                >
                                  Choose file
                                </label>
                              </div>
                            </Form.Group>
                            <Button className="px-5" onClick={() => onSubmit()}>
                              Save
                            </Button>
                            <div className="mt-5"></div>
                            <img
                              src="../img/meeting.jpg"
                              className="mt-5"
                              width="100%"
                              alt=""
                            />
                          </div>
                        </div>
                      </form>
                    </div>
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

export default EventsTable;
