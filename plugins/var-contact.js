const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

/* # Exclusively from VIRUS FUCKER Project 
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved VIRUS FUCKER https://Wa.me/94779529221
# Credit : usufusta-whatsappAsena
*/
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Stefanie [OWNER]\n' // full name
            + 'ORG:Stefanie;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=94779529221:+94 77 952 9221 \n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Stefanie [OWNER]", vcard: vcard}, MessageType.contact)
}))
