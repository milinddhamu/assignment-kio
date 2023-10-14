import { MdOutlineKeyboardArrowUp ,MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SortButtons = ({state , columnId , columnState}) => {

  return (
    <>
    <span className={`${(state === "desc" && columnId == columnState) ? "text-black" : "text-gray-400"}`}>
      <MdOutlineKeyboardArrowUp /></span>
      <span className={`${(state === "asc" && columnId == columnState) ? "text-black" : "text-gray-400"}`}><MdOutlineKeyboardArrowDown />
    </span>
    </>
  );
}

export default SortButtons;