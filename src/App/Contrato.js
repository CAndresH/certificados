import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

class Contrato extends Component {
    render() {
        return (
            <div style={{
                width: '600px',
                margin:'25px auto',
                justifyContent:'center',
                textAlign: 'justify',
                textJustify: 'inter-word',
            }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>

                            <h1 style={{margin:"9px 166px"}}>Ejemplo de Contrato</h1>
                        
                            Contrato celebrado en la Ciudad de México Distrito Federal, con fecha 15 de agosto de 2012, y para lo mismo comparecen 
                            los Señores: Carolina Rojo Uribe de 29 años de edad, de nacionalidad mexicana, casada, empleada, originaria y vecina del
                            municipio de Texcoco Estado de México, con domicilio en la casa número 45 de la calle Dávalos, colonia Tipillo, quien 
                            declara no tener adeudos fiscales y con registro federal de contribuyentes número  rpe00845, persona a la que en lo sucesivo 
                            se le denominará como “El deudor”; y por la otra parte, el Sr. Romualdo Mendieta Pérez, quien declara ser mayor de edad con 
                            47 años de edad, con su domicilio en la calle Ing. Raúl Méndez número 546 Col Contreras, delegación Cuajimalpa Distrito Federal, 
                            quien declara ser comerciante de profesión, encontrarse al día en los adeudos fiscales, su registro federal de contribuyentes es 
                            9853sop5 Sr. Que en adelante será denominado como “El acreedor”; ambas partes reconocen sus facultades para celebrar este contrato 
                            y se sujetarán a las siguientes declaraciones y cláusulas:

                            <br></br>
                            <br></br><br></br>
                           
                            <p style={{marginLeft:'300px'}}>México distrito Federal a 15 de agosto de 2012</p>
                            
                        

                        </Grid.Column>
                    </Grid.Row>

                
                </Grid>
            </div>
           
        );
    }
}

export default Contrato;