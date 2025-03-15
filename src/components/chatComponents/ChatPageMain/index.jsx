import { ChatPageInterlocutor } from "../ChatPageInterlocutor"
import { ChatPageMessagesContainer } from "../ChatPageMessagesContainer"
import { ChatPageInput } from "../ChatPageInput"

export function ChatPageMain() {
    return (
        <main className='profileMain'>
            <ChatPageInterlocutor />
            <ChatPageMessagesContainer />
            <ChatPageInput />
        </main>
    )
}