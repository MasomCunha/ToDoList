import React from 'react'
import { connect } from 'react-redux'

const WelcomeHeader = ( props ) => {

    const getCurrentDate = () => {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return (<p>{year} - {month<10?`0${month}`:`${month}`} - {date}</p>)
        }

    return(
        <div style={{padding: "5%"}}>
            <h1>Bem-vindo {props.UserName}</h1>
            {getCurrentDate()}
        </div>
    )

}


function mapStateToProps(state) {
    console.log(state)
    return {
        UserName: state.auth.UserName,
        };
} 

export default connect(mapStateToProps)(WelcomeHeader)