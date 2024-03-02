import { Button } from "primereact/button";

export default function Resume() {
    return (
        <div id="resume">
            <iframe
                src="src/assets/resume/Resume-SarthakNegi.pdf"
                className="resumeFrame"
                frameborder="0"
            ></iframe>
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
