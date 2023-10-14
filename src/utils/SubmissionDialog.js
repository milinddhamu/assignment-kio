import { MdDone } from 'react-icons/md';

const SubmissionDialog = () => {
  return (
    <div className="absolute flex justify-center items-center backdrop-blur-md w-full h-full" style={{minHeight:"100vh"}}>
        <div className="flex flex-col justify-center items-center drop-shadow-lg  rounded-md gap-6" style={{height:"250px",width:"400px",backgroundColor:"white", borderRadius:"8px" ,filter:"drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))" }}>
          <div className="p-4 bg-blue-500 text-2xl text-white" style={{borderRadius:"9999px"}}><MdDone /></div>
          Submitted!
        </div>
    </div>
  );
}

export default SubmissionDialog;