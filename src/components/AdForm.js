import CreateMediaAd from "./CreateMediaAd";
import CreateTextAd from "./CreateTextAd";

const AdForm = ({state,setFormData}) => {
  if (state == "") return;
  return (
    <>
    {state == "text" && <CreateTextAd setFormData={setFormData}/>}
    {state == "media" && <CreateMediaAd setFormData={setFormData}/>}
    </>
  );
}

export default AdForm;