#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

function getContacts() {
  let contacts = fs.readFileSync(path.join(__dirname, 'directorio.json'), 'utf8');
  contacts = JSON.parse(contacts);
  return contacts;
}

// console.log(contacts);

const argv = yargs
  .usage('Usage: $0 <command> [options]')

  .command('add', 'Add a contact to directorio.json', (yargs) => {
    return yargs
      .demandOption(['name', 'number'])
  }, (argv) => {
    let contacts = getContacts();
    contacts.push({
      name: argv.name,
      number: argv.number,
    });
    let json = JSON.stringify(contacts);

    fs.writeFile(path.join(__dirname, 'directorio.json'), json, (err) => {
      if (err) throw err;

      console.log('Contact created');
      console.log('--');
      console.log(`name: ${argv.name}`);
      console.log(`number: ${argv.number}`);
    });
  })

  .command('list', 'List all contacts from directorio.json', (yargs) => {
    return yargs
      .demandOption([])
  }, (argv) => {
    let contacts = getContacts();

    console.log(`Printing ${contacts.length} contact(s)`);
    contacts.forEach((contact) => {
      console.log('--');
      console.log(`name: ${contact.name}`);
      console.log(`number: ${contact.number}`);
    });
  })

  .command('read', 'Read a contact from directorio.json', (yargs) => {
    return yargs
      .demandOption(['name'])
  }, (argv) => {
    let contacts = getContacts();
    let contact = contacts.find((contact) => (contact.name === argv.name));

    if (contact) {
      console.log('Contact found');
      console.log('--');
      console.log(`name: ${contact.name}`);
      console.log(`number: ${contact.number}`);
    } else {
      console.log('Contact not found');
    }
  })

  .command('remove', 'Remove a contact from directorio.json', (yargs) => {
    return yargs
      .demandOption(['name'])
  }, (argv) => {
    let contacts = getContacts();
    contacts = contacts.filter((contact) => (contact.name !== argv.name));
    let json = JSON.stringify(contacts);

    fs.writeFile(path.join(__dirname, 'directorio.json'), json, (err) => {
      if (err) throw err;
      console.log('Contact was removed');
    });
  })

  .options('name')
  .options('number')
  .help('h')
  .alias('h', 'help')
  .epilog('Copyright 2018 Ricardo Huamani')
  .argv;
