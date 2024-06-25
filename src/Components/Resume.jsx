import { Button } from "primereact/button";
import "../assets/css/resume.css";
import resume from "/Resume-SarthakNegi.pdf";

export default function Resume() {
  return (
    <div id="resume">
      <iframe src={resume} className="resumeFrame"></iframe>
      <div className="button">
        <a
          href="src/assets/resume/Resume-SarthakNegi.pdf"
          target="_blank"
          download={true}
        >
          <Button rounded raised outlined>
            Download
          </Button>
        </a>
      </div>
    </div>
  );
}
