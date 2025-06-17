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
      tab1 = "MS Data Science";
      tab2 = "B.Tech + M.Tech";
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
          <>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      MS Data Science
                      <span> | 2022 - 2024</span>
                    </a>
                    {"University of Arizona, USA"}
                    <ul>
                      <li>Leading public research university in the American Southwest</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content list-unstyled">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      B.Tech + M.Tech (Dual Degree) Computer Engineering
                      <span> | 2014 - 2019</span>
                    </a>
                    {
                      "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, DESIGN AND MANUFACTURING (IIITD&M) KANCHEEPURAM, CHENNAI, INDIA"
                    }
                    <ul>
                      <li>
                        Institute of National Importance Ministry of Human Resource Development,
                        Government of India
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </TabPanel>
          </>
        );
      } else if (type === "experience") {
        return (
          <>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      SOFTWARE ENGINEER <span> | AUG 2019 - OCT 2024</span>
                    </a>
                    Software Engineer specializing in Data Visualization and Artificial Intelligence
                  </li>

                  <ul>
                    <li>
                      Built React-based dashboards and UI components for the Watson Knowledge
                      Catalog, translating complex metadata and compliance requirements into
                      intuitive interfaces.
                    </li>
                    <li>
                      Developed complex data visualizations (tables, charts, hierarchical trees) to
                      represent large-scale data, ensuring accurate insights and analysis.
                    </li>
                    <li>
                      Designed and implemented the Hierarchy Browser, enabling users to visualize
                      and interact with several terabytes of hierarchical data, providing enhanced
                      data traversal and search functionality. This feature received widespread
                      praise from UX engineers, product managers, and customers.
                    </li>
                    <li>
                      Leveraged React, JavaScript, TypeScript, D3.js, and REST APIs in close
                      collaboration with product managers and data scientists.
                    </li>
                    <li>
                      Drove 60% faster page loads & 85% smaller bundles by implementing
                      lazy-loading, parallel API calls, and optimizing builds with Webpack/Rollup.
                    </li>
                    <li>
                      Launched a real-time Business Intelligence Reporting Dashboard that let
                      stakeholders track governance artifacts live, boosting operational
                      transparency and reducing manual reporting effort by over 40%.
                    </li>
                    <li>
                      Elevated code quality and reliability with comprehensive testing (Jest, RTL,
                      Storybook, Puppeteer) and SonarQube-driven security audits, cutting bug
                      backlog by 35% and accelerating release cycles.
                    </li>
                    <li>
                      Consistently wrote clean, efficient, and refactored code adhering to industry
                      standards. Utilized SonarQube to maintain code quality and address security
                      vulnerabilities.
                    </li>
                    <li>
                      Implemented comprehensive software testing using Jest, React Testing Library
                      (RTL), Storybook, and Puppeteer, writing unit tests to ensure the
                      functionality and reliability of the features developed.
                    </li>
                    <li>
                      Led performance optimization initiatives, reducing page load times by 60%
                      through lazy loading and parallel calls. Optimized code bundle sizes by 85%
                      using Rollup, Webpack, and NPM.
                    </li>
                    <li>
                      Identified and addressed critical performance bottlenecks, reducing page load
                      times from 10-15 seconds to less than 1 second by eliminating inefficient
                      code.
                    </li>
                    <li>
                      Managed code repositories and conducted security audits, identifying
                      vulnerabilities and implementing effective solutions to enhance code security
                      and product integrity.
                    </li>
                    <li>
                      Performed accessibility testing using IBM Accessibility Tools, identifying and
                      resolving accessibility issues to ensure compliance with WCAG standards.
                    </li>
                    <li>
                      Regularly presented project updates, demos, and technical insights to
                      stakeholders, receiving positive feedback for clear communication and
                      continuous improvement in presentation skills.
                    </li>
                    <li>
                      Maintained a strong commitment to professional growth by staying updated with
                      the latest trends and technologies in data visualization, AI, and backend
                      development through online courses and IBM's internal training resources.
                    </li>
                  </ul>
                  <li>
                    <a href="#skills">
                      SOFTWARE DEVELOPMENT INTERN
                      <span> | JAN - JUN 2019</span>
                    </a>
                    Worked on the topic “Social Determinants of Opioid Abuse”, built a visualization
                    dashboard using IBM Cognos Analytics, IBM DB2, Python and Tableau.
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
                    Worked on the topic “Blockchain based Smart Logistics”, built a fully-fledged
                    blockchain network using Hyperledger fabric and composer for the backend with
                    Express and socket.io for the frontend.
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
                    Worked on the topic “Privacy on Internet” for the project “Webpage
                    fingerprinting attack for uncovering client intent” • Used Python and Shell
                    scripts to do automation tasks. • Used Scipy ML libraries and Numpy libraries to
                    predict user intentions for visiting webpages.
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
                    Proposed and implemented “Relief fund management using Blockchain” with
                    Hyperledger fabric and composer
                  </li>
                  <li>
                    <a href="#skills">
                      WINNER OF IBM MEGA HACKATHON
                      <span> | OCT 2018</span>
                    </a>{" "}
                    Built a social media app using Express, Nodejs, IBM Watson Node SDK, D3.js,
                    Mongodb, Mongoose, APIs (Spotify, Twitter), Passport.js and Bootstrap.
                  </li>
                  <li>
                    <a href="#skills">
                      Best Individual Performer for Guvi Daksh’18 - 2 days Hackathon
                      <span> | 2018</span>
                    </a>{" "}
                    Built a full-stack ML application(NLP): predictive & descriptive analytics of
                    salary for Job Posts using Kaggle dataset. Used Random Forest to train the model
                    and used Flask, HTML & CSS for building the GUI.
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
                    <a href="#skills">CBSE Class 12 Board Exam</a>School topper in C.S. Branch with
                    95% marks.
                  </li>
                  <li>
                    <a href="#skills">CBSE Class 10 Board Exam</a>School topper with CGPA 10/10.
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="single-tab-content">
                <ul className="list-unstyled">
                  <li>
                    <a href="#skills">
                      President of BETC
                      <span> | JUL - DEC 2020</span>
                    </a>{" "}
                    Managed and leaded the club of 30 members by giving them supportive and helpful
                    leadership for all the club’s activities and growth. Provided a steady
                    leadership despite the covid 19 pandemic. All the goals for the club reached,
                    the Club got 75%-member retention, 9/10 DCP points achieved, firebolt award for
                    hosting an open-house and many more.
                  </li>
                  <li>
                    <a href="#skills">
                      Vice President Public Relations of BETC
                      <span> | JAN - JUL 2020</span>
                    </a>{" "}
                    Promoted the club, BETC (a member club of Toastmasters International) with
                    meeting posters distributed through social media, created and edited the term’s
                    newsletter. Increased the club’s public presence to a great extent, got the best
                    committee member for the term and got appreciated by District Officers.
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
                    <a href="#skills">Maarga Mentor</a> Mentored underprivileged children to do well
                    in life and studies.
                  </li>
                  <li>
                    <a href="#skills">Vacation Bible School Volunteer</a> Helped in organizing fun
                    and learning activities for children.
                  </li>
                  <li>
                    <a href="#skills">Toastmaster Mentor</a> Mentored toastmasters in writing
                    speech, giving evaluation, contests guidance, etc.
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
