import React from "react"
import {
  Bootstrap,
  Calendar3,
  CpuFill,
  GeoFill,
  House,
  Speedometer,
  Speedometer2,
  Toggles2,
  Tools,
} from "react-bootstrap-icons"
import Image from "../Images/Images"

const Items = [
  {
    icon: <Bootstrap />,
    title: "bootstrap title",
    description: "Bootstrap description paragraph.",
  },

  {
    icon: <CpuFill />,
    title: "Calendar3",
    description: "Calendar3 Calendar3 Calendar3",
  },

  {
    icon: <GeoFill />,
    title: "Calendar3",
    description: "Calendar3 Calendar3 Calendar3",
  },

  {
    icon: <House />,
    title: "Calendar3",
    description: "Calendar3 Calendar3 Calendar3",
  },

  {
    icon: <Speedometer />,
    title: "Calendar3",
    description: "Calendar3 Calendar3 Calendar3",
  },

  {
    icon: <Speedometer2 />,
    title: "Calendar3",
    description: "Calendar3 Calendar3 Calendar3",
  },

  {
    icon: <Toggles2 />,
    title: "Calendar3",
    description: "Calendar3 Calendar3 Calendar3",
  },

  {
    icon: <Tools />,
    title: "Calendar3",
    description: "Calendar3 Calendar3 Calendar3",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h2 class="pb-2 border-bottom text-center">Team Members</h2>
      <div className="row justify-content-center">
        <div className="col-3">

            
          <div className="card card-body">
            <Image
              className="d-block mx-lg-auto img-fluid"
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
              filename="Member 1.jpg"
              alt="1"
            />
            {/* <h5>Member1</h5> */}
          </div>
        </div>

        {/* <div className="col-3">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="Member2.jpg"
            alt="2"
          />
        </div>

        <div className="col-3">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="Member3.jpg"
            alt="3"
          />
        </div>

        <div className="col-3">
          <Image
            className="d-block mx-lg-auto img-fluid"
            filename="Member4.jpg"
            alt="4"
          />
        </div> */}
      </div>
    </div>
  )
}

export default Team
