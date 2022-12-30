
const insert = (content) => {
  // // Find Calmly editor input section
  // const elements = document.getElementsByClassName('droid');

  // if (elements.length === 0) {
  //   return;
  // }

  // const element = elements[0];
  // // Grab the first p tag so we can replace it with our injection
  // const pToRemove = element.childNodes[0];
  // pToRemove.remove();
  // // Split content by \n
  // const splitContent = content.split('\n');
  // // Wrap in p tags
  // splitContent.forEach((content) => {
  //   const p = document.createElement('p');

  //   if (content === '') {
  //     const br = document.createElement('br');
  //     p.appendChild(br);
  //   } else {
  //     p.textContent = content;
  //   }

  //   // Insert into HTML one at a time
  //   element.appendChild(p);
  // });

  // const elements = document.getElementsByClassName('notranslate public-DraftEditor-content');
  // const elements = document.getElementsByClassName('public-DraftStyleDefault-block public-DraftStyleDefault-ltr');
  
  // var dummyContent = "this is to be copied to clipboard";
  // var dummy = $('<input>').val(dummyContent).appendTo('body').select()
  // document.execCommand('copy')

  // navigator.clipboard.readText()
  //                   .then(
  //                       cliptext =>
  //                           (document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr")[0].getElementsByTagName("span")[0].innerText = cliptext),
  //                           err => console.log(err)
  //                   )

  const elements = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr")[0].getElementsByTagName("span");
  if (elements.length === 0) {
      return;
  }
  
  const e = elements[0];

  // const e = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr")[0]
  e.textContent = content
  e.click()
  e.dispatchEvent(new Event("input", {bubbles:true}))
  // button enabling
  // const buttn = document.getElementsByClassName("css-1dbjc4n r-l5o3uw r-42olwf r-sdzlij r-1phboty r-rs99b7 r-19u6a5r r-2yi16 r-1qi8awa r-icoktb r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr")[0];
  // buttn.classList.remove("r-icoktb");
  // buttn.classList.add("css-18t94o4");

  // On success return true
  return true;
};

chrome.runtime.onMessage.addListener(
  // This is the message listener
  (request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
			
      // Call this insert function
      const result = insert(content);
			
      // If something went wrong, send a failed status
      if (!result) {
        sendResponse({ status: 'failed' });
      }

      sendResponse({ status: 'success' });
    }
  }
);

