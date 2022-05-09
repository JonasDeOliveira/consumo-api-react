import { Link } from 'react-router-dom'

function ListaProdutos(props) {

    const produtos = props.produtos || []

    return (
        <>
            <h2>{props.titulo}</h2>
            {
                produtos.map(item => {
                    return (
                        <h3 key={item.id}>
                            {item.id} - {item.nome} - R${item.preco} <br/>
                            <Link to={'/produto/'+item.id}>Ir para produto</Link>
                        </h3>
                    )
                })
            }

        </>
    )
}

export default ListaProdutos