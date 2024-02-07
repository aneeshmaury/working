import { IoMdArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export default function Home() {
  return (
   <>
    <nav className="flex justify-around mt-5 ">
    <div className="arr text-2xl relative left-[-24px]"><IoMdArrowBack /></div>
    <div className="midle flex items-center">24<RxCross2 />7 Help</div>
   <div></div>
    </nav>
    <div className=" border-b h-1 border-zinc-500 mt-2"></div>
   </>
  );
}
