import React from "react";
import ReusablePriorityPage from "@/app/priority/reusablePriorityPage";
import { Priority } from "@/state/api";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default Urgent;
