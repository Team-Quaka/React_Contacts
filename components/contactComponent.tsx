// import { ComponentsProps } from "@mui/material";
import { NextComponentType } from "next";
import {CONTACT} from '../types/CONTACT'
interface ComponentsProps {
    contactData: CONTACT;
}

const ContactComponent = ({contactData}: ComponentsProps) => {
    return (
        <div>
            {contactData.firstName}
        </div>
    )
}

export default ContactComponent