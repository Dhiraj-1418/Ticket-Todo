import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserData, remove, edit } from "../Features/formSlice";

function TicketForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [boardingSt, setboardingSt] = useState("");
  const [coach, setCoach] = useState("");
  const [boardDate, setboardDate] = useState("");
  const [editIndex, seteditIndex] = useState(null);

  const userData = useSelector((state) => state.userData.userData);

  const dispatch = useDispatch();

  const handleAddAndUpdateData = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      dispatch(
        edit({
          index: editIndex,
          boardingSt,
          boardDate,
          firstName,
          lastName,
          coach,
          from,
          to,
        })
      );
      seteditIndex(null);
    } else {
      dispatch(
        addUserData({
          firstName: firstName,
          lastName: lastName,
          from: from,
          to: to,
          boardingSt: boardingSt,
          boardDate: boardDate,
          coach: coach,
        })
      );
    }
    firstName("");
    lastName("");
    from("");
    to("");
    boardingSt("");
    coach("");
    boardDate("");
  };

  return (
    <div className="d-flex border border-3 rounded-4">
      <div
        className="  d-flex justify-content-center align-items-center "
        style={{ height: "80vh", width: "80vw" }}
      >
        <div style={{ height: "80%", width: "80%" }} className="">
          <Form onSubmit={(e) => handleAddAndUpdateData(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(el) => setfirstName(el.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(el) => setlastName(el.target.value)}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>From</Form.Label>
              <Form.Control
                placeholder="Surat"
                type="text"
                value={from}
                onChange={(el) => setfrom(el.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>To</Form.Label>
              <Form.Control
                placeholder="Jaunpur"
                type="text"
                value={to}
                onChange={(el) => setto(el.target.value)}
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Boarding At</Form.Label>
                <Form.Control
                  type="text"
                  value={boardingSt}
                  onChange={(el) => setboardingSt(el.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="01-01-2025"
                  value={boardDate}
                  onChange={(el) => setboardDate(el.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Coach Preffer</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  value={coach}
                  onChange={(el) => setCoach(el.target.value)}
                  required
                >
                  <option>Choose...</option>
                  <option>Chair Class</option>
                  <option>Sleeper</option>
                  <option>3 Tier Ac</option>
                  <option>2 Tier Ac</option>
                  <option>1 Tier Ac</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button
              disabled={
                !firstName ||
                !lastName ||
                !from ||
                !to ||
                !coach ||
                !boardDate ||
                !boardingSt
              }
              variant="primary"
              type="submit"
              className="w-100"
            >
              {editIndex !== null ? "Booked" : "Book Now"}
            </Button>
          </Form>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "80vh", width: "80vw" }}
      >
        <div style={{ height: "80%", width: "80%" }}>
          {userData.length > 0 ? (
            userData.map((el, index) => (
              <section key={index}>
                <h5 className="text-primary">Ticket : {index + 1}</h5>
                <span>
                  <strong>Name :</strong> {el.firstName} {el.lastName}
                </span>{" "}
                <br />
                <span>
                  <strong>Journey : </strong>
                  {el.from} to {el.to}
                </span>
                <br />
                <span>
                  <strong>Date : </strong>
                  {el.boardDate}
                </span>
                <br />
                <br />
                <span>
                  <strong>Boarding Station : </strong>
                  {el.boardingSt}
                </span>
                <div>
                  <button
                    className="me-3 btn btn-danger"
                    onClick={() => dispatch(remove())}
                  >
                    Cancle
                  </button>
                  <button
                    className=" btn btn-primary"
                    onClick={() => {
                      seteditIndex(index);
                      setfirstName(el.firstName);
                      setlastName(el.lastName);
                      setCoach(el.coach);
                      setboardDate(el.boardDate);
                      setboardingSt(el.boardingSt);
                    }}
                  >
                    Change Boarding Station
                  </button>
                </div>
              </section>
            ))
          ) : (
            <h2 className="text-center">Book Your Ticket Now!</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketForm;
