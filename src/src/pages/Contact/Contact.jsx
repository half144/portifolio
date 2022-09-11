import "./Contact.css"
import useAOS from "../../hooks/useAos"
import { useEffect, useState } from "react"
import { useFormSubmit } from "../../hooks/useFormSubmit"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState("")

    useEffect(() => {
        useAOS({ duration: 1500 })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            name,
            email,
            message
        }
        const res = await useFormSubmit(data)
        setLoading(false)
        res.success ? setStatus("Enviado com sucesso.") : setStatus("Ocorreu um erro, por favor tente mais tarde.")
        setName("")
        setEmail("")
        setMessage("")
        setTimeout(() => {
            setStatus("")
        }, 1400);
    }

    return (
        <div className="contact">
            <h1 data-aos="fade-right">Vamos trabalhar juntos?</h1>
            <form onSubmit={handleSubmit} data-aos="flip-down">
                <input type="text" required data-aos="zoom-in-down" placeholder="Olá! qual o seu nome?" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" required data-aos="zoom-in-down" placeholder="E seu email?" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea data-aos="zoom-in-down" required placeholder="Digite sua mensagem" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <input data-aos="zoom-in-down" className="btn" type="submit" value={loading ? "Aguarde" : "Enviar"} />
                {status && (<div className="status">{status}</div>)}
            </form>
        </div>
    )
}

export default Contact
