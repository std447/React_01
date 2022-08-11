export const TextIp = () => {
    return(
        <>
        <label htmlFor="text">Name:</label>
        <input type="text" size="30" placeholder="Enter Name" />
        </>
    )
}

export const EmailIp = ()=> {
    return(
        <>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="example@someone.com" />
        </>
    )
}

export const TelIp = () => {
    return(
        <>
        <label htmlFor="tel">Contact:</label>
        <input type="tel" name="contact" placeholder="9876543210" />
        </>
    )
}

export const NumberIp = () =>{
    return(
        <>
        <label htmlFor="number">Count:</label>
        <input type="number" name="count" value="0" min="0" />
        </>
    )
}

export default { TextIp, EmailIp, TelIp, NumberIp}