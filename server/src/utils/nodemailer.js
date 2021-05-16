const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "rentmecar7@gmail.com",
        password: "pbiipddspjvjscws"
    }
})
transport.verify().then((res) => console.log(res))

function sendMailToUser(user, email, activationToken){
    transport: sendMail({
        from: "rentmecar7@gmail.com",
        to: email,
        subject: `Account activation link to activate E-commerce`,
        html: `Click on the link to verify your Account <b>ecommerce.com</b> localhost:2000/api/user/accountactivation/${activationToken}?user=${user}`,
    })
    .then((res)=>{
        console.log("email is ready", res)
    })
    .catch((error) =>{
        console.log(error.message)
    })
}

module.exports = {sendMailToUser};