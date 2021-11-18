const nodemailer = require('nodemailer')

exports.sendEmail = dataEmail => {
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PWD
        }
    })

    return (
        transporter.sendMail(dataEmail)
        .then(info => console.log(`Email Terkirim: ${info.response}`))
        .catch(err => console.log(`Terjadi Kesalahan: ${err}`))
    )
}