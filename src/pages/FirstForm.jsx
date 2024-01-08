import { useState } from "react";

export default function FirstForm() {

    const [formData, setFormData] = useState({
        id: '',
        nome: '',
        cognome: '',
        email: '',
        cell: '',
        genere: '',
        professione:'',
        //interessi:formData.interessi,
        //immagine: formData.immagine 
    })

    const [card, setCard] = useState([])

    // estrazione valore input radio
    const [gender, setGender] = useState(null)

    const handleGenderChange = (e) =>{
        setGender(e.target.value)
    }

    //estrazione valore select-option
    const [profession, setProfession] = useState()

    const handleProfessionChange = (e) =>{
        setProfession(e.target.value)
    }

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target
        const inputValue = type == 'radio' ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newCard = {
            id: Math.floor(Math.random() * 100),
            nome: formData.nome,
            cognome: formData.cognome,
            email: formData.email,
            cell: formData.cell,
            genere: gender,
            professione: profession,
            //interessi:formData.interessi,
            //immagine: formData.immagine
        }

        setCard([...card, newCard])
        console.log(newCard)
    }




    return (
        <>
            <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 h-full">
                <div className="flex justify-center items-center h-[65%]">
                    <form className="p-4 w-[20%]" onSubmit={handleSubmit}>
                        <div className="flex justify-between mb-2">
                            <label className="text-white" htmlFor="nome">Nome</label>
                            <input className="basis-2/3" type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
                        </div>
                        <div className="flex justify-between mb-2">
                            <label className="text-white" htmlFor="cognome">Cognome</label>
                            <input className="basis-2/3" type="text" name="cognome" value={formData.cognome} onChange={handleInputChange} />
                        </div>
                        <div className="flex justify-between mb-2">
                            <label className="text-white" htmlFor="email">Email</label>
                            <input className="basis-2/3" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="flex justify-between mb-2">
                            <label className="text-white" htmlFor="cell">Cellulare</label>
                            <input className="basis-2/3" type="number" name="cell" value={formData.cell} onChange={handleInputChange} />
                        </div>
                        <div className="flex justify-between mb-2 text-white">Sesso
                            <div className="basis-1/4">
                                <input className="bg-red" type="radio" name="genere" value="uomo" checked={gender === 'uomo'} onChange={handleGenderChange} />
                                <label className="text-white" htmlFor="genere">Uomo</label>
                            </div>
                            <div >
                                <input type="radio" name="genere" value="donna" checked={gender === 'donna'} onChange={handleGenderChange} />
                                <label className="text-white" htmlFor="genere">Donna</label>
                            </div>
                        </div>
                    <div className="flex justify-between mb-2">
                        <label className="text-white" htmlFor="professione">Professione</label>
                        <select className="basis-2/3" name="professione" id="professione" value={profession} onChange={handleProfessionChange}>
                            <option  value=""></option>
                            <option  value="full-stack">Full-stack</option>
                            <option  value="front-end">Front-end</option>
                            <option  value="back-end">Back-end</option>
                        </select>
                    </div>
                    <div className="flex justify-between mb-2 text-white">
                        <span>Interessi</span>
                        <div className="basis-1/4">
                            <input name="interessi" type="checkbox" checked={[formData.interessi]}/>
                            <label htmlFor="interessi">Viaggi</label>
                        </div>
                        <div>
                            <input name="interessi" type="checkbox" checked={[formData.interessi]}/>
                            <label htmlFor="interessi">Romanzi</label>
                        </div>
                    </div>
                    {/* <div className="flex justify-between mb-2 text-white">
                        <label htmlFor="immagine">Immagine</label>
                        <input className="basis-2/3" name="immagine" type="file" />
                    </div>*/}
                        <div className="flex w-full">
                            <button className="p-2 bg-sky-500 rounded w-full" type="submit">Invia dati</button>
                        </div>
                    </form>
                </div>
                <div>
                    {card.map((elem) => {
                        return (
                            <div key={elem.id} className="flex">
                                <div>
                                    {/* <img src="https://picsum.photos/200/300" alt="" /> */}
                                </div>
                                <div>
                                    <h1>{elem.nome}</h1>
                                    <h2>{elem.cognome}</h2>
                                    <div>{elem.cell}</div>
                                    <div>{elem.email}</div>
                                    <div>{elem.genere}</div>
                                    <div>{elem.professione}</div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>



        </>
    )
}