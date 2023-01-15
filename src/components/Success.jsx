const Success = ({count, invites}) => {
    return (
        <div className="success-block">
            <img style={{width: '150px'}} src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Success" />
            <h3>Успешно!</h3>
            <p>Приглашение было отправлено следующим пользователям:</p>
            {
                invites.map((item, index) => <p className="success-user" key={index}> {item.first_name} {item.last_name}</p>)
            }
            <p>Всего приглашено <span className="counter">{count}</span> пользователей</p>
            <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
        </div>
    )
}

export default Success 