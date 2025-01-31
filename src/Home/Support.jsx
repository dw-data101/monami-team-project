import React, { useState } from "react";
import FAQ from "../pageComponents/Support/FAQ";
import Inquiry from "./../pageComponents/Support/Inquiry";

const Support = () => {
  const [mFAQ, setMFAQ] = useState("");
  return (
    <div>
      {
        {
          faq: <FAQ />,
          inquiry: <Inquiry />,
        }[mFAQ]
      }
    </div>
  );
};

export default Support;
