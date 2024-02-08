import { Button, Input, Modal, ModalContent, ModalHeader, Textarea } from "@nextui-org/react";
import { useMemo, useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


type ContactPageProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function ContactPage({ isOpen, onClose }: ContactPageProps) {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const validateEmail = (email: string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (email === "") return false;

        return validateEmail(email) ? false : true;
    }, [email]);


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
        const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
        const userId = import.meta.env.VITE_APP_USER_ID;

        if (!validateEmail(email)) {
            toast.error("Invalid email address.");
            return;
        }

        emailjs.send(serviceId, templateId, { email: email, message: message }, userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success("Email sent successfully!");
                onClose();
            }, (err) => {
                console.log('FAILED...', err);
                toast.error("Failed to send email.");
            });
    }
    return (
        <div className="flex flex-col items-center">
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent className="sm:max-w-[425px] p-4">
                    <ModalHeader>Contact Me</ModalHeader>
                    <form className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 items-center gap-4">
                            <Input type="email" label="Email" placeholder="Enter your email" className="text-right" onValueChange={setEmail} isInvalid={isInvalid}
                                color={isInvalid ? "danger" : "default"}
                                errorMessage={isInvalid && "Please enter a valid email"} />
                            <Textarea label="Message" className="min-h-[100px]" placeholder="Enter your message" onValueChange={setMessage} />
                        </div>
                        <Button className="bg-black text-white" onClick={handleSubmit} isDisabled={!validateEmail(email) || message === ''}  >Submit</Button>
                    </form>
                </ModalContent>
            </Modal>
        </div>
    );
}