import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Contato</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Nome Completo</label>
                    <input name="name" placeholder="Coloque seu nome completo" type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Coloque seu email" type="email" />
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        rows="6"
                        placeholder="Escreva a mensagem"
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Enviar mensagem</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;