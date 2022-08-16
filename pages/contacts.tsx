import { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CONTACTLIST } from "../types/CONTACT";
import ContactComponent from "../components/contactComponent";

const Contacts: NextPage = () => {
    const [contactList, setContactList] = useState<CONTACTLIST>([{
        firstName: 'saniyar',
        lastName: 'karami',
        phoneNumber: '099900790244'
    }, {
        firstName: 'negar',
        lastName: 'amin',
        phoneNumber: '099900790245'
    }])
    useEffect(() => {
        console.log('fetch from server and set contactlist')
    }, [])
    return (
        <div className="flex justify-center flex-col h-screen w-1/3 mx-auto ">
            {
                contactList.map((contactInfo, index) => {
                    return <ContactComponent key={index} contactData={contactInfo}/>
                })
            }
        </div>
    )
}

export default Contacts