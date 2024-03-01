import { useEffect, useState, useContext } from "react";
import { Global, Pesquisa } from "../../../../Context";
import "../../Style/BlockClient.css";

import SubmitBlock from "./SubmitBlock";
import { getAllClients, createClient } from "../../../../Service/Pesquisa/Client";

function Client({current}) {
    const { requestToken } = useContext(Global);
    const { setNewSearch } = useContext(Pesquisa);
    const [ newClient, setNewClient ] = useState({user: '', name: '', password: ''});
    const [list, setList] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);
    const [selected, setSelected] = useState(null);
    const [dataCollected, setDataCollected] = useState({clientId: null, qtdUsers: 0, meta: 0, total: 0});
    const [meta, setMeta] = useState(null);

    useEffect(() => {
        async function Jobs() {
            const clients = await getAllClients(requestToken);
            setList(clients);
        }
        Jobs();
    }, [forceUpdate])


    useEffect(() => {
        if (dataCollected.total > 0 && dataCollected.qtdUsers > 0) {
            const personCalc = dataCollected.total / dataCollected.qtdUsers
            setMeta(personCalc.toFixed(2))
        }
    }, [dataCollected])

    const handleInput = ({target: {name, value}}) => setDataCollected(p => ({...p, [name]: value}));
    const handleNewClient = ({target: {name, value}}) => setNewClient(p => ({...p, [name]: value}));
    const handleSubmitBlock = () => {
        const { clientId, qtdUsers } = dataCollected;
        const newObj = {
            status: true,
            value: { clientId, qtdUsers, meta }
        };
        setNewSearch(p => ({
            ...p,
            Cliente: newObj
        }));
        if (clientId !== null && meta !== null) current("Introdução");
    };

    const clientCard = (data, index) => {
        const { name, password, user, id } = data;

        const handleClick = () => {
            setDataCollected(prev => ({
                ...prev,
                clientId: id
            }));
            setSelected(id);
        }

        
        return (
            <div 
                key={"client-" + index}
                className="c-client-block-row c-client-block-hover"
                style={{
                    padding: "10px 0px 10px 0px",
                    backgroundColor: selected === id && "rgb(223, 226, 229)",
                    borderRadius: selected === id && "30px"
                }}
                onClick={handleClick}
            >
                <p className="c-client-block-text">{name}</p>
                <p className="c-client-block-text">{user}</p>
                <p className="c-client-block-text">{password}</p>
            </div>
        )
    }
    return (
        <div className="c-client-block-container">
            <div className="c-client-block-row" style={{marginBottom: "20px", borderBottom: "solid 1px black"}}>
                <p className="c-client-block-text" style={{fontWeight: "600"}}>Nome Completo</p>
                <p className="c-client-block-text" style={{fontWeight: "600"}}>Usuario</p>
                <p className="c-client-block-text" style={{fontWeight: "600"}}>Senha</p>
            </div>
            { list.map((e, i) => clientCard(e, i)) }
            <div className="c-client-block-new">
                <div className="c-client-block-row">
                    <input onChange={handleNewClient} name="name" value={newClient.name} className="c-client-block-input" type="text" placeholder="nome completo" />
                    <input onChange={handleNewClient} name="user" value={newClient.user} className="c-client-block-input" type="text" placeholder="usuário" />
                    <input onChange={handleNewClient} name="password" value={newClient.password} className="c-client-block-input" type="text" placeholder="senha" />
                </div>
                <button
                    disabled={!(newClient.name && newClient.password && newClient.user)}
                    onClick={async () => {
                        await createClient(newClient, requestToken)
                        setForceUpdate(!forceUpdate);
                        setNewClient({user: '', name: '', password: ''})
                    }} 
                    className="c-client-block-btn"
                >
                    add
                </button>
            </div>
            <br />
            <hr />
            <br />
            <div className="c-client-block-row">
                <p className="c-client-block-text" style={{fontWeight: "600"}}>Número Total de Entrevistas</p>
                <p className="c-client-block-text" style={{fontWeight: "600"}}>Quantidade de Entrevistadores</p>
                <p className="c-client-block-text" style={{fontWeight: "600"}}>Entrevista/Pessoa</p>
            </div>
            <div className="c-client-block-new">
                <div className="c-client-block-row">
                    <input name="total" onChange={handleInput} value={dataCollected.total} className="c-client-block-input" type="number" />
                    <input name="qtdUsers" onChange={handleInput} value={dataCollected.qtdUsers} className="c-client-block-input" type="number" />
                    <p className="c-client-block-input" style={{color: "black", cursor: "default"}}>{meta}</p>
                </div>
            </div>
            {
                dataCollected.clientId !== null && meta !== null && <SubmitBlock action={handleSubmitBlock} />
            }
        </div>
    )
}

export default Client;