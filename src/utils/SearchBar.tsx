import { ChangeEventHandler } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";



<<<<<<< Updated upstream
export const SearchBar = () => {

    return(
        
<div className="mb-3">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
  <button
      className="relative z-[2] flex items-center rounded-l bg-primary px-2 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light">

        <  CiMicrophoneOn  className="h-5 w-5" />   
    </button>
    <input
      type="search"
      className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" />

    
    <button
      className="relative z-[2] flex items-center rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light">

        <VscSend   className="h-5 w-5" />   
    </button>

  </div>
</div>
    )
=======
export const SearchBar = (props: { text: string, setText: ChangeEventHandler<HTMLInputElement>, handleSubmit: React.MouseEventHandler<HTMLButtonElement> }) => {

  return (

    <div className="mb-3">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <button
          className="relative z-[2] flex items-center rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light">

          <  CiMicrophoneOn className="h-5 w-5" />
        </button>
        <input
          onChange={props.setText}
          value={props.text}
          type="search"
          className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1" />


        <button
          onClick={props.handleSubmit}
          className="relative z-[2] flex items-center rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light">

          <VscSend className="h-5 w-5" />
        </button>

      </div>
    </div>
  )
>>>>>>> Stashed changes
}