import React,{useState} from "react";
import w7 from "../img/wedding/w7.jpg"
import w2 from "../img/wedding/w2.jpg"
import w3 from "../img/wedding/w3.jpg"
import w4 from "../img/wedding/w4.jpg"

function Wedding() {
    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Venue, setVenue] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Ocassion, setOcassion] = useState("");
    async function handleSubmit(e) {
        e.preventDefault()
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

        if (!(regex.test(email))) {
            alert("Invalid Email Address")
        }

        const result = await fetch("http://localhost:3700/api/inquiry", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ Name, Surname, phoneNumber, email, Venue, StartDate, EndDate, Ocassion,type:"Wedding" })
        })
        const response = await result.json()
        console.log(response)
        if (response.status === "success") alert("Thank you for your interest")
        else if (response.status === "error") {
            console.log(response)
            alert("Some error occured")
        }
    }
    return (
        <>
        <div className="d-flex justify-content-center bg-dark">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: "60rem" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={w7} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={w2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={w3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={w4} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <h3 style={{ textAlign: "center" }}>Wedding Inquiry</h3>
        <form className="px-2" method="post" onSubmit={handleSubmit}>
                    <table className="table border border-2 border-dark">
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" name="name" placeholder="Name" style={{ width: "24.5rem" }} value={Name} onChange={e => setName(e.target.value)} required/>
                                </td>
                                <td>
                                    <input type="text" name="surname" placeholder="Surname" style={{ width: "24.5rem" }}  value={Surname} onChange={e => setSurname(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="email" name="email" placeholder="Email" style={{ width: "24.5rem" }}  value={email} onChange={e => setEmail(e.target.value)} required/>
                                </td>
                                <td>
                                    <input type="number" name="number" placeholder="Phone Number" style={{ width: "24.5rem" }}  value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label > Start Date
                                    <input type="date"  name="startdate" onChange={e => setStartDate(e.target.value)} required></input></label>
                                </td>
                                <td>
                                <label > End Date
                                    <input type="date"  name="enddate" onChange={e => setEndDate(e.target.value)} required></input></label>
                                </td>
                            </tr>
                            <tr>
                                <td width={"50%"}>
                                    <textarea placeholder="Venue" rows={6} cols={50} name="venue"  value={Venue} onChange={e => setVenue(e.target.value)} required/>
                                </td>
                                <td>
                                    <select onChange={e => setOcassion(e.target.value)}> 
                                        <option hidden> -----Select Ocassion-----</option >
                                        <option value="Only Wedding">Only Wedding</option >
                                        <option value="Only Sangeet">Only Sangeet</option >
                                        <option value="Only Reception">Only Reception</option >
                                        <option value="Only Haldi">Only Haldi</option >
                                        <option value="Wedding & Reception">Wedding & Reception</option >
                                        <option value="Wedding & Haldi">Wedding & Haldi</option >
                                        <option value="Wedding & Sangeet">Wedding & Sangeet</option >
                                        <option value="Wedding , Haldi & Sangeet">Wedding , Haldi & Sangeet</option >
                                        <option value="Wedding , Reception & Sangeet">Wedding , Reception & Sangeet</option >
                                        <option value="Everything">Everything</option >
                                    </select >
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                <input type="submit" value="Submit" className="d-block m-auto" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
        </>
    )
}

export default Wedding;