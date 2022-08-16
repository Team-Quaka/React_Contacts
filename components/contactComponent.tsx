// import { ComponentsProps } from "@mui/material";
import { NextComponentType } from "next";
import {CONTACT} from '../types/CONTACT'
interface ComponentsProps {
    contactData: CONTACT;
}

const ContactComponent = ({contactData}: ComponentsProps) => {
    return (
        <div className="flex flex-col gap-4 mb-6 border-blue-500 border-b-4">
            <div className="text-xl font-medium">
                <span>{contactData.firstName}</span>
                <span>{' '}</span>
                <span>{contactData.lastName}</span>
            </div>
            <div className="">
                <span>{contactData.phoneNumber}</span>
            </div>
        </div>
    )
}

export default ContactComponent