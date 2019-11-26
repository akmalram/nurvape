import React from 'react';
import './modal-styles.scss';
import jquery from 'jquery';

class Modal extends React.Component {

    state = {
        isDone: false
    }

    render() {

        const { disactivate, modalActive, modalClass } = this.props;

        let modalClasses = `modal ${modalClass}`;

        if(modalActive) modalClasses += ' active';

        const onSubmit = (e) => {
            e.preventDefault();
            jquery.ajax({
                method: "POST",
                url: "./order.php",
                data: jquery(e.target).serialize(),
            })
            .done(() => {
                this.setState({
                    isDone: true
                })
            });
        }

        const form = (
            <form id={this.props.modalClass + "-form"} onSubmit={e => onSubmit(e)} className="form">
                <h2 className="modal-heading">Зарегистрироваться</h2>
                <input className="modal-input-name" type="text" name="name" placeholder="Ваше имя" required />
                <input className="modal-input-phone" type="tel" name="phone" placeholder="Ваш номер" required />
                <input type="hidden" name="hidden" value="Заказ" />
                <input className="modal-submit btn-primary" type="submit" value="Отправить" />
            </form>
        );

        const done = (
            <div className="done">
                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiNBNUVCNzg7IiBkPSJNNDI3LjUzNCw3My4wODRsLTIyNC41MSwyMjQuNTFjLTYuMDUxLDYuMDUxLTE1Ljg2Myw2LjA1MS0yMS45MTQsMGwtOTYuNjQ1LTk2LjY0NUw4LjA5OSwyNzcuMzEzICBsMTQ1Ljc4NSwxNDUuNzg1YzEwLjEyNywxMC4xMjcsMjMuODYyLDE1LjgxNiwzOC4xODMsMTUuODE2bDAsMGMxNC4zMiwwLDI4LjA1Ny01LjY5LDM4LjE4Mi0xNS44MTZsMjczLjY1LTI3My42NUw0MjcuNTM0LDczLjA4NHoiLz4KPGcgc3R5bGU9Im9wYWNpdHk6MC4xOyI+Cgk8cGF0aCBkPSJNNDc4LjY0NiwxMjQuMTk2TDE4OS43NTQsNDEzLjA4N2MtNy45OTMsNy45OTItMTguMDQzLDEzLjQ0Mi0yOC45MDIsMTUuODcyYzkuMDY2LDYuNDI1LDE5Ljk1Niw5Ljk1NSwzMS4yMTUsOS45NTVsMCwwICAgYzE0LjMyLDAsMjguMDU3LTUuNjksMzguMTgyLTE1LjgxNmwyNzMuNjUtMjczLjY1TDQ3OC42NDYsMTI0LjE5NnoiLz4KPC9nPgo8cGF0aCBkPSJNMTkyLjA2OCw0NDcuMDE0Yy0xNi41ODcsMC0zMi4xODItNi40NTktNDMuOTEyLTE4LjE4OUwyLjM3MiwyODMuMDRjLTMuMTYzLTMuMTYzLTMuMTYzLTguMjkyLDAtMTEuNDU0bDc2LjM2Ni03Ni4zNjYgIGMzLjE2NC0zLjE2Myw4LjI5Mi0zLjE2MywxMS40NTUsMGwyOC42NjgsMjguNjY3YzMuMTYzLDMuMTYzLDMuMTYzLDguMjkyLDAsMTEuNDU0Yy0zLjE2NSwzLjE2My04LjI5MywzLjE2Mi0xMS40NTUsMGwtMjIuOTQtMjIuOTQgIGwtNjQuOTExLDY0LjkxMWwxNDAuMDU4LDE0MC4wNThjOC42NjksOC42NjksMjAuMTk1LDEzLjQ0MywzMi40NTYsMTMuNDQzYzEyLjI2LDAsMjMuNzg1LTQuNzc1LDMyLjQ1Ni0xMy40NDNsMTg2Ljk1MS0xODYuOTUyICBjMy4xNjMtMy4xNjMsOC4yOTEtMy4xNjQsMTEuNDU1LDBjMy4xNjMsMy4xNjMsMy4xNjMsOC4yOTIsMCwxMS40NTRMMjM1Ljk3OSw0MjguODI2ICBDMjI0LjI0OCw0NDAuNTU1LDIwOC42NTMsNDQ3LjAxNCwxOTIuMDY4LDQ0Ny4wMTR6Ii8+CjxwYXRoIGQ9Ik0xOTIuMDY4LDMxMC4yMzJjLTYuMzAzLDAtMTIuMjI4LTIuNDU0LTE2LjY4NC02LjkxMWwtNDUuMDY4LTQ1LjA2OGMtMy4xNjMtMy4xNjMtMy4xNjMtOC4yOTIsMC0xMS40NTQgIGMzLjE2NC0zLjE2Myw4LjI5Mi0zLjE2MywxMS40NTUsMGw0NS4wNjgsNDUuMDY4YzEuMzk2LDEuMzk2LDMuMjU0LDIuMTY1LDUuMjI5LDIuMTY1czMuODMzLTAuNzY5LDUuMjMtMi4xNjZMNDIxLjgwNiw2Ny4zNTcgIGMzLjE2NC0zLjE2Myw4LjI5Mi0zLjE2MywxMS40NTUsMGw3Ni4zNjYsNzYuMzY2YzEuNTE4LDEuNTE4LDIuMzcyLDMuNTc5LDIuMzcyLDUuNzI3cy0wLjg1Myw0LjIwOS0yLjM3Miw1LjcyN2wtNjMuNzg3LDYzLjc4NyAgYy0zLjE2NCwzLjE2My04LjI5MiwzLjE2Mi0xMS40NTUsMGMtMy4xNjMtMy4xNjMtMy4xNjMtOC4yOTIsMC0xMS40NTRsNTguMDYxLTU4LjA2bC02NC45MS02NC45MUwyMDguNzUyLDMwMy4zMjEgIEMyMDQuMjk1LDMwNy43NzcsMTk4LjM2OSwzMTAuMjMyLDE5Mi4wNjgsMzEwLjIzMnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" alt="Done icon" />
                <h2 className="modal-heading">Ваша заявка успешно отправлена!</h2>
            </div>
        );

        return (
            <div className={modalClasses}>
                <div className="modal-background" onClick={() => disactivate()}></div>
                <div className="modal-content">
                    {this.state.isDone ? done : form}
                    <div className="close-btn" onClick={() => disactivate()}>+</div>
                </div>
            </div>
        );
    }
}

export default Modal;
