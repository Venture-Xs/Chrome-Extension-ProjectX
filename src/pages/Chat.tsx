// import { VoiceReply } from "../utils/VoiceReply"
import { SearchBar } from "../utils/SearchBar"
//import Search from "../utils/Search"
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
import { useState } from "react";
import axios from "axios";

type messageType = {
    position: string,
    type: string,
    title: string,
    text: string
}

export const Chat = (props: { url: string }) => {
    const [messages, setMessages] = useState<messageType[]>([]);
    const [text, setText] = useState("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const handleSubmit = async () => {
        setMessages(previous => {
            return [...previous, { position: "right", type: "text", title: "You", text: text },
            { position: "left", type: "text", title: "Caitlyn", text: "Loading....." }];
        });
        setText("");
        const postData = {
            url: props.url,
            isQuery: "True",
            query: "",
            generateTest: "False"
        }
        const res = await axios.post("https://613d-103-119-241-244.ngrok-free.app/chat_bot", postData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const newMessages = [...messages];
        newMessages.pop();
        newMessages.push({ position: "left", type: "text", title: "Caitlyn", text: res.data.reply });
        setMessages(newMessages);
    }

    return (

        <div className="flex flex-col h-[400px] mt-5 p-2 bg-red flex relative items-center justify-center">


            {/* <div >
                <VoiceReply/>
            </div> */}
            <div className="overflow-auto no-scrollbar">
                {messages.map((message, index) => {
                    return (
                        <MessageBox
                            key={index}
                            position={message.position}
                            type={message.type}
                            title={message.title}
                            text={message.text}
                        />
                    )
                })}
            </div>

<<<<<<< Updated upstream
            <div className="h-[62px] p-2 rounded  flex  absolute bottom-1">
                     <SearchBar />         
=======
            <div className="h-[62px] p-2 rounded bg-slate-50 flex  absolute bottom-1">
                <SearchBar text={text} setText={handleInput} handleSubmit={handleSubmit} />
>>>>>>> Stashed changes
            </div>

        </div>
    )
}