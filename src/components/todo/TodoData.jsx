const TodoData = (props) =>{
    const {Name,Age} = props;
    return (
        <>
         <div className="todo-data">
            <div>Tôi tên là : {Name}</div>
            <div>Tôi: {Age} Tuổi</div>
         </div>
        </>
    )
}
export default TodoData;