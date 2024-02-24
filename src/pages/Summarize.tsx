import { ListBuilder } from "../utils/ListViewBuilder";
import { TailSpin } from 'react-loader-spinner'

type summaryType = {
    summary_of_section: string,
    time_stamp: string
    title_of_section: string
}
export const Summarize = (props: { loading: boolean, summary: summaryType[] | undefined }) => {

    return (
        <div className="h-40 flex flex-col items-center justify-center  overflow-auto no-scrollbar mt-5 p-2 ">
            {props.loading ? <TailSpin
                height="40"
                width="40"
                color="green"
                ariaLabel="loading"
            /> : props.summary ?
                props.summary!.map((item: summaryType, index) => {
                    return (
                        <div className="h-30 w-50 p-2 rounded bg-slate-50">
                            <ListBuilder title={item.title_of_section} time={item.time_stamp} content={item.summary_of_section} key={index} />
                        </div>

                    )
                }) : <></>
            }

        </div>
    )
}
