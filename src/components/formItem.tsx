interface item{
    texto: string;
    nome: string;
    type?: string
    className?: string
    description?: string
}

function formItem({texto,nome,type='textarea',className,description} : item){

    return(
        <>
            <label htmlFor={nome} className=" mb-2 text-white">{texto}</label>
            <input type={type} name={nome} id={nome} className={className}/>
            <p className="text-white opacity-80 text-xs pt-2 pb-2">{description}</p>
        </>
    )
}

export default formItem