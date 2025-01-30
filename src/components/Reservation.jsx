import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {data} from '../restApi.json';

const Reservation = () => {
  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();
  // console.log("i am in")
  const handleReservation = async (e) => {
    
    e.preventDefault();
    try {
      console.log("before")
      console.log("firstName",firstName);
      console.log("LastName",LastName);
      console.log("email",email);
      console.log("phone",phone);
      console.log("date",date);
    
      console.log("time",time);
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/reservation/send",
        { firstName, LastName, email, phone, date, time },
        // {
        //   // headers: {
        //   //   "Content-Type": "application/json",
        //   // },
        //   // withCredentials: true,
        // }
        
      );

      console.log("data",data);
      toast.success(data.message);
      setfirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;