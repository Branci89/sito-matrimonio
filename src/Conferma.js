import {useEffect, useState} from 'react'
import React  from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import firebase from 'firebase'

function Conferma(){

    const db = firebase.database().ref();
    const [guests, setGuest] = useState([])
    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [sectionVisible, setSection] = useState(false);
    const [invitato, setInvitato] = useState({})
    const [fresh, setFresh] = useState(true)
    
    useEffect(()=>{
        db.child("/guest").once('value')
        .then(resp=>{
            var tmpGuest =[]   
           
           resp.forEach(value=>{
           
            var tmp ={
                   NOME:value.val().NOME,
                   COGNOME:value.val().COGNOME,
                   PRESENZA: value.val().PRESENZA,
                   ID: value.key
               }
            tmpGuest.push(tmp);
           })
            setGuest(tmpGuest);
            setFresh(true)
            console.log(tmpGuest)
        })
    },[fresh])
    
    const handleNomeChange = (evt)=>{
        setNome(evt.target.value);
    }

    const handleCognomeChange = (evt)=>{
        setCognome(evt.target.value);
    }

    const cercaInvitato =()=>{
        var temp = guests.find(item=> item.NOME.toLowerCase() === nome.toLowerCase() && item.COGNOME.toLowerCase() === cognome.toLowerCase());
        if (temp !== undefined) {
            setSection(true)
            setInvitato(temp)
        } else setInvitato(null)      
    }

    const confermaPresenza = ()=>{
        var temp = invitato;
        temp.PRESENZA = true;
        temp.data = Date.now();
        firebase.database().ref('/guest/' + invitato.ID).set(temp)
        setFresh(false)
       
    }

    const cancella =()=>{
        var temp = invitato;
        temp.PRESENZA = false;
        firebase.database().ref('/guest/' + invitato.ID).set(temp)
        setFresh(false)
    }

    return(
        <div className="container">
            <h2 className="pt-1">Digita qui il tuo Nome e Cognome</h2>
            <label>Nome:</label>
            <TextField  label="Nome" value={nome} onChange={handleNomeChange} variant="outlined" />
            <label>Cognome</label>
            <TextField  label="Cognome"  value={cognome} onChange={handleCognomeChange} variant="outlined" />
            <span style={{marginTop:'20px'}}>
            <Button variant="outlined" onClick={cercaInvitato}>Cerca</Button>
            </span>
            
            {(sectionVisible && invitato !== null) && (<section>
                <div>
                    { 
                        <div>
                            <label>Nome:</label> <span>{invitato.NOME}</span><br></br>
                            <label>Cognome:</label> <span>{invitato.COGNOME}</span>
                            {
                                invitato.PRESENZA ?
                                    <div>Hai confermato la tua presenza in data {new Intl.DateTimeFormat("it-IT", {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit"
                                    }).format(invitato.data)} <Button variant="outlined" onClick={cancella}>ci ho ripensato!</Button></div> :
                                    <div>
                                        <label>Presenza</label> -
                                        <Button variant="outlined" onClick={confermaPresenza}> Conferma Presenza!</Button>
                                    </div>
                           
                            }
                        </div> 
                        
                    }
                </div>
            </section> )}
        </div>
    )
} export default Conferma