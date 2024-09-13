



function sendNotification(email) {

  if (email.indexOf('@') === -1) { 
      return 'Invalid Email';
  }
  
    let emailParts = email.split('@');
    let username = emailParts[0];
    let domainName = emailParts[1];
  
    return `${username} sent you an email from ${domainName}`;
}

console.log(sendNotification('zihad@gmail.com'));
