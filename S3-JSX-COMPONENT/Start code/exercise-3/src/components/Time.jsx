function Time() {
    // let date = new Date().toLocaleString() + ""
    let date = new Date().toLocaleString().split(',')[1].trim();
    return(
        <h2>
            {date}
        </h2>
    );
}

export default Time;