import React, { Component } from "react";
// import { FiCast, FiLayers, FiUsers } from "react-icons/fi";
import { GiMicrophone } from "react-icons/gi";
import { IoCodeSlashSharp } from "react-icons/io5";
// import DesignLogo from "../../dark/designer.svg";

let WebLogo = (
  <svg width="50px" height="48px" viewBox="0 0 50 48" version="1.1">
    <g
      id="Website"
      stroke="none"
      strokeWidth="1"
      fill="#008bff"
      fillRule="evenodd"
    >
      <path
        d="M47.6190476,44.3916 C47.6190476,45.0576 47.0797619,45.6 46.4238095,45.6 L3.57619048,45.6 C2.91428571,45.6 2.38095238,45.0624 2.38095238,44.3916 L2.38095238,18 L2.38095238,13.2 L2.38095238,12 L5.95238095,12 L13.0952381,12 L16.6666667,12 L20.2380952,12 L35.1904762,12 L47.6190476,12 L47.6190476,18 L47.6190476,44.3916 Z M3.57619048,2.4 L5.95238095,2.4 L13.0952381,2.4 L16.6666667,2.4 L20.2380952,2.4 L46.4238095,2.4 C47.0821429,2.4 47.6130952,2.934 47.6178571,3.6 C47.6178571,3.6024 47.6190476,3.6048 47.6190476,3.6084 L47.6190476,9.6 L20.2380952,9.6 L16.6666667,9.6 L13.0952381,9.6 L5.95238095,9.6 L2.38095238,9.6 L2.38095238,3.6084 C2.38095238,3.6048 2.38214286,3.6024 2.38214286,3.6 C2.38690476,2.9388 2.92261905,2.4 3.57619048,2.4 L3.57619048,2.4 Z M46.4238095,0 C48.3964286,0 49.9940476,1.6068 49.9988095,3.6 C49.9988095,3.6024 50,3.606 50,3.6084 L50,3.6084 L50,44.3916 C50,46.3848 48.3928571,48 46.4238095,48 L46.4238095,48 L3.57619048,48 C1.60119048,48 0,46.3884 0,44.3916 L0,44.3916 L0.000595238095,3.6042 L0.000595238095,3.6042 C0.00476190476,2.0364 1.00238095,0.7188 2.38095238,0.222 C2.75595238,0.0864 3.1547619,0 3.57619048,0 L3.57619048,0 Z M27.3807143,17.03184 C27.192619,17.16264 27.0271429,17.33184 26.9378571,17.56224 L26.7688095,18.00024 L22.7509524,28.34664 L19.1295238,37.67784 C18.8890476,38.29464 19.1914286,38.99064 19.8045238,39.23184 C20.417619,39.47304 21.1080952,39.16824 21.347381,38.55264 L22.7509524,34.93344 L27.3807143,23.00664 L29.1545238,18.43704 C29.2104762,18.29304 29.2307143,18.14544 29.2307143,18.00024 C29.2307143,17.52024 28.9509524,17.06664 28.4807143,16.88184 C28.097381,16.73064 27.6961905,16.81224 27.3807143,17.03184 Z M14.7671429,20.75136 L13.0957143,22.43616 L8.8802381,26.68416 C8.4147619,27.15336 8.4147619,27.91296 8.8802381,28.38096 L13.0957143,32.63016 L14.7671429,34.31616 C15.232619,34.78416 15.985,34.78416 16.4504762,34.31616 C16.9159524,33.84696 16.9159524,33.08616 16.4504762,32.61936 L13.0957143,29.23656 L11.4052381,27.53256 L13.0957143,25.82976 L16.4504762,22.44816 C16.9159524,21.97896 16.9159524,21.22056 16.4504762,20.75136 C15.985,20.28216 15.232619,20.28216 14.7671429,20.75136 Z M33.6821429,20.75136 C33.2166667,21.22056 33.2166667,21.97896 33.6821429,22.44816 L35.1904762,23.96856 L38.7261905,27.53256 L35.1904762,31.09896 L33.6821429,32.61936 C33.2166667,33.08616 33.2166667,33.84696 33.6821429,34.31616 C34.0952381,34.73136 34.7261905,34.75776 35.1904762,34.43256 C35.247619,34.39296 35.3130952,34.36896 35.3654762,34.31616 L41.252381,28.38096 C41.7178571,27.91296 41.7178571,27.15336 41.252381,26.68416 L35.3654762,20.75136 C35.3130952,20.69976 35.247619,20.67456 35.1904762,20.63376 C34.7261905,20.31096 34.0952381,20.33376 33.6821429,20.75136 Z M5.95238095,4.79976 C5.29404762,4.79976 4.76190476,5.33616 4.76190476,5.99976 C4.76190476,6.66336 5.29404762,7.19976 5.95238095,7.19976 C6.61071429,7.19976 7.14285714,6.66336 7.14285714,5.99976 C7.14285714,5.33616 6.61071429,4.79976 5.95238095,4.79976 Z M9.52380952,4.79976 C8.86547619,4.79976 8.33333333,5.33616 8.33333333,5.99976 C8.33333333,6.66336 8.86547619,7.19976 9.52380952,7.19976 C10.1821429,7.19976 10.7142857,6.66336 10.7142857,5.99976 C10.7142857,5.33616 10.1821429,4.79976 9.52380952,4.79976 Z M13.0952381,4.79976 C12.4369048,4.79976 11.9047619,5.33616 11.9047619,5.99976 C11.9047619,6.66336 12.4369048,7.19976 13.0952381,7.19976 C13.7535714,7.19976 14.2857143,6.66336 14.2857143,5.99976 C14.2857143,5.33616 13.7535714,4.79976 13.0952381,4.79976 Z"
        id="frontend"
        fill="#008bff"
      ></path>
    </g>
  </svg>
);

const ServiceList = [
  {
    icon: <IoCodeSlashSharp />,
    title: "Programming languages",
    description:
      "HTML, CSS, Sass, JS, Java, Python, R, MATLAB, WebGL, SQL, C, C++, XML, JSON, Bash, Shell",
    things: "",
    tools: "",
  },
  {
    icon: WebLogo,
    title: "Software/frameworks/tools",
    description:
      "React JS, Redux, Storybook, Machine Learning & DL - Anaconda - Tensorflow, NLTK, Apache Hadoop - (Hive, Spark) & Storm, OpenCV, Flask, Android Studio/Eclipse, MySQL, MongoDB, Redis, Git, Docker, Jenkins CI, Travis CI, Jest, Swagger, Express.js, D3.js, Bootstrap, Three.js",
    things: "",
    tools: "",
  },
  {
    icon: <GiMicrophone />,
    title: "Communication Skills",
    description: "Public Speaking & presenting",
    things: "",
    tools: "",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              {/* <a href="/service-details"> */}
              <div className="service service__style--2">
                <center>
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                    {val.things ? (
                      <>
                        <h4 className="title">Things I enjoy doing</h4>
                        <p>{val.things}</p>{" "}
                      </>
                    ) : null}
                    {val.toolts ? (
                      <>
                        <h4 className="title">Tools I use</h4>
                        <p>{val.tools}</p>
                      </>
                    ) : null}
                  </div>
                </center>
              </div>
              {/* </a> */}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
