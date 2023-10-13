import React from 'react';
import styled from "styled-components";
import person from "../assets/person.png";

const Testimonials=() => {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          I recently booked a tour with Travel Partner to explore Machu Picchu in Peru.  
          The itinerary was well-planned
          </p>
          <div className="info">
            <img src={person} alt="" />
            <div className="details">
              <h4>Kamlesh</h4>
              <span>From Chennai</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          The booking process was smooth, and the cruise exceeded my expectations
          </p>
          <div className="info">
            <img src={person} alt="" />
            <div className="details">
              <h4>Suresh</h4>
              <span>From Mumbai</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          This is the best website ever! I had a fantastic trip. Five stars!
          </p>
          <div className="info">
            <img src={person} alt="" />
            <div className="details">
              <h4>Vijay</h4>
              <span>From Kerala</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`; 

export default Testimonials;
