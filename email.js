//A Users Email

let myMail = {
    name : 'Gmail',
    mailbox: ['inbox', 
              'starred', 
              'important', 
              'sent', 
              'junk',
              'draft',
            ],
    contacts: [
        {name: 'Afif', lastMessage: "What are you doing today?"},
        {name: 'Lia', lastMessage: "No, I do not want it."},
        {name: 'Yang', lastMessage: "Do you want to grab lunch?"},
    ],
    email: [
        {email: 'Google', lastEmail: "Security alert."},
        {email: 'Full Stack 102', lastEmail: "Assignment Graded"},
        {email: 'Graystone Eye', lastEmail: "Reminder: Check-in online."},
    ], 
    sent: [
        {to: 'Afif', emailSent: "I am working."},
    ],
}
// console.log(myMail);

// console.log (myMail.mailbox )// 'mailbox name'

// console.log (myMail.email); // list of emails

// console.log(myMail.email[1].lastEmail);

// const test = myMail.sent.push(myMail.email[0]);
// console.log(test);

// console.log(myMail.sent);
// console.log (myMail);

myMail.draft = [{to: 'myself', emailSent: 'You got this!'}];
console.log(myMail);




