import { Button } from "@/components/ui/button";
import assetUrls from "@/app/assetUrls";

export default function Resume() {
  return (
    <div id="resume">
      <iframe src={assetUrls.resume} className="" />
      <div className="button">
        <a
          href="src/assets/resume/Resume-SarthakNegi.pdf"
          target="_blank"
          download={true}
        >
          <Button variant={"default"}>Download</Button>
        </a>
      </div>
    </div>
  );
}
