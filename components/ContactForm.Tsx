import React,{useState,FormEvent} from "react"
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Full Name is required'),
  emailAddress: Yup.string().email('Invalid email address').required('Email Address is required'),
  phone: Yup.string().required('Phone Number is required'),
  country: Yup.string().required('Country is required'),
  startDate: Yup.date().required('Start Date is required'),
  destination: Yup.string().required('Destination is required'),
});
export default function ContactForm(){
    const [sending, setSending] = useState(false);
  const [fullname, setFullname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [destination, setDestination] = useState("");

  const sendEnquiry = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     await validationSchema.validate({
      fullname,
      emailAddress,
      phone,
      country,
      startDate,
      destination,
    }, { abortEarly: false });

    setSending(true);

    const templateParams = {
      to_name: "Paulosafaris",
      from_name: fullname,
      email: emailAddress,
      countryorigin: country,
      contact: phone,
      startingdate: startDate,
      endingdate: enddate,
      message: enquiry,
      destination: destination,
    };

    try {
      await emailjs.send(
        "service_qrsdpmd"!,
        "template_xokmah1"!,
        templateParams,
        "KSHa03k1BgZcHc_z8"!
      );
      setSending(false);
      toast.success( "Thank you for reaching out. We will get back to you ASAP!-@PAULOSAFARIS" );
    } catch (error) {
      setSending(false);
      toast.error('Please fill in all required fields with valid information.');
      // alert("SORRY! An error occured.Please try again");
    }

    setEmailAddress("");
    setFullname("");
    setPhone("");
    setEnquiry("");
    setCountry("");
    setStartDate("");
    setEndDate("");
    setDestination("");
  };

    return(
        <>
              <form
            className="flex flex-col md:w-2/3 w-full border-2 p-4 rounded-md"
            onSubmit={sendEnquiry}>
            <p className="text-xs pb-2 text-gray-500">
              A field marked with * is required.
            </p>
            <div className="flex gap-4 sm:flex-row  flex-col w-full">
              <input
                type="text"
                disabled={sending}
                minLength={4}
                value={fullname}
                maxLength={80}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Full Name*"
                className="py-3 px-6 my-2 outline-none border text-gray-500  placeholder:text-gray-500 rounded-md w-full shadow-sm border-gray-300 text-sm placeholder:text-sm"
                required
              />
              <input
                type="email"
                disabled={sending}
                minLength={11}
                maxLength={80}
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Email Address*"
                className="py-3 px-6 my-2 outline-none border text-gray-500 placeholder:text-gray-500 w-full shadow-sm rounded-md border-gray-300 text-sm placeholder:text-sm"
                required
              />
            </div>

            <div className="flex gap-4 sm:flex-row  flex-col w-full">
              <input
                type="tel"
                disabled={sending}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your Phone Number (eg (+254) 711 431 122)"
                className="py-3 px-6 my-2 outline-none border border-gray-300 text-sm placeholder:text-sm text-gray-500  placeholder:text-gray-500 w-full shadow-sm rounded-md"
                required
                minLength={10}
              />

              <input
                value={country}
                disabled={sending}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Your Country"
                className="py-3 px-6 my-2 outline-none border-1 border-black text-sm placeholder:text-sm text-gray-500 placeholder:text-gray-500 w-full rounded-md shadow-sm"
                minLength={3}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex flex-row w-full gap-2 items-center">
                <p className="text-xs">Safari starts*</p>
                <input
                  type="date"
                  disabled={sending}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Phone No."
                  className="py-3 px-6 my-2 outline-none border text-gray-500 placeholder:text-gray-500 text-sm placeholder:text-sm border-black shadow-sm flex-1 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-row gap-2 w-full items-center">
                <p className="text-xs">Safari ends</p>
                <input
                  type="date"
                  disabled={sending}
                  value={enddate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Booking Date"
                  className="py-3 px-6 my-2 outline-none border boder-gray-300 text-sm placeholder:text-sm text-gray-500 placeholder:text-gray-500 shadow-sm rounded-md flex-1"
                />
              </div>
            </div>

            <input
              value={destination}
              disabled={sending}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Enter Safari Destination*"
              className="py-3 px-6 my-4 outline-none border rounded-md shadow-sm text-sm placeholder:text-sm placeholder:text-gray-500 text-gray-500 border-gray-300"
              required
            />

            <textarea
              value={enquiry}
              disabled={sending}
              onChange={(e) => setEnquiry(e.target.value)}
              className="py-3 px-6 text-gray-500 outline-none rounded-md border border-gray-300 text-sm placeholder:text-sm shadow-sm placeholder:text-gray-500 my-4"
              rows={5}
              placeholder="Outline your requirements"></textarea>

            <button
              disabled={!fullname || !emailAddress || sending}
              type="submit"
              className="disabled:cursor-not-allowed outline-none border duration-150 transition-all ease-out border-[#e3170a] hover:bg-transparent hover:text-[#e3170a] py-2 px-4 bg-red  text-white/90 cursor-pointer font-medium text-sm rounded-sm w-fit my-4 shadow-sm active:scale-95">
              {sending ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </>
    )
}