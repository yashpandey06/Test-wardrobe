import React, { useState } from "react";
import Slide from "../common/Slide/Slide.js";
import ClothingRental from "../common/images/ClothingRental.png";
import PersonalStyling from "../common/images/PersonalStyling-removebg-preview.png";
import WardrobeOrganization from "../common/images/WardrobeOrganization-removebg-preview.png";
import SitBackAndRelax from "../common/images/SitBackAndRelax.png";
import DownloadTheApp from "../common/images/DownloadTheApp.png";
import ChooseYourService from "../common/images/ChooseYourService.png";
import SignUp from "../common/images/SignUp.png";
import home from "../common/images/home.png";
import cemara from "../common/images/cemara.png";
import threeD from "../common/images/3d.png";
import event from "../common/images/event.png";
import Fitting from "../common/images/Fitting.jpg";
import InsideCard from "../common/Card/InsideCard";
import Card from "../common/Card/Card.js";
import "./home.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: 'url("..common/images/background-image.png")',
      }}
    >
      <div className="content">
        <div className=" hero-section">
          <Carousel>
            <Carousel.Item>
              <Link
                className="slider-img-holder"
                to={"/our-services/personal-styling"}
              >
                <img
                  className="hero-img"
                  src={PersonalStyling}
                  alt="right Arrow"
                />
              </Link>
              <Carousel.Caption>
                <h3 className="slider-label">Personal Styling</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link
                className="slider-img-holder"
                to={"/our-services/wardrobe-styling"}
              >
                <img
                  className="hero-img"
                  src={WardrobeOrganization}
                  alt="right Arrow"
                />
              </Link>
              <Carousel.Caption>
                <h3 className="slider-label">Wardrobe Organization</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link
                className="slider-img-holder"
                to={"/our-services/clothing-rental"}
              >
                <img
                  className="hero-img"
                  src={ClothingRental}
                  alt="right Arrow"
                />
              </Link>
              <Carousel.Caption>
                <h3 className="slider-label">Clothing Rental</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* <Link to={'/our-services/1'}><img className='hero-img' src={PersonalStyling} alt="right Arrow" /></Link>
        <Link to={'/our-services/2'}><img className='hero-img' src={WardrobeOrganization} alt="right Arrow" /></Link>
        <Link to={'/our-services/3'}><img className='hero-img' src={ClothingRental} alt="right Arrow" /></Link> */}
        </div>
        <Slide title="" blue>
          <form id="emailForm">
            <div>
              {" "}
              <h1 className="text-center pt-4 bold">
                Find your style with WARdrobe
              </h1>{" "}
            </div>
            <h4 className="text-center p-4">
              Personal Styling, Wardrobe Styling, Clothing Rental
            </h4>
            <div className="flex demo-section">
              {/* <input type="email" id="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" name="email" placeholder='Enter your email' required/>
          <button type="submit" onClick={()=>{
          sendEmail()
        }} > Book a demo</button> */}
              <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                  <form
                    action="https://wardrobestylist.us21.list-manage.com/subscribe/post?u=33c01fc20f0b1d267e9a12c94&amp;id=54f8de7ebc&amp;f_id=00ce6ee1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    class="validate"
                    target="_blank"
                  >
                    <div id="mc_embed_signup_scroll">
                      {/* <h2>Book a Demo</h2>
                          <div class="indicates-required">
                            <span class="asterisk">*</span> indicates required</div> */}
                      <div class="mc-field-group">
                        <label for="mce-EMAIL">
                          Email Address
                          <span class="asterisk">*</span>
                        </label>
                        <input
                          type="email"
                          name="EMAIL"
                          class="required email"
                          id="mce-EMAIL"
                          required=""
                          onClick={(e) => {
                            console.log(email);
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div id="mce-responses" class="clear foot">
                        <div
                          class="response"
                          id="mce-error-response"
                          style={{ display: "none" }}
                        ></div>
                        <div
                          class="response"
                          id="mce-success-response"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                      <div
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-5000px" }}
                      >
                        <input
                          type="text"
                          name="b_33c01fc20f0b1d267e9a12c94_54f8de7ebc"
                          tabindex="-1"
                          value=""
                        />
                      </div>
                      <div class="optionalParent">
                        <div class="clear foot">
                          <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            class="button"
                            value="Book a Demo"
                          />
                          <p style={{ margin: "0px auto" }}>
                            <a
                              href="http://eepurl.com/iG0uqA"
                              title="Mailchimp - email marketing made easy and fun"
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  backgroundColor: "transparent",
                                  borderRadius: "4px",
                                }}
                              >
                                <img
                                  class="refferal_badge"
                                  src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                                  alt="Intuit Mailchimp"
                                  style={{
                                    width: "220px",
                                    height: "40px",
                                    display: "flex",
                                    padding: "2px 0px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                />
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
        </Slide>
        <div className="main">
          <InsideCard title="">
            <div className="main-title">
              WARdrobe - Where Fashion Meets Convenience
            </div>
            WARdrobe provides an exclusive personal styling service for men and
            women, adapting fashion selections to individual tastes, demands,
            and lifestyles. In addition to personalised style, we provide
            subscription-based options that keep customers fashionably up to
            date, as well as rental services for those in need of a quick
            wardrobe update. This integrated strategy guarantees that clients
            have a smooth and ever-changing fashion experience.
          </InsideCard>
          <img className="main-image" src={Fitting} alt="Cloths" />
        </div>

        <h1 id="ourServices" className="text-center heading p-4 bold">
          Our Services
        </h1>
        <Slide title="" blue>
          <div className="our-services-child">
            <InsideCard
              blue
              titleOnClickPath="our-services/personal-styling"
              titleClass="our-service-card"
              title="Personal Styling"
            >
              Our experienced stylists curate outfits tailored to your
              individual style and preferences. We use techniques like body type
              analysis and color theory to create the perfect look.
              {/* <Link  className="white" to={'/our-services/1'}>read more</Link> */}
            </InsideCard>
            <div style={{ width: "25vw", minWidth: "320px" }}>
              <img
                style={{ margin: "10px", width: "100%" }}
                src={PersonalStyling}
                alt="right Arrow"
              />
            </div>
          </div>
          <div className="our-services-child">
            <div style={{ width: "25vw", minWidth: "320px" }}>
              <img
                style={{ margin: "10px", width: "100%" }}
                src={WardrobeOrganization}
                alt="right Arrow"
              />
            </div>
            <InsideCard
              blue
              titleOnClickPath="our-services/wardrobe-styling"
              titleClass="our-service-card"
              title="Wardrobe Styling"
            >
              We help you declutter and organize your wardrobe, and provide tips
              on how to maintain it. A clean wardrobe equals a clear mind!
              {/* <Link  className="white" to={'/our-services/2'}>read more</Link> */}
            </InsideCard>
          </div>
          <div className="our-services-child">
            <InsideCard
              blue
              titleOnClickPath="our-services/clothing-rental"
              titleClass="our-service-card"
              title="Clothing Rental"
            >
              For special events or just because, rent designer outfits at an
              affordable price and make a statement.
              {/* <Link  className="white" to={'/our-services/3'}>read more</Link> */}
            </InsideCard>
            <div style={{ width: "25vw", minWidth: "320px" }}>
              <img
                style={{ margin: "10px", width: "100%" }}
                src={ClothingRental}
                alt="right Arrow"
              />
            </div>
          </div>
        </Slide>

        <Slide
          title="How to Get Started with WARdrobe"
          //   leftImageSrc={paintImage2}
        >
          <div className="starting-steps">
            <div style={{ width: "25vw", minWidth: "320px" }}>
              <img
                style={{ margin: "10px", width: "100%" }}
                src={DownloadTheApp}
                alt="right Arrow"
              />
            </div>
            <InsideCard
              // titleOnClickPath="our-services/1"
              titleClass="our-service-card"
              title="Download the App"
            >
              WARdrobe's app is available on both iOS and Android. Download it
              from the App Store or Google Play.
            </InsideCard>
          </div>
          <div className="starting-steps">
            <InsideCard
              // titleOnClickPath="our-services/personal-styling"
              titleClass="our-service-card"
              title="Sign Up and Fill Out Your Style Profile"
            >
              Answer a few basic questions and tell us about your style
              preferences. Our stylists will use this information to curate
              personalized outfits for you.
            </InsideCard>
            <div style={{ width: "25vw", minWidth: "320px" }}>
              <img
                style={{ margin: "10px", width: "100%" }}
                src={SignUp}
                alt="right Arrow"
              />
            </div>
          </div>
          <div className="starting-steps">
            <div style={{ width: "25vw", minWidth: "320px" }}>
              <img
                style={{ margin: "10px", width: "100%" }}
                src={ChooseYourService}
                alt="right Arrow"
              />
            </div>
            <InsideCard
              // titleOnClickPath="our-services/1"
              titleClass="our-service-card"
              title="Choose Your Service"
            >
              Choose between personal styling, wardrobe Styling, or clothing
              rental. You can also mix and match if you like!
            </InsideCard>
          </div>
          <div className="starting-steps">
            <InsideCard
              // titleOnClickPath="our-services/1"
              titleClass="our-service-card"
              title="Sit Back and Relax"
            >
              Enjoy our seamless, easy-to-use service and let our stylists do
              the work. We'll deliver outfits or services right to your
              doorstep!
            </InsideCard>
            <div style={{ width: "25vw", minWidth: "320px" }}>
              <img
                style={{ margin: "10px", width: "100%" }}
                src={SitBackAndRelax}
                alt="right Arrow"
              />
            </div>
          </div>
        </Slide>
        <Slide title="Upcoming launches">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
              flexWrap: "wrap",
              minWidth: "300px",
            }}
          >
            <Card topImageSrc={event} cildClass="new-launches" title="">
              <div className="launch-text">Wedding and event styling</div>
            </Card>
            <Card topImageSrc={threeD} cildClass="new-launches" title="">
              <div className="launch-text">3D Fashion - View and purchase</div>
            </Card>
            <Card topImageSrc={cemara} cildClass="new-launches" title="">
              <div className="launch-text">
                Auto-capture of body measurements using AI
              </div>
            </Card>
            <Card topImageSrc={home} cildClass="new-launches" title="">
              <div className="launch-text">
                In-house styling stores where you may shop, style.
              </div>
            </Card>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HomePage;
