import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

import "../assets/css/contactMe.css";

export default function ContactMe() {
    return (
        <div className="contactMe">
            <Card className="contact-card">
                <h1>Contact Me</h1>
                <Divider />
                <div className="p-fluid card-fields">
                    <div className="p-field p-mt-2">
                        <label htmlFor="name">Name</label>
                        <InputText className="required" id="name" type="text" />
                    </div>
                    <div className="p-field p-mt-2">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="text" />
                    </div>
                    <div className="p-field p-mt-2">
                        <label htmlFor="message">Message</label>
                        <InputTextarea id="message" type="text" rows={5} />
                    </div>
                    <div className="p-d-flex p-jc-center p-mt-4">
                        <Button label="Send" />
                    </div>
                </div>
            </Card>
        </div>
    );
}
