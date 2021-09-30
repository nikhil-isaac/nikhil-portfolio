import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    const { tabStyle, type } = this.props;
    let tab1 = "",
      tab2 = "",
      tab3 = "",
      tab4 = "",
      tab5 = "";
    if (type === "education") {
      tab1 = "B.Tech + M.Tech";
    } else if (type === "experience") {
      tab1 = "IBM";
      tab2 = "Ericsson";
      tab3 = "IIT Madras";
    } else {
      tab1 = "Hackathon";
      tab2 = "Academic";
      tab3 = "Leadership";
      tab4 = "Public Speaking";
      tab5 = "Volunteer";
    }

    const loadTabData = () => {
      if (type === "education") {
        return (
          <TabPanel>
            <div className="single-tab-content list-unstyled">
              <ul className="list-unstyled">
                <li>
                  <a href="#skills">
                    B.Tech + M.Tech (Dual Degree) Computer Engineering
                    <span> | 2014 - 2019</span>
                  </a>
                  {
                    "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, DESIGN AND MANUFACTURING (IIITD&M) KANCHEEPURAM, CHENNAI"
                  }
                  <ul>
                    <li>
                      Institute of National Importance Ministry of Human
                      Resource Development, Government of India
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </TabPanel>
        );
      } else if (type === "experience") {
        return (
          <>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      SOFTWARE ENGINEER <span> | AUG 2019 - PRESENT</span>
                    </a>
                    Front-end developer for IBM Watson Knowledge Catalog (Red
                    Dot Award for exceptional design and creativity, 2021)
                  </li>

                  <ul>
                    <li>
                      Migrated and enhanced UI components to carbon X, the
                      latest carbon UI and UX standards of IBM design system for
                      products and digital experiences
                    </li>
                    <li>
                      Fixed multiple production issues in the UI including style
                      and design issues, and functional issues.
                    </li>
                    <li>
                      Enhanced UI performance by reducing page load time by 60%,
                      by lazy loading and by making parallel calls.
                    </li>
                    <li>
                      Built hierarchy browser UI component for complex
                      hierarchical data (Mac based File and Folder System
                      layout).
                    </li>
                    <li>
                      Built the entire configuration UI page that covers
                      end-to-end life cycle of BI (Business Intelligence)
                      reporting configurations.{" "}
                    </li>
                    <li>
                      Built component library for visual testing and
                      development.
                    </li>
                  </ul>
                  <li>
                    <a href="#skills">
                      SOFTWARE DEVELOPMENT INTERN
                      <span> | JAN - JUN 2019</span>
                    </a>
                    Worked on the topic “Social Determinants of Opioid Abuse”,
                    built a visualization dashboard using IBM Cognos Analytics,
                    IBM DB2, Python and Tableau.
                  </li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      Research & Development INTERN
                      <span> | JUN - OCT 2018</span>
                    </a>{" "}
                    Worked on the topic “Blockchain based Smart Logistics”,
                    built a fully-fledged blockchain network using Hyperledger
                    fabric and composer for the backend with Express and
                    socket.io for the frontend.
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      Research & Development INTERN
                      <span> | DEC 2017</span>
                    </a>{" "}
                    Worked on the topic “Privacy on Internet” for the project
                    “Webpage fingerprinting attack for uncovering client intent”
                    • Used Python and Shell scripts to do automation tasks. •
                    Used Scipy ML libraries and Numpy libraries to predict user
                    intentions for visiting webpages.
                  </li>
                </ul>
              </div>
            </TabPanel>
          </>
        );
      } else {
        return (
          <>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      FINALIST OF IBM HACK CHALLENGE
                      <span> | JUN 2019</span>
                    </a>{" "}
                    Proposed and implemented “Relief fund management using
                    Blockchain” with Hyperledger fabric and composer
                  </li>
                  <li>
                    <a href="#skills">
                      WINNER OF IBM MEGA HACKATHON
                      <span> | OCT 2018</span>
                    </a>{" "}
                    Built a social media app using Express, Nodejs, IBM Watson
                    Node SDK, D3.js, Mongodb, Mongoose, APIs (Spotify, Twitter),
                    Passport.js and Bootstrap.
                  </li>
                  <li>
                    <a href="#skills">
                      Best solo performer for Guvi Daksh’18 - 2 days Hackathon
                      <span> | 2018</span>
                    </a>{" "}
                    Built an ML APPLICATION: predictive & descriptive analytics
                    of salary for Job Posts using Kaggle dataset. Used Random
                    Forest to train the model and used Flask, HTML & CSS for
                    building the GUI.
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      IIT-JEE <span> | 2014</span>
                    </a>{" "}
                    Top 2.24% out of 0.81 million candidates.
                  </li>
                  <li>
                    <a href="#skills">CBSE Class 12 Board Exam</a>School topper
                    in C.S. Branch with 95% marks.
                  </li>
                  <li>
                    <a href="#skills">CBSE Class 10 Board Exam</a>School topper
                    with CGPA 10/10.
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      Vice President Public Relations of BETC
                      <span> | JAN - JUL 2020</span>
                    </a>{" "}
                    Promoted the club, BETC (a member club of Toastmasters
                    International) with meeting posters distributed through
                    social media, created and edited the term’s newsletter.
                    Increased the club’s public presence to a great extent, got
                    the best committee member for the term and got appreciated
                    by District Officers.
                  </li>
                  <li>
                    <a href="#skills">
                      President of BETC
                      <span> | JUL - DEC 2020</span>
                    </a>{" "}
                    Managed and leaded the club of 30 members by giving them
                    supportive and helpful leadership for all the club’s
                    activities and growth. Provided a steady leadership despite
                    the covid 19 pandemic. All the goals for the club reached,
                    the Club got 75%-member retention, 9/10 DCP points achieved,
                    firebolt award for hosting an open-house and many more.
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li className="title">
                    <a href="#skills">Toastmasters International:</a>
                  </li>
                  <ul>
                    <li>
                      <a href="#skills">
                        Triple Crown Award
                        <span> | 2021</span>
                      </a>
                    </li>
                    <li>
                      <a href="#skills">
                        Completed level 3 of Engaging Humor Pathways
                        <span> | 2021</span>
                      </a>
                    </li>

                    <li>
                      <a href="#skills">
                        Club level Table Topics Contest
                        <span> | 2021</span>
                      </a>{" "}
                      2nd prize
                    </li>
                    <li>
                      <a href="#skills">
                        Area level Evaluation contest
                        <span> | 2020</span>
                      </a>{" "}
                      3rd prize
                    </li>

                    <li>
                      <a href="#skills">
                        Area level Humorous speech contest
                        <span> | 2019</span>
                      </a>{" "}
                      3rd prize
                    </li>
                  </ul>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">Maarga Mentor</a> Mentored underprivileged
                    children to do well in life and studies.
                  </li>
                  <li>
                    <a href="#skills">Vacation Bible School Volunteer</a> Helped
                    in organizing fun and learning activities for children.
                  </li>
                  <li>
                    <a href="#skills">Toastmaster Mentor</a> Mentored
                    toastmasters in writing speech, giving evaluation, contests
                    guidance, etc.
                  </li>
                </ul>
              </div>
            </TabPanel>
          </>
        );
      }
    };
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              {/* <Tabs className="d-flex align-items-start"> */}
              <Tabs>
                <div className="d-flex flex-row">
                  <div className="col-3">
                    <div className="pt-4">
                      <TabList className={`${tabStyle} mr-3`}>
                        <div className="d-flex flex-column ">
                          <Tab className="mb-2">{tab1}</Tab>
                          {tab2 ? <Tab className="mb-2">{tab2}</Tab> : null}
                          {tab3 ? <Tab className="mb-2">{tab3}</Tab> : null}
                          {tab4 ? <Tab className="mb-2">{tab4}</Tab> : null}
                          {tab5 ? <Tab className="mb-2">{tab5}</Tab> : null}
                        </div>
                      </TabList>
                    </div>
                  </div>
                  <div className="col-9">{loadTabData()}</div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
