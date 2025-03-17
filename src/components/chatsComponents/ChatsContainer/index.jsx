import { useState, useEffect } from "react";
import { SingleChat } from "../SingleChat";
import { loadChatData } from "../../../../API/GET/loadChatData";

function sortChatsByLastMessage(chats) {
  return [...chats].sort((a, b) => {
      const parseDate = (dateStr) => {
          if (!dateStr) return new Date(0);
          const [datePart, timePart] = dateStr.split(", ");
          const [day, month, year] = datePart.split(".");
          return new Date(`${year}-${month}-${day}T${timePart}`);
      };
      return parseDate(b.lastMessage?.date) - parseDate(a.lastMessage?.date);
  });
}

export function ChatsContainer({userInfo}) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
      async function loadChats() {
        const userChats = await loadChatData(userInfo.username);
        const sorted = sortChatsByLastMessage(userChats);
        setChats(sorted);
      }
      loadChats();
  }, [userInfo]);

  return (
  <>
    {chats.map((c, i) => <SingleChat chatInfo={c} key={i} />)}
  </>
  )
}