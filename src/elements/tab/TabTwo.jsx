import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "IBM";
    let tab2 = "Ericsson";
    // tab3 = "Experience",
    let tab3 = "IIT Madras";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs className="d-flex align-items-start">
                  <div className="pt-4 mr-4">
                    <TabList className={`${tabStyle} mr-3`}>
                      <div className="d-flex flex-column ">
                        <Tab className="w-100 mb-2">{tab1}</Tab>
                        <Tab className="w-100 mb-2">{tab2}</Tab>
                        <Tab className="w-100 mb-2">{tab3}</Tab>
                        {/* <Tab className="mb-2">{tab4}</Tab> */}
                      </div>
                    </TabList>
                  </div>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#service">
                            SOFTWARE ENGINEER <span> | AUG 2019 - PRESENT</span>
                          </a>
                          Front-end developer for IBM Watson Knowledge Catalog
                          (Red Dot Award for exceptional design and creativity,
                          2021)
                        </li>

                        <ul className="list-unstyled">
                          <li>
                            Migrated and enhanced UI components to carbon X, the
                            latest carbon UI and UX standards of IBM design
                            system for products and digital experiences
                          </li>
                          <li>
                            Fixed multiple production issues in the UI including
                            style and design issues, and functional issues.
                          </li>
                          <li>
                            Enhanced UI performance by reducing page load time
                            by 60%, by lazy loading and by making parallel
                            calls.
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
                          <a href="#service">
                            SOFTWARE DEVELOPMENT INTERN
                            <span> | JAN - JUN 2019</span>
                          </a>
                          Worked on the topic “Social Determinants of Opioid
                          Abuse”, built a visualization dashboard using IBM
                          Cognos Analytics, IBM DB2, Python and Tableau.
                        </li>

                        <li>
                          <li>
                            <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Research & Development INTERN
                            <span> | JUN - OCT 2018</span>
                          </a>{" "}
                          Worked on the topic “Blockchain based Smart
                          Logistics”, built a fully-fledged blockchain network
                          using Hyperledger fabric and composer for the backend
                          with Express and socket.io for the frontend.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Research & Development INTERN
                            <span> | DEC 2017</span>
                          </a>{" "}
                          Worked on the topic “Privacy on Internet” for the
                          project “Webpage fingerprinting attack for uncovering
                          client intent” • Used Python and Shell scripts to do
                          automation tasks. • Used Scipy ML libraries and Numpy
                          libraries to predict user intentions for visiting
                          webpages.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
