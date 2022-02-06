function showData() {
    //Dom Mengambil Nilai
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    let dataObject = {
        dataName: name,
        dataEmail: email,
        dataPhone: phone,
        dataSubject: subject,
        dataMessage: message
    }


    //validation
    if (name == "") {
        alert(`name input must not be empty`)
    }
    if (email == "") {
        alert(`email input must not be empty`)
    }

    if (phone == "") {
        alert(`phone input must not be empty`)
    }

    if (subject == "") {
        alert(`subject input must not be empty`)
    }

    if (message == "") {
        alert(`message input must not be empty`)
    }
    console.log(name)

    //return alert
    if (name && email && phone && subject && message) {

        //Dom membuat element
        let emailReceiver = "fhian07@gmail.com"
        let a = document.createElement('a')
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, ${subject}, ${message}. Please contact
        me on phone ${phone}`;
        a.click();

        console.table(dataObject) 
    } 

}
