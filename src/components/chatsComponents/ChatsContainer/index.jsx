import { SingleChat } from "../SingleChat";

export function ChatsContainer({userInfo}) {
  return (
  <>
    {userInfo.chats.map((el) => <SingleChat key={el} userInfo />)}
  </>
  )
}