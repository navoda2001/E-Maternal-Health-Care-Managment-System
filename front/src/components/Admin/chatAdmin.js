import React, { useState, useEffect } from 'react';
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';


const ChatAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [message, setNewMessage] = useState("");
  var User = reactLocalStorage.getObject('User_Detail');
  const [mail, setMail] = useState(User[0].email)
  const [submit, setSubmit] = useState(true);

  useEffect(() => {
    fetchMessages();
    valid();
  }, [message]);

  const valid = () => {
    if ((message != "")) {
        setSubmit(false)
    } else {
        setSubmit(true)
    }
}

  const fetchMessages = async () => {
    try {
      const response = await axios.get(global.APIUrl + '/chat/allchat');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleMessageSend = async () => {
    const chat = { mail, message };
    try {
      await axios.post(global.APIUrl + '/chat/addchat', chat);
      window.location.href = "/ChatAdmin";
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div className="pt-1 pb-1" style={{ backgroundColor: '#F4F4F4' }}>
        <center>
          <small style={{ fontSize: '14px', letterSpacing: '2px' }} className="text-muted text-capitalize">The Largest Medical Service Hub In The Sri Lanka</small>
        </center>
      </div>      
      <MDBCard className="container mt-5">
        <h2 style={{fontWeight: 'bold',}}>Chat Community Admins</h2>
        <MDBCardBody className="chat-card">
          <MDBListGroup style={{ maxHeight: '350px', overflowY: 'scroll', border: '1px solid #e0e0e0', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
            {messages.map(message => (
              <MDBListGroupItem key={message.id}>
                <strong>{message.mail} : </strong>{message.message}
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
          <div className="input-group mt-3">
            <MDBInput
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={e => setNewMessage(e.target.value)}
              className="message-input"
            />  
            <MDBBtn style={{ marginTop: "20px",backgroundColor:'green' }} onClick={handleMessageSend} disabled={submit}>Send</MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>      
    </div>
  );
};

export default ChatAdmin;
