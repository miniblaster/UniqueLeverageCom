import React from "react";
import { FaqSection } from "../../components/FaqSection";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./style.css";
import "./newstyle.css";
import Card from "../../components/Card";

export const UniqueleverageCom = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const [active6, setActive6] = React.useState(-1);
  const [active8, setActive8] = React.useState(0);

  const handlePlusClick6 = (index) => {
    setActive6(index);
  };

  const handleMinusClick6 = (index) => {
    setActive6(-1);
  };

  return (
    <div className="uniqueleverage-com">
      <div className="nav-container">
        <div className="brand">
          <img alt="Group" src="/img/group-7013-1.png" />
          <span>Unique Leverage</span>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <a className="navitem cursor-pointer">
                <span>What's Included</span>
                <img alt="Ri arrow drop down" src="/img/ri-arrow-drop-down-line.svg" />
              </a>
            </li>
            <li>
              <a className="navitem cursor-pointer">
                <span>Pricing</span>
                <img alt="Ri arrow drop down" src="/img/ri-arrow-drop-down-line.svg" />
              </a>
            </li>
            <li>
              <a className="godemo cursor-pointer">
                <span>Book a Demo</span>
                <img alt="Svg" src="/img/svg-9.svg" />
              </a>
            </li>
          </ul>
        </nav>
        <img src="/img/toggle.svg" className="toggle-nav" onClick={() => setNavOpen(!navOpen)} />
        {navOpen && (
          <div className="mobile-nav">
            <ul className="nav-list">
              <li>
                <a className="navitem cursor-pointer">
                  <span>What's Included</span>
                  <img alt="Ri arrow drop down" src="/img/ri-arrow-drop-down-line.svg" />
                </a>
              </li>
              <li>
                <a className="navitem cursor-pointer">
                  <span>Pricing</span>
                  <img alt="Ri arrow drop down" src="/img/ri-arrow-drop-down-line.svg" />
                </a>
              </li>
              <li>
                <button className="default">
                  Book a Demo
                  <img src="/img/svg-9.svg" alt="" style={{ marginLeft: "10px" }} />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="hero">
        <div className="herotext">
          <div className="herotitle">
            <div className="herotext1">Social Ads &amp;</div>
            <div className="herotext2">Marketplace</div>
            <div className="herotext3">For Dealers</div>
          </div>
          <div className="herotitle-md">
            <div className="herotext1">Social Ads &amp; Marketplace</div>
            <div className="herotext3">For Dealers</div>
          </div>
          <div className="herotextsmall">
            How does this work? <span>First,</span> we want to get to know you,
            <br /> the dealership, and people.
          </div>
          <div className="actions">
            <button className="default">
              Schedule a Demo
              <img src="/img/svg-8.svg" alt="" style={{ marginLeft: "10px" }} />
            </button>
            <button className="secondary">Request Quote</button>
          </div>
        </div>
        <div className="heroimg">
          <img alt="Group" src="/img/group-1000000957.png" />
        </div>
      </div>
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <div className="maintop">
        <div>
          We Are Trusted By <span>Top Brands</span>
        </div>
      </div>
      <div className="mainmark">
        <div>
          <img alt="Image" src="/img/image-36.png" />
        </div>
        <div>
          <img alt="Image" src="/img/image-38.png" />
        </div>
        <div>
          <img alt="Image" src="/img/image-37.png" />
        </div>
        <div>
          <img alt="Image" src="/img/image-39.png" />
        </div>
      </div>
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <div className="section1">
        <div className="textsection">
          <div className="part1">
            <img className="SVG-3" alt="Svg" src="/img/svg-7.svg" />
            Unique Leverage
          </div>
          <div className="part2">Automate Marketplace</div>
          <div className="part3">
            Unique Leverage Meta’s powerful targeting options and hone in on users who live near your dealership, are in
            the market for a car, and match your ideal customer profile. Create localized ads to appear in their feeds
            and drive traffic to your website or dealership over the competition.
          </div>
        </div>
        <div className="imgsection">
          <div>
            <div>
              <div className="panelsubempty"></div>
              <div className="panelsubheader">
                <img alt="List item SVG" src="/img/list-item-svg-2.svg" />
                30 minutes
              </div>
              <div className="panelsubtitle my-3">Ready to automate your workflow?</div>
              <div className="panelsubtext">
                Book a free workflow exploration! Let’s explore the opportunities for automating your digital processes.
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="panelsubempty"></div>
              <div className="panelsubheader">
                <img alt="List item SVG" src="/img/list-item-svg-2.svg" />
                30 minutes
              </div>
              <div className="panelsubtitle my-3">Unify your business processes</div>
              <div className="panelsubtext">
                Increase productivity, enhance your team’s collaboration, and take back control of your processes with
                monday.com
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="panelsubempty"></div>
              <div className="panelsubheader">
                <img alt="List item SVG" src="/img/list-item-svg-2.svg" />
                30 minutes
              </div>
              <div className="panelsubtitle my-3">Ready to automate your workflow?</div>
              <div className="panelsubtext">
                Book a free workflow exploration! Let’s explore the opportunities for automating your digital processes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <div className="section2">
        <div className="sec2text">
          <div>
            <div className="sec2title">Target & Engage Shoppers on CarGurus, AutoTrader, etc.</div>
            <div className="sec2small mt-4 mb-2">
              Convert low-funnel shoppers into CRM leads with our VIN lead ads; designed to display relevant vehicles
              (based on VINs) to in- market shoppers within 3-7 days of when they last engaged with a VIN – when they’re
              the hottest. Capture VIN-specific test drive leads and send car shoppers information directly to your CRM
              or Facebook Messenger.
              <br />
              <br />
              With VIN Lead Ads, you’ll make it easy for customers to:
            </div>
            <div className="sec2radio">
              <div>
                <img className="mr-3" src="/img/icon-11.svg" alt="" />
                Popular Listing Websites
              </div>
              <div>
                <img className="mr-3" src="/img/icon-10.svg" alt="" />
                Your Website Visitors
              </div>
              <div>
                <img className="mr-3" src="/img/icon-9.svg" alt="" />
                Dominate Locally!
              </div>
            </div>
          </div>
          <div className="actions mt-3">
            <button className="default">
              Schedule a Demo
              <img src="/img/svg-8.svg" alt="" style={{ marginLeft: "10px" }} />
            </button>
            <button className="secondary">Request Quote</button>
          </div>
        </div>
        <div className="sec2img">
          <div></div>
        </div>
      </div>
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <Card
        title="Deliver The Right Vehicle To The Right Shopper With Dynamic Facebook & Instagram Ads"
        desc="Turn your live inventory into powerful automotive ads that automatically match the right body style to the
                right shoppers. Further optimize your Facebook & Instagram ads by driving clicks to different destinations –
                Website, Messenger, or use Facebook’s native forms + connect to your CRM."
        check1="Popular Listing Websties"
        check2="Your Website Visitors"
        check3="Dominate Locally!"
      />
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <div className="section4">
        <div className="sec4text">
          <div>
            <div className="sec4title">Transform low-funnel shoppers with VIN-Specific Lead Ads</div>
            <div className="sec4small">
              Unique Leverage Meta’s powerful targeting options and hone in on users who live near your dealership, are
              in the market for a car, and match your ideal customer profile. Create localized ads to appear in their
              feeds and drive traffic to your website or dealership over the competition.
            </div>
            <div className="sec4radio">
              <div>
                <img src="/img/icon-11.svg" alt="" />
                Request a price quote
              </div>
              <div>
                <img src="/img/icon-10.svg" alt="" />
                Schedule a test drive
              </div>
              <div>
                <img src="/img/icon-9.svg" alt="" />
                Redeem a special offer
              </div>
            </div>
          </div>
          <div className="actions">
            <button className="default">
              Schedule a Demo
              <img src="/img/svg-8.svg" alt="" style={{ marginLeft: "10px" }} />
            </button>
            <button className="secondary">Request Quote</button>
          </div>
        </div>
        <div className="sec4img">
          <div></div>
        </div>
      </div>
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <Card
        title="Multiple Languages (¿Español?) Dealership Campaigns Proven To Convert"
        desc="We hate cookie-cutter ads, too. Our Team works with you to create the perfect message."
        check1="Custom dealership ads for any special"
        check2="Choose your own unique design"
        check3="Stand out from your competition"
      />
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <div className="sec-support">
        <div className="sec6-top">
          <div className="sec6badge">
            <img src="/img/icon-13.svg" /> ABOUT US
          </div>
          <div className="sec4title">What makes Unique Leverage Different?</div>
          <div className="sec4small">
            Our auto advertising solutions support your dealership - no matter the size or level of expertise.
          </div>
        </div>
        <div className="section6 mt-4">
          <div className="content">
            <div className={`${active6 === 0 ? "active" : ""} item p-4`}>
              <div className={`d-flex justify-content-between accordion`}>
                <h5 className={`${active6 === 0 ? "text-white" : "text--black"}`}>Superior Support</h5>
                <img
                  className={`cursor-pointer ${active6 !== 0 ? "d-block" : "d-none"}`}
                  src="/img/icon-12.svg"
                  onClick={() => handlePlusClick6(0)}
                />
                <img
                  className={`cursor-pointer ${active6 === 0 ? "d-block" : "d-none"}`}
                  src="/img/minus.svg"
                  onClick={() => handleMinusClick6(0)}
                />
              </div>
              <div className={`text-content text-white mt-3 ${active6 === 0 ? "d-block" : "d-none"}`}>
                We don't just respond; we anticipate. Our support is about giving you the tools and knowledge to make
                informed decisions.
              </div>
            </div>
            <div className={`${active6 === 1 ? "active" : ""} item p-4`}>
              <div className={`d-flex justify-content-between accordion`}>
                <h5 className={`${active6 === 1 ? "text-white" : "text--black"}`}>Ownership of Campaigns</h5>
                <img
                  className={`cursor-pointer ${active6 !== 1 ? "d-block" : "d-none"}`}
                  src="/img/icon-12.svg"
                  onClick={() => handlePlusClick6(1)}
                />
                <img
                  className={`cursor-pointer ${active6 === 1 ? "d-block" : "d-none"}`}
                  src="/img/minus.svg"
                  onClick={() => handleMinusClick6(1)}
                />
              </div>
              <div className={`text-content text-white mt-3 ${active6 === 1 ? "d-block" : "d-none"}`}>
                We don't just respond; we anticipate. Our support is about giving you the tools and knowledge to make
                informed decisions.
              </div>
            </div>
            <div className={`${active6 === 2 ? "active" : ""} item p-4`}>
              <div className={`d-flex justify-content-between accordion`}>
                <h5 className={`${active6 === 2 ? "text-white" : "text--black"}`}>Education</h5>
                <img
                  className={`cursor-pointer ${active6 !== 2 ? "d-block" : "d-none"}`}
                  src="/img/icon-12.svg"
                  onClick={() => handlePlusClick6(2)}
                />
                <img
                  className={`cursor-pointer ${active6 === 2 ? "d-block" : "d-none"}`}
                  src="/img/minus.svg"
                  onClick={() => handleMinusClick6(2)}
                />
              </div>
              <div className={`text-content text-white mt-3 ${active6 === 2 ? "d-block" : "d-none"}`}>
                We don't just respond; we anticipate. Our support is about giving you the tools and knowledge to make
                informed decisions.
              </div>
            </div>
            <div className={`${active6 === 3 ? "active" : ""} item p-4`}>
              <div className={`d-flex justify-content-between accordion`}>
                <h5 className={`${active6 === 3 ? "text-white" : "text--black"}`}>$5 can outperform $10 </h5>
                <img
                  className={`cursor-pointer ${active6 !== 3 ? "d-block" : "d-none"}`}
                  src="/img/icon-12.svg"
                  onClick={() => handlePlusClick6(3)}
                />
                <img
                  className={`cursor-pointer ${active6 === 3 ? "d-block" : "d-none"}`}
                  src="/img/minus.svg"
                  onClick={() => handleMinusClick6(3)}
                />
              </div>
              <div className={`text-content text-white mt-3 ${active6 === 3 ? "d-block" : "d-none"}`}>
                We don't just respond; we anticipate. Our support is about giving you the tools and knowledge to make
                informed decisions.
              </div>
            </div>
          </div>
          <div className="img"></div>
        </div>
      </div>
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <div className="section3">
        <div className="">
          <div className="sec7badge">
            <img src="/img/icon-13.svg" /> LATEST SOCIAL STATS
          </div>
          <div className="sec3texttitle border-bottom py-4">The latest Facebook & Instagram Stats For Car Dealers</div>
          <div className="grid-container">
            <div className="grid-item">
              <div className="percent">81%</div>
              <div className="extra">of people who use Instagram search for products and services</div>
            </div>
            <div className="grid-item">
              <div className="percent">1.5B</div>
              <div className="extra">people globally access Facebook every day</div>
            </div>
            <div className="grid-item">
              <div className="percent">80%</div>
              <div className="extra">of surveyed U.S. car buyers use Facebook for auto research</div>
            </div>
            <div className="grid-item">
              <div className="percent">59%</div>
              <div className="extra">of users say that Instagram is key influence in buying products</div>
            </div>
            <div className="grid-item">
              <div className="percent">500M+</div>
              <div className="extra">people intereact with Instagram stories daily</div>
            </div>
            <div className="grid-item">
              <div className="percent">56%</div>
              <div className="extra">
                of US auto internet shoppers surveyed use their mobile device to shop for vehicles
              </div>
            </div>
          </div>
        </div>
        <div className="sec5img">
          <div></div>
        </div>
      </div>
      <div className="hrbarcontainer">
        <div className="hrbar"></div>
      </div>
      <div className="sec-faq">
        <div className="sec6-top">
          <div className="sec6badge">
            <img src="/img/icon-13.svg" /> YOU MAY ASK!
          </div>
          <div className="sec4title">Frequently Asked Questions</div>
        </div>
        <div className="sec8-contents">
          <div className="sec8-left">
            <div className={`${active8 === 0 ? "active-item" : "item"}`}>
              <div className="d-flex justify-content-between p-3">
                <div className="active d-flex align-items-center ">
                  <img src={`/img/${active8 === 0 ? "" : "un"}asked.svg`} alt="" />
                  <p className="mb-0 ml-2">Do I have to pay for updates?</p>
                </div>
                <img
                  src="/img/asked-chevron.svg"
                  className={`${active8 === 0 ? "d-block" : "d-none"}`}
                  onClick={() => setActive8(-1)}
                />
                <img
                  src="/img/unasked-chevron.svg"
                  className={`${active8 === 0 ? "d-none" : "d-block"}`}
                  onClick={() => setActive8(0)}
                />
              </div>
              <p className={` mx-4 ${active8 === 0 ? "mobile-question" : "d-none"} mobile-question`}>
                No! We give constant updates to our software, add new features and you get it all for FREE! Because
                UniqueLeverage is on the cloud, when we make an update or add new features, it's all yours!
              </p>
            </div>
            <div className={`${active8 === 1 ? "active-item" : "item"}`}>
              <div className="d-flex justify-content-between p-3">
                <div className="active d-flex align-items-center ">
                  <img src={`/img/${active8 === 1 ? "" : "un"}asked.svg`} alt="" />
                  <p className="mb-0 ml-2">How long are your contracts</p>
                </div>
                <img
                  src="/img/asked-chevron.svg"
                  className={`${active8 === 1 ? "d-block" : "d-none"}`}
                  onClick={() => setActive8(-1)}
                />
                <img
                  src="/img/unasked-chevron.svg"
                  className={`${active8 === 1 ? "d-none" : "d-block"}`}
                  onClick={() => setActive8(1)}
                />
              </div>
              <p className={` mx-4 ${active8 === 1 ? "mobile-question" : "d-none"} mobile-question`}>2</p>
            </div>
            <div className={`${active8 === 2 ? "active-item" : "item"}`}>
              <div className="d-flex justify-content-between p-3">
                <div className="active d-flex align-items-center ">
                  <img src={`/img/${active8 === 2 ? "" : "un"}asked.svg`} alt="" />
                  <p className="mb-0 ml-2">If I have questions, is there someone I can talk to?</p>
                </div>
                <img
                  src="/img/asked-chevron.svg"
                  className={`${active8 === 2 ? "d-block" : "d-none"}`}
                  onClick={() => setActive8(-1)}
                />
                <img
                  src="/img/unasked-chevron.svg"
                  className={`${active8 === 2 ? "d-none" : "d-block"}`}
                  onClick={() => setActive8(2)}
                />
              </div>
              <p className={` mx-4 ${active8 === 2 ? "mobile-question" : "d-none"} mobile-question`}>3</p>
            </div>
            <div className={`${active8 === 3 ? "active-item" : "item"}`}>
              <div className="d-flex justify-content-between p-3">
                <div className="active d-flex align-items-center ">
                  <img src={`/img/${active8 === 3 ? "" : "un"}asked.svg`} alt="" />
                  <p className="mb-0 ml-2">If I cancel my Unique Leverage account, will I lost my data?</p>
                </div>
                <img
                  src="/img/asked-chevron.svg"
                  className={`${active8 === 3 ? "d-block" : "d-none"}`}
                  onClick={() => setActive8(-1)}
                />
                <img
                  src="/img/unasked-chevron.svg"
                  className={`${active8 === 3 ? "d-none" : "d-block"}`}
                  onClick={() => setActive8(3)}
                />
              </div>
              <p className={` mx-4 ${active8 === 3 ? "mobile-question" : "d-none"} mobile-question`}>4</p>
            </div>
            <div className={`${active8 === 4 ? "active-item" : "item"}`}>
              <div className="d-flex justify-content-between p-3">
                <div className="active d-flex align-items-center ">
                  <img src={`/img/${active8 === 4 ? "" : "un"}asked.svg`} alt="" />
                  <p className="mb-0 ml-2">Can I connect my DMS?</p>
                </div>
                <img
                  src="/img/asked-chevron.svg"
                  className={`${active8 === 4 ? "d-block" : "d-none"}`}
                  onClick={() => setActive8(-1)}
                />
                <img
                  src="/img/unasked-chevron.svg"
                  className={`${active8 === 4 ? "d-none" : "d-block"}`}
                  onClick={() => setActive8(4)}
                />
              </div>
              <p className={` mx-4 ${active8 === 4 ? "mobile-question" : "d-none"} mobile-question`}>5</p>
            </div>
            <div className={`${active8 === 5 ? "active-item" : "item"}`}>
              <div className="d-flex justify-content-between p-3">
                <div className="active d-flex align-items-center ">
                  <img src={`/img/${active8 === 5 ? "" : "un"}asked.svg`} alt="" />
                  <p className="mb-0 ml-2">Do I have to install anything?</p>
                </div>
                <img
                  src="/img/asked-chevron.svg"
                  className={`${active8 === 5 ? "d-block" : "d-none"}`}
                  onClick={() => setActive8(-1)}
                />
                <img
                  src="/img/unasked-chevron.svg"
                  className={`${active8 === 5 ? "d-none" : "d-block"}`}
                  onClick={() => setActive8(5)}
                />
              </div>
              <p className={` mx-4 ${active8 === 5 ? "mobile-question" : "d-none"} mobile-question`}>6</p>
            </div>
            <div className={`${active8 === 6 ? "active-item" : "item"}`}>
              <div className="d-flex justify-content-between p-3">
                <div className="active d-flex align-items-center ">
                  <img src={`/img/${active8 === 6 ? "" : "un"}asked.svg`} alt="" />
                  <p className="mb-0 ml-2">If I don't like UniqueLeverage, how do I cancel?</p>
                </div>
                <img
                  src="/img/asked-chevron.svg"
                  className={`${active8 === 6 ? "d-block" : "d-none"}`}
                  onClick={() => setActive8(-1)}
                />
                <img
                  src="/img/unasked-chevron.svg"
                  className={`${active8 === 6 ? "d-none" : "d-block"}`}
                  onClick={() => setActive8(6)}
                />
              </div>
              <p className={` mx-4 ${active8 === 6 ? "mobile-question" : "d-none"} mobile-question`}>7</p>
            </div>
          </div>
          <div className="sec8-right">
            <div className={`${active8 === 0 ? "desktop-show" : "d-none"}`}>
              <h5>Do I have to pay for updates?</h5>
              <p>
                No! We give constant updates to our software, add new features and you get it all for FREE! Because
                UniqueLeverage is on the cloud, when we make an update or add new features, it's all yours!
              </p>
            </div>
            <div className={`${active8 === 1 ? "desktop-show" : "d-none"}`}>
              <p>2</p>
            </div>
            <div className={`${active8 === 2 ? "desktop-show" : "d-none"}`}>
              <p>3</p>
            </div>
            <div className={`${active8 === 3 ? "desktop-show" : "d-none"}`}>
              <p>4</p>
            </div>
            <div className={`${active8 === 4 ? "desktop-show" : "d-none"}`}>
              <p>5</p>
            </div>
            <div className={`${active8 === 5 ? "desktop-show" : "d-none"}`}>
              <p>6</p>
            </div>
            <div className={`${active8 === 6 ? "desktop-show" : "d-none"}`}>
              <p>7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec9 p-5">
        <div className="sec6-top">
          <div className="sec6badge">
            <img src="/img/icon-13.svg" /> LET'S TALK
          </div>
          <div className="sec4title">Schedule a Demo</div>
          <div className="leverage">
            <img src="/img/schedule.svg" alt="" />
            Unique Leverage
          </div>
          <h4>Demo Meet</h4>
          <p>
            Quality used vehicles for sale with low mileage, like sedans, SUVs for family, sports cars, pickup trucks,
            and more! Affordable pricing + we can work with good & bad situations. Let us help! Schedule your
            appointment today.
          </p>
          <div className="minutes">
            <img src="/img/clock.svg" alt="" />
            30 minutes
          </div>
          <div className="actions">
            <button className="default">Add to Calendar</button>
            <button className="secondary">Re-schedule</button>
          </div>
        </div>
        <DateCalendar sx={{ marginLeft: "auto", sm: { mx: "auto" } }} />
      </div>
    </div>
  );
};
