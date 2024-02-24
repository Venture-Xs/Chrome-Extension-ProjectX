import { SearchBar } from "../utils/SearchBar"
//import Search from "../utils/Search"


export const Chat = () => {


    return(

        <div className="h-[400px] mt-5 p-2 bg-red flex relative items-center justify-center">

            <div className=" bg-slate-500">
                    chat
            </div>

            <div className="h-[62px] p-2 rounded bg-slate-50 flex  absolute bottom-1">
                     <SearchBar />         
            </div>

        </div>
    )
}