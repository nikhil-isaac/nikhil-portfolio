import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Express JS",
    title: "Mood: Social Media App",
    link: "",
    repo: "https://github.com/nikhil-isaac/mood",
    info: "A social media app that can help the users in suggesting songs based on the mood of the other person from spotify that could make the other person happy and could also lead to a path of tackling depression.",
  },
  {
    image: "image-2",
    category: "Three.js & WebGl",
    title: "Save Mom: 3D Game",
    link: "",
    repo: "https://github.com/nikhil-isaac/save-mom",
    info: "Three.js 3D puzzle game built using WebGL",
  },
  {
    image: "image-3",
    category: "React JS",
    title: "React Bootstrap Library",
    link: "",
    repo: "https://github.com/nikhil-isaac/react-bootstrap-library",
    info: "A component library made using React Bootstrap, Bootstrap and Storybook.",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href={value.link} rel="noreferrer" target="_blank">
                      {value.title}
                    </a>
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "normal",
                        color: "rgb(219, 219, 219)",
                      }}
                    >
                      {value.info}
                    </div>
                  </h4>
                  <div className="postButtons">
                    {value.link ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Live
                        </a>
                      </div>
                    ) : null}
                    {value.repo ? (
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.repo}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Repo
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
