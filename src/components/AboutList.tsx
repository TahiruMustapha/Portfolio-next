import React from 'react'
import { HiChevronDoubleRight } from "react-icons/hi";

interface Props{
    title: string
}

const AboutList = ({title}:Props) => {
  return (
    <h4 className=" text-2xl font-semibold flex items-center gap-4">
    <span className=" text-designColors">
      {" "}
      <HiChevronDoubleRight />{" "}
    </span>
    {title}
  </h4>
  )
}

export default AboutList
