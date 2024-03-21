import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ComputerIcon from '@mui/icons-material/Computer';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2023 - Present"
          iconStyle={{ background: "red", color: "#fff" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            RoadieBrodie
          </h3>
          <p> Locate popular destinations along your road trip route to make your journey even more memorable.</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2024"
          iconStyle={{ background: "red", color: "#fff" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Task and Note Manager
          </h3>
          <p> Keep track of your activities and reminders with this app! Includes features to create, delete, and edit notes.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2023"
          iconStyle={{ background: "red", color: "#fff" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Snake
          </h3>
          <p> Based on the classic Snake arcade game! Eat the apples to increase your score. Post your high score to compete with other players!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2023"
          iconStyle={{ background: "red", color: "#fff" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            NBA Stats Comparison App
          </h3>
          <p> Use this app to better visualize the differences in stats for every NBA player!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coursera Certification
          </h3>
          <p> Java Programming: Build a Recommendation System</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coursera Certification
          </h3>
          <p> Programming Foundations with JavaScript, HTML, and CSS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coursera Certification
          </h3>
          <p> Java Programming: Principles of Software Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coursera Certification
          </h3>
          <p> Java Programming: Arrays,Lists, and Structured Data</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coursera Certification
          </h3>
          <p> Java Programming: Solving Problems with Software</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coursera Certification
          </h3>
          <p> Java Programming and Software Engineering Fundamentals Specialization</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2022-Apr 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cognizant
          </h3>
          <p> Front End Software Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Self Study
          </h3>
          <p> ReactJS, JavaScript, HTML, CSS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Houston
          </h3>
          <p> M.S. Materials Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Texas at Austin
          </h3>
          <p> B.S. Biochemistry</p>
          
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
