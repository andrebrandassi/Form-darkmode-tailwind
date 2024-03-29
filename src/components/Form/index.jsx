const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name,email})
    }
    return(
        <form action="" onSubmit={safeSubmit} className="h-full -mt-20 flex flex-col justify-center items-center gap-5 mx-5">
            <input className="input-style"  type="text" placeholder="Digite seu nome..." required={true} />
            <input className="input-style" type="email" placeholder="Digite seu email..." required={true} />
            <button className="button-style">Enviar</button>
        </form>
    )
}

export default Form