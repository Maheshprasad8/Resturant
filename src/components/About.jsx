import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About=()=>{
    return (
      <section className="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">
                        ABOUT US
                    </h1>
                    <p>The only thing we are serious about is food</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis suscipit nihil eveniet sapiente excepturi nam molestiae ducimus saepe maiores tempora ipsum reprehenderit numquam tempore deleniti officia non labore, distinctio consequatur, tenetur magnam repellat accusamus consequuntur! Necessitatibus accusamus nesciunt placeat officiis nemo alias, libero voluptate ipsum sunt, quod omnis nulla magni.
                </p>
                <Link to={"/"}>
                Explore Menu
                </Link>
            </div>
            <div className="banner">
             <img src="/about.png" alt="about"></img>   
            </div>
        </div>

      </section>
    )
}

export default About;