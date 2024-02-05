import fs from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';


import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class Service {

    #transporter

    constructor() {
        this.#transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.NODE_MAIL_EMAIL,
                pass: process.env.NODE_MAIL_PASSWORD,
            },
            //não verificar segurança
            tls: {
                rejectUnauthorized: false
            }
        })
    }

    async send(params) {
        let html

        if (params.template) {
            html = fs.readFileSync(path.join(__dirname, '..', `/data/email_template/${params.template.name}.html`), 'utf-8')

            Object.keys(params.template.data).forEach(key => {
                html = html.replace(`%${key}%`, params.template.data[key])
            })
        }
        else {
            html = params.body
        }

        var info = await this.#transporter.sendMail({
            from: params.from, // sender address
            to: params.to, // list of receivers
            subject: params.subject || 'filipecayandev@gmail.com',
            html,
        });

        return info

    }
}


export default Service