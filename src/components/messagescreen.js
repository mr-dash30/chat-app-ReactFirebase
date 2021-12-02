const Messagescreeen = (props) => {
  return (
    <div className="message">
      <img src={props.dp} alt="" />
      <div className="message_info">
        <h4 className="username">{props.user}</h4>
        <div>
          <p className="messageText">{props.message}</p>
          <small className="time">
            <span>{new Date(props.timestamp?.toDate()).toLocaleString()}</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Messagescreeen;
