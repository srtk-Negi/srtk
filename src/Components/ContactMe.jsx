import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "../assets/css/contactMe.css";

export default function ContactMe() {
    const form = useRef();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    alert("Message Sent!");
                },
                (error) => {
                    alert("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="contactMe">
            <Card className="contact-card">
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Contact Me</h1>
                    <Divider />
                    <div className="p-fluid card-fields">
                        <div className="p-field p-mt-2">
                            <label htmlFor="name">Name</label>
                            <InputText
                                className="required"
                                id="name"
                                type="text"
                                name="user_name"
                            />
                        </div>
                        <div className="p-field p-mt-2">
                            <label htmlFor="email">Email</label>
                            <InputText
                                id="email"
                                type="text"
                                name="user_email"
                            />
                        </div>
                        <div className="p-field p-mt-2">
                            <label htmlFor="message">Message</label>
                            <InputTextarea
                                id="message"
                                type="text"
                                rows={5}
                                name="message"
                            />
                        </div>
                        <div className="button">
                            <div className="btnContainer">
                                <Button rounded raised outlined type="submit">
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
}
