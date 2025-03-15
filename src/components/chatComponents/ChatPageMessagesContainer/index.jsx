import './styles.css';
import { useEffect, useRef } from "react";

export function ChatPageMessagesContainer() {
  const zxcRef = useRef(null);
  useEffect(() => {
      if (zxcRef.current) {
        zxcRef.current.scrollTop = zxcRef.current.scrollHeight;
      }
  }, []);

  return (
    <div className="zxc">
      <div className="messagesContainer" ref={zxcRef}>
        <div className="otherMessage">Здарова</div>
        <div className="myMessage">Пример уже моего большого месседжа которое помещается в несколько строк</div>
      </div>
    </div>
  )
}