const dbName = 'clientData';
let request;

try {
  request = indexedDB.open(dbName, 1);
} catch (e) {
  alert('Unable to open indexedDB:', e);
}

request.onerror = function(event) {
  alert('Error opening indexedDB:', event.target.errorCode);
};

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore('clients', { keyPath: 'email' });
  objectStore.createIndex('user', 'firstName', { unique: true });
};

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (!request || request.readyState !== 'done') {
    alert('Unable to add data to indexedDB: connection not established');
    return;
  }

  const db = request.result;
  const transaction = db.transaction(['clients'], 'readwrite');
  const objectStore = transaction.objectStore('clients');
  const email = form.elements.email.value;
  
  // Check if the email already exists
  const checkEmailRequest = objectStore.get(email);
  checkEmailRequest.onerror = function(event) {
    alert('Error checking if email already exists:', event.target.error);
  };
  checkEmailRequest.onsuccess = function(event) {
    const existingRecord = event.target.result;
    if (existingRecord) {
      alert('Email already exists');
      return;
    }
    
    // If the email does not exist, add the client data
    const client = {
      firstName: form.elements.FirstName.value,
      lastName: form.elements.LastName.value,
      middleInitial: form.elements.MiddleInitial.value,
      title: form.elements.Title.value,
      pronoun: form.elements.pronoun.value,
      telephone: form.elements.telephone.value,
      email: email,
      education: [],
      career: form.elements.career.value,
      income: form.elements.income.value
    };
    const checkboxes = form.elements.education;
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        client.education.push(checkboxes[i].value);
      }
    }
    const addRequest = objectStore.add(client);
    
    addRequest.onerror = function(event) {
      alert('Error adding Customer data:', event.target.error);
    };
    
    addRequest.onsuccess = function(event) {
      alert('Customer  added successfully');
      form.reset();
      // Create JSON version of the added data
      const allDataRequest = objectStore.getAll();
      allDataRequest.onsuccess = function(event) {
        const allData = event.target.result;
        const jsonData = JSON.stringify(allData);
      };
    };
  };
});
