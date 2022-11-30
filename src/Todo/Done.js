const Done = (props) => {
  return (
    <div>
      <div className="Wbox">
        <div className="TB">
          <p>{props.Works.title}</p>
          <p>{props.Works.body}</p>
        </div>
        <div className="BT">
          <button onClick={() => props.deL(props.Works.id)}>삭제</button>
          <button onClick={() => props.clE(props.Works.id)}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Done;
