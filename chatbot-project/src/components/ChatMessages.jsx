import {  useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage.jsx'
import './ChatMessages.css'
function ChatMessages( {
        chatMessages}){//destructuring assignment extracting chatMessages from props object
            const chatMessagesRef = useRef(null);//to create a reference to a DOM element
            useEffect(() =>{ //react will run this function after component is created,everytime the component is updated
              

              const containerElem = chatMessagesRef.current;//current property gives us the actual DOM element
              if(containerElem){
                containerElem.scrollTop = containerElem.scrollHeight;//scroll to the bottom of the container
              }

            },[chatMessages]);
            //empty array means run only once when component is created, DEPENDANCY ARRAY(control when use effect runs)
            // give useEffect a dependancy array, 
            //to avoid running to often
          return(
              <div 
              className="chat-message-container"
              ref={chatMessagesRef}
              >
                  { chatMessages.map((chatMessage) => {
                     return(
                    <ChatMessage 
                      message={chatMessage.message} 
                      sender={chatMessage.sender}
                      key={chatMessage.id}
                    />
                  );
                })}
              </div>
          );
      }

      export default ChatMessages;