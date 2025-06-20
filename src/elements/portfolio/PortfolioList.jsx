import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-8",
    category: "Recommender Systems",
    title: "AdDemograph",
    link: "",
    repo: "https://github.com/nikhil-isaac/adDemograph",
    info: "End-to-end ML pipeline to predict user age & gender from user behaviour and a Dockerised Flask Application. It's the first module of the Ad Remommendation System.",
  },
  {
    image: "image-9",
    category: "Recommender Systems",
    title: "Ad-CTRPredictor",
    link: "",
    repo: "https://github.com/nikhil-isaac/Ad-CTRPredictor",
    info: "End-to-end CTR prediction for ads: gradient-boosted modeling of click-through rates with feature-importance insights and a Dockerised Flask API.",
  },
  {
    image: "image-10",
    category: "Anomaly Detection, Machine Learning",
    title: "Credit-Card Fraud Detector",
    link: "",
    repo: "https://github.com/nikhil-isaac/credit-card-fraud-detector",
    info: "End-to-end credit-card fraud detection pipeline with imbalance handling, ensemble modeling, and threshold analysis.",
  },
  {
    image: "image-4",
    category: "Data Visualization, Exploratory Data Analysis, Business Intelligence",
    title: "Bay Wheels Ride Insights",
    link: "",
    repo: "https://github.com/nikhil-isaac/bay-bike-insights",
    info: "Interactive EDA & Tableau dashboard uncovering usage patterns in the Bay Wheels bike-share network.",
  },
  {
    image: "image-5",
    category: "Machine Learning, Recommender Systems",
    title: "Recipe Recommendation Insights",
    link: "",
    repo: "https://github.com/nikhil-isaac/recipe-recsys-insights",
    info: "Personalised recipe recommendation engine — from ingredient-level EDA to a working content-based & collaborative model",
  },
  {
    image: "image-14",
    category: "Visual Analytics, EDA, Transportation",
    title: "Uber Supply–Demand Gap Analysis",
    link: "",
    repo: "https://github.com/nikhil-isaac/uber-supply-demand-gap",
    info: "Analyze temporal and geographic imbalances between Uber supply and rider demand using a custom gap metric and interactive visualizations.",
  },
  {
    image: "image-6",
    category: "Data Strategy, Business Analytics",
    title: "Olist ML Strategy Roadmap",
    link: "",
    repo: "https://github.com/nikhil-isaac/olist-ml-strategy-roadmap",
    info: "Data-Driven Delivery: Prioritized ML roadmap for Olist with a Phase-1 delivery-time predictor.",
  },
  {
    image: "image-7",
    category: "Healthcare AI, Computer Vision, Medical Imaging, Deep Learning",
    title: "Skin Cancer CNN",
    link: "",
    repo: "https://github.com/nikhil-isaac/skin-cancer-cnn",
    info: "End-to-end TensorFlow pipeline that trains a compact CNN to classify dermoscopy images into nine skin-cancer categories with ≈ 82 % validation accuracy.",
  },
  {
    image: "image-11",
    category: "Natural Language Processing, Healthcare",
    title: "Clinical-NER-Pipeline",
    link: "",
    repo: "https://github.com/nikhil-isaac/clinical-ner-pipeline",
    info: "A CRF-based NER system that extracts medical entities (drugs, conditions, anatomy, measurements) from clinical notes using handcrafted token features and cross-validated evaluation.",
  },
  {
    image: "image-12",
    category: "NLP, NMT, Deep Learning",
    title: "Attentive Spanish–English NMT",
    link: "",
    repo: "https://github.com/nikhil-isaac/spanish-eng-nmt-attention",
    info: "Attention-based Spanish→English translation with alignment heatmaps and BLEU scoring.",
  },
  {
    image: "image-13",
    category: "Data Ethics, Privacy-Preserving Analytics",
    title: "Ethical Customer Insights",
    link: "",
    repo: "https://github.com/nikhil-isaac/ethical-customer-insights",
    info: "Transaction analysis & churn prediction with privacy-preserving data masking.",
  },
  {
    image: "image-15",
    category: "Business Strategy, Marketing Analytics",
    title: "Starbucks Case Study Analysis ",
    link: "",
    repo: "https://github.com/nikhil-isaac/starbucks-case-study-analysis",
    info: "In-depth application of marketing frameworks and Lean Six Sigma to dissect Starbucks’ product offerings and operational processes.",
  },
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
                    {value.link ? (
                      <a href={value.link} rel="noreferrer" target="_blank">
                        {value.title}
                      </a>
                    ) : (
                      <div
                        style={{
                          color: "rgb(255, 250, 250)",
                        }}
                      >
                        {value.title}
                      </div>
                    )}

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
                        <a className="rn-btn" href={value.link} rel="noreferrer" target="_blank">
                          Live
                        </a>
                      </div>
                    ) : null}
                    {value.repo ? (
                      <div className="portfolio-button">
                        <a className="rn-btn" href={value.repo} rel="noreferrer" target="_blank">
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
