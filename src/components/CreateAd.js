import AdTypeCard from "@/utils/AdTypeCard";
import { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import CreateTextAd from "./CreateTextAd";
import CreateMediaAd from "./CreateMediaAd";
import AdForm from "./AdForm";
import { useRouter } from "next/router";
import SubmissionDialog from "@/utils/SubmissionDialog";

const CreateAd = () => {
  const [checkedTextAd, setCheckedTextAd] = useState(false);
  const [checkedMediaAd, setCheckedMediaAd] = useState(false);
  const [openFormState, setOpenFormState] = useState(false);
  const [formState, setFormState] = useState("");
  const [formData , setFormData ] = useState(null); //form data will fix later
  const [isAdSubmitted , setIsAdSubmitted] = useState(false);
  const handleSubmit = () => {
    if(formState == "") return;
    if(openFormState == false){setOpenFormState(true);}
    if(openFormState == true){setIsAdSubmitted(true)}
  };
  const router = useRouter();
  const handleTextAdClick = () => {
    if (checkedTextAd) {
      setCheckedTextAd(false);
      setFormState("");
    } else {
      setCheckedMediaAd(false);
      setFormState("text");
      setCheckedTextAd(true);
    };
  };
  
  const handleMediaAdClick = () => {
    if (checkedMediaAd) {
      setCheckedMediaAd(false);
      setFormState("");
    } else {
      setCheckedTextAd(false);
      setFormState("media");
      setCheckedMediaAd(true);
    };
  };

  useEffect(()=>{
    if(isAdSubmitted == true){
      setTimeout(()=>{
        router.push("/")
      },600)
    }
  },[isAdSubmitted])
  
  return (
    <>
      
      <div className="flex flex-col w-full relative">
        <div className="p-4">
        <div className="flex flex-col w-full border p-4 rounded-[4px] relative gap-5 bg-white h-full justify-around">
          <h1 className="text-lg font-semibold">Create Ads</h1>

          {/* Ad Type Cards Media or Text Ad */}
          <div className="flex-1">
            {!openFormState ?
              <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-12">
                <AdTypeCard image="/ad-2.png" type="text" onClick={handleTextAdClick} checked={checkedTextAd} />
                <AdTypeCard image="/ad-1.png" type="media" onClick={handleMediaAdClick} checked={checkedMediaAd} />
              </div>
              :
              // Ads Form based on type
              <AdForm state={formState} setFormData={setFormData} />}
          </div>


              {/* bottom buttons submit & next */}
          <div className="flex flex-row justify-end gap-4">
            {openFormState && <button onClick={()=> setOpenFormState(false)} className="px-4 py-1 md:px-10 rounded-[4px] border hover:bg-gray-100 transition-all">Back</button>}
            <button onClick={handleSubmit} className={`px-4 py-2 md:px-10 rounded-[4px] ${(!formState == "") ? "bg-blue-500 hover:bg-blue-600 " : "bg-gray-400 pointer-events-none"} text-white transition-all   w-36`}>{openFormState ? "Submit" : "Next"}</button>
          </div>


        </div>
        </div>
        {isAdSubmitted && <SubmissionDialog />}
      </div>
    </>
  );
}

export default CreateAd;