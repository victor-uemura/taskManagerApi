const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vsc@vsc.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${name}. Let me know how you get along.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vsc@vsc.com',
        subject: 'Thanks for signing up!',
        text: `Goodbye, ${name}. What went wrong.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}