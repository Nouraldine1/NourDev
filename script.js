const database = {
  "users": [
    {
      "id": 1,
      "nom": "Nour",
      "mot_de_passe": "1",
      "image": "img/OIQ.webp",
      "contacts": [2,3,5],
      "groupes": [1]
    },
    {
      "id": 2,
      "nom": "Fifi",
      "mot_de_passe": "2",
      "image": "img/OIQ.webp",
      "contacts": [1,4],
      "groupes": [1,2]
    },
    {
      "id": 5,
      "nom": "Elvira",
      "mot_de_passe": "3",
      "image": "img/elvira.png",
      "contacts": [1,2],
      "groupes": [1,2]
    },

    {
      "id": 10,
      "nom": "Edem",
      "mot_de_passe": "1",
      "image": "img/OIQ.webp",
      "contacts": [1,2,3],
      "groupes": [1]
    },
    
  ],
  "contacts": [
    {
      "id": 4,
      "nom": "Toto",
      "image": "img/OIQ.webp",
      "archive": false ,
      "bloque": false,
    },
    {
      "id": 10,
      "nom": "Edem",
      "image": "img/OIQ.webp",
      "archive": false ,
      "bloque": false,
    },
    {
      "id": 5,
      "nom": "Elvira❤️🔐",
      "image": "img/elvira.png",
      "archive": false ,
      "bloque": false,
    },
    {
      "id": 3,
      "nom": "Titi💪🏿",
      "image": "img/OIQ.webp",
      "archive": true ,
      "bloque": false,
    },
    {
      "id": 1,
      "nom": "Nour😎👍🏾",
      "image": "img/OIQ.webp",
      "archive": false ,
      "bloque": false,
    },
    {
      "id": 2,
      "nom": "Fifi",
      "image": "img/OIQ.webp",
      "archive": false ,
      "bloque": false,
    }
  ],
  "groupes": [
    {
      "id": 1,
      "nom": "Zyldoria",
      "image": "img/groupe.png",
      "membres": [1,2,5],
      "Administrateur":[1],
      "discussions": [
        {
          "id": 1,
          "expediteur": 1,
          "text": "Bonjour à tous !",
          "date": "2024-02-16T12:00:00",
          "lu": false  
        },
        {
          "id": 2,
          "expediteur": 2,
          "text": "Bonjour !",
          "date": "2024-02-16T12:05:00",
          "lu": true  
        }
      ]
    },
    {
      "id": 2,
      "nom": "GLRSB-ETSE",
      "image": "img/th.jpeg",
      "membres": [2,3,5],
      "Administrateur":[2],
      "discussions": [
        {
          "id": 1,
          "expediteur": 2,
          "text": "Bonjour les genis et les elec !",
          "date": "2024-02-16T12:00:00",
          "lu": false  
        },
        {
          "id": 2,
          "expediteur": 1,
          "text": "Bonjour Fifi !",
          "date": "2024-02-16T12:05:00",
          "lu": true  
        }
      ]
    }
  ],
  "messages": [
    {
      "id": 1,
      "expediteur": 1,
      "destinataire": [2],
      "text": "Salut, comment vas-tu ?",
      "date": "2024-02-16T12:00:00",
      "lu": false  
    },
    {
      "id": 2,
      "expediteur": 2,
      "destinataire": [1],
      "text": "Bonjour ! Je vais bien, merci.",
      "date": "2024-02-16T12:05:00",
      "lu": true  
    },
    
    {
      "id": 3,
      "expediteur": 1,
      "destinataire": [3],
      "text": "Salut Titi !",
      "date": "2024-02-16T12:10:00",
      "lu": false  
    },
    {
      "id": 4,
      "expediteur": 3,
      "destinataire": [1],
      "text": "Salut Nour !",
      "date": "2024-02-16T12:15:00",
      "lu": true  
    },
    {
      "id": 5,
      "expediteur": 1,
      "destinataire": [5],
      "text": "Salut Elvira !",
      "date": "2024-02-16T12:20:00",
      "lu": true  
    },
    {
      "id": 6,
      "expediteur": 5,
      "destinataire": [1],
      "text": "Salut Nour cmnt vas-tu !",
      "date": "2024-02-16T12:25:00",
      "lu": false  
    },
    {
      "id": 7,
      "expediteur": 2,
      "destinataire": [4],
      "text": "Salut Nour !",
      "date": "2024-02-16T12:30:00",
      "lu": false  
    },
    {
      "id": 8,
      "expediteur": 4,
      "destinataire": [2],
      "text": "Salut Fifi !",
      "date": "2024-02-16T12:35:00",
      "lu": false  
    }
  ]
};


document.addEventListener("DOMContentLoaded", function() {
  console.log("Le DOM est entièrement chargé.");

  document.querySelector('.login-form').classList.remove('hidden');
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      login(username, password);
        // Afficher le menu actif
    const activeMenu = document.querySelector('.active-menu');
    const ActifName = activeMenu.querySelector('h2');
    ActifName.textContent = "Messages";
  
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.remove('hidden');
    
    const addGroupForm = document.querySelector('.add-group-form');
    addGroupForm.classList.add('hidden');

    const container = document.querySelector('.container');
    container.classList.remove('hidden');
  
    const loginForm = document.querySelector('.login-form');
    loginForm.classList.add('hidden');

    const messageInput = document.querySelector('.message-input');
    messageInput.classList.add('hidden');

    const contactslist = document.querySelector('.contactslist');
    contactslist.classList.add('hidden');

    const addContactForm = document.querySelector('.add-contact-form');
    addContactForm.classList.add('hidden');
    

    
  });
  // Gestionnaire d'événements pour Afficher messages ou discussion
  
 const contactsContainer = document.querySelector('.contacts ul');
 contactsContainer.addEventListener('click', (e) => {
    console.log("Clic détecté sur un élément de la liste des contacts.");

    const contactElement = e.target.closest('li');
    if (contactElement) {
        const contactId = contactElement.dataset.contactId;
        const groupId = contactElement.dataset.groupId; // Ajout de la récupération de l'ID du groupe

        if (contactId) {
            displayMessages(contactId); // Si c'est un contact, afficher les messages
        } else if (groupId) {
            const addContactForm = document.querySelector('.add-contact-form');
            addContactForm.classList.add('hidden');
            const allContactOptions = document.querySelectorAll('.group-header .contact-options');
            allContactOptions.forEach(contactOptions => {
            contactOptions.style.display = 'flex'; // Afficher les options
           });
            displayGroupDiscussions(groupId); // Si c'est un groupe, afficher les détails du groupe
        } else {
            console.error("ID de contact ou de groupe introuvable.");
        };
    }
    
  const contactslist = document.querySelector('.contactslist');
  contactslist.classList.add('hidden');

  const discussionInput = document.querySelector('.discussion-input');
  discussionInput.classList.add('hidden');
});
 // Gestionnaire d'événements pour la barre de recherche de contact
  const searchBar = document.querySelector('.search-bar input');
  searchBar.addEventListener('input', function(event) {
      const searchText = event.target.value.trim().toLowerCase(); // Obtenez le texte de recherche sans espaces et en minuscules
      filterContacts(searchText);
        
   
  });
       
// Gestionnaire d'événements pour l'envoi de messages
const sendMessageButton = document.querySelector('.message-input button[type="submit"]');
sendMessageButton.addEventListener('click', function(event) {
event.preventDefault(); // Empêcher le rechargement de la page

    const messageInput = document.getElementById('messageInput'); // Récupérer le champ de saisie du message
    const messageText = messageInput.value.trim(); // Récupérer le texte du message

    if (messageText !== '') { // Vérifier si le message n'est pas vide
        // Vérifier si un contact est sélectionné
        const contactHeader = document.querySelector('.contact-header');
        if (!contactHeader.classList.contains('hidden')) { 
            const destinataireId = contactHeader.dataset.contactId; // Récupérer l'ID du destinataire depuis l'élément de contact
            sendMessage(currentUser.id, parseInt(destinataireId), messageText);
        } else { // Si aucun contact sélectionné, vérifier si un groupe est sélectionné
            const groupHeader = document.querySelector('.group-header');
            if (!groupHeader.classList.contains('hidden')) { 
                const groupId = groupHeader.dataset.groupId; // Récupérer l'ID du groupe depuis l'élément de groupe
                sendGroupMessage(currentUser.id, parseInt(groupId), messageText);
            } else {
                console.error("Aucun destinataire sélectionné pour l'envoi du message.");
            }
        }
    } else {
        console.error("Le message est vide.");
    }
    
  const contactslist = document.querySelector('.contactslist');
  contactslist.classList.add('hidden');
});
// Gestionnaire d'événements pour l'icône de message
    const messageIcon = document.querySelector('.fa-envelope');
    messageIcon.addEventListener('click', function() {
        console.log("Clic détecté sur l'icône de message.");
        displayContacts(currentUser);
   const addContactForm = document.querySelector('.add-contact-form');
   if (!addContactForm.classList.contains('hidden')) {
        addContactForm.classList.add('hidden');
    }
  
   
  
     // Afficher le menu actif
    const activeMenu = document.querySelector('.active-menu');
    
    const ActifName = activeMenu.querySelector('h2');
    ActifName.textContent = "Messages";


    const addButton = document.querySelector('.add-button');
    if (addButton) {
        addButton.classList.add('hidden');
    }
   
   
  
    const addGroupForm = document.querySelector('.add-group-form');
    addGroupForm.classList.add('hidden');

   
 
     const searchBar = document.querySelector('.search-bar');
     searchBar.classList.remove('hidden');

     
  const contactslist = document.querySelector('.contactslist');
  contactslist.classList.add('hidden');

  const discussionInput=document.querySelector('.discussion-input')
  discussionInput.classList.add('hidden')
   
    }); 
     // Gestionnaire d'événements pour l'icône discussion
    const discussionIcon = document.querySelector('.fa-comments');
    discussionIcon.addEventListener('click', function() {
        console.log("Clic détecté sur l'icône discussion.");
        displayContactsbydiscussion(currentUser);
   
     // Afficher le menu actif
    const activeMenu = document.querySelector('.active-menu');
    
    const ActifName = activeMenu.querySelector('h2');
    ActifName.textContent = "Discussions";


    const addGroupForm = document.querySelector('.add-group-form');
    addGroupForm.classList.add('hidden');

   
 
     const searchBar = document.querySelector('.search-bar');
     searchBar.classList.remove('hidden');

     const addContactForm = document.querySelector('.add-contact-form');
     addContactForm.classList.add('hidden');
   
    });
// Gestionnaire d'événements pour l'envoi de messages pour plusieurs contacts
const sendMessagedisscussionButton = document.querySelector('.discussion-input button[type="submit"]');
sendMessagedisscussionButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les cases à cocher des contacts
    const contactCheckboxes = document.querySelectorAll('.contactslist .contact-item');
    const messageInput = document.getElementById('discussionInput'); // Récupérer le champ de saisie du message
    const messageText = messageInput.value.trim();

    // Initialiser un tableau pour stocker les IDs sélectionnés
    const selectedContactIds = [];

    // Parcourir toutes les cases à cocher des contacts
    contactCheckboxes.forEach(function(checkbox) {
        // Vérifier si la case à cocher est cochée
        if (checkbox.classList.contains('selected')) {
            // Extraire l'ID du contact à partir de l'attribut data-contact-id de la case à cocher
            const contactId = parseInt(checkbox.getAttribute('data-contact-id'));
            // Ajouter l'ID du contact sélectionné au tableau
            selectedContactIds.push((contactId));
        }
    });

    // Appeler la fonction sendMessageToplusieurs une seule fois après avoir parcouru toutes les cases à cocher
    sendMessageToplusieurs(currentUser.id, selectedContactIds, messageText);
    
    contactCheckboxes.forEach(function(checkbox) {
      checkbox.classList.remove('selected');
    });
    // Utilisez les IDs des contacts sélectionnés comme vous le souhaitez, par exemple, pour envoyer le message.
    console.log("IDs des contacts sélectionnés:", selectedContactIds);
    console.log(messageText);

    
});



   
// Gestionnaire d'événements pour l'icône de la corbeille (ou tout autre icône représentant les contacts archivés)
    const archiveIcon = document.querySelector('.fa-archive');
    archiveIcon.addEventListener('click', function() {
        console.log("Clic détecté sur l'icône d'archive.");
        const archivedContacts = database.contacts.filter(contact => contact.archive && currentUser.contacts.includes(contact.id));
        displayContactsArchive(currentUser);
      const addContactForm = document.querySelector('.add-contact-form');
         const groupHeader = document.querySelector('.group-header');
         groupHeader.classList.add('hidden');
    if (!addContactForm.classList.contains('hidden')) {
        addContactForm.classList.add('hidden');
    }
    const activeMenu = document.querySelector('.active-menu');
    const ActifName = activeMenu.querySelector('h2');
    ActifName.textContent = "Archives";

  
    const addButton = document.querySelector('.add-button');
    if (addButton) {
      addButton.classList.add('hidden');
    }
    const discussionInput = document.querySelector('.discussion-input');
    discussionInput.classList.add('hidden')
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.remove('hidden');

    const addGroupForm = document.querySelector('.add-group-form');
    addGroupForm.classList.add('hidden');

    const contactslist = document.querySelector('.contactslist');
    contactslist.classList.add('hidden');

   
    });
     // Gestionnaire d'événements pour l'icône d'ajout de contact
     const addContactIcon = document.querySelector('.fa-user-plus');
     addContactIcon.addEventListener('click', function() {
         console.log("Clic détecté sur l'icône d'ajout de contact.");
 
         const addButton = document.querySelector('.add-button');
           if (addButton) {
           addButton.classList.add('hidden');
            }
         const contactsContainer = document.querySelector('.contacts');
         contactsContainer.classList.add('hidden');

         const addContactForm = document.querySelector('.add-contact-form');
         addContactForm.classList.remove('hidden');
         const activeMenu = document.querySelector('.active-menu');
         const ActifName = activeMenu.querySelector('h2');
         ActifName.textContent = "Ajouter contact";

         const searchBar = document.querySelector('.search-bar');
         searchBar.classList.add('hidden');

         const addGroupForm = document.querySelector('.add-group-form');
         addGroupForm.classList.add('hidden');

  // masquer la section des messages
  const messagesContainer=document.querySelector('.messages')
  messagesContainer.classList.add('hidden');
  const messageInput = document.querySelector('.message-input');
  messageInput.classList.add('hidden');

  const contactHeader = document.querySelector('.contact-header');
  contactHeader.classList.add('hidden');
   
  const contactslist = document.querySelector('.contactslist');
  contactslist.classList.add('hidden');

  const discussionInput=document.querySelector('.discussion-input')
  discussionInput.classList.add('hidden')

         
     });

       // Gestionnaire d'événements pour soumettre le formulaire d'ajout de contact
       const addContactForm = document.getElementById('addContactForm');
       addContactForm.addEventListener('submit', function(event) {
           event.preventDefault(); // Empêcher le formulaire de se soumettre
           const contactName = document.getElementById('contactName').value.trim();
          //  const contactImage = document.getElementById('contactImage').value.trim();
       
           addContact(contactName,currentUser);
       
           const addContactForm = document.querySelector('.add-contact-form');
           addContactForm.classList.add('hidden');
       
           const contactsContainer = document.querySelector('.contacts');
           contactsContainer.classList.remove('hidden');
      
          const activeMenu = document.querySelector('.active-menu');
          const ActifName = activeMenu.querySelector('h2');
          ActifName.textContent = "Contacts";
       
          const searchBar = document.querySelector('.search-bar');
          searchBar.classList.remove('hidden');
          

           const addButton = document.querySelector('.add-button');
           if (addButton) {
            addButton.classList.add('hidden');
            const addGroupForm = document.querySelector('.add-group-form');
            addGroupForm.classList.add('hidden');
        }
       });

    // Gestionnaire d'événements pour l'icône de groupe
const groupIcon = document.querySelector('.fa-users');
groupIcon.addEventListener('click', function() {
  console.log("Clic détecté sur l'icône de groupe.");
    // Masquer les détails d'un contact
   const groupHeader = document.querySelector('.group-header');
   groupHeader.classList.add('hidden');
   // Masquer les détails d'un contact
   const contactHeader = document.querySelector('.contact-header');
   contactHeader.classList.add('hidden');
  //messages message-input 
   const messagesContainer = document.querySelector('.messages');
   messagesContainer.classList.add('hidden');

   const addContactForm = document.querySelector('.add-contact-form');
   addContactForm.classList.add('hidden');

   const messageInput = document.querySelector('.message-input ');
   messageInput.classList.add('hidden');

   const activeMenu = document.querySelector('.active-menu');
   const ActifName = activeMenu.querySelector('h2');
   ActifName.textContent = "Groupes";
   
   const addButton = activeMenu.querySelector('.add-button');
   addButton.classList.remove('hidden')

  const searchBar = document.querySelector('.search-bar');
  searchBar.classList.remove('hidden');
  
  const addGroupForm = document.querySelector('.add-group-form');
  addGroupForm.classList.add('hidden');

         
  const contactslist = document.querySelector('.contactslist');
  contactslist.classList.add('hidden');

  const discussionInput=document.querySelector('.discussion-input')
  discussionInput.classList.add('hidden')

    displayUserGroups(currentUser);
});
    // Gestionnaire d'événements pour le bouton "Ajouter" groupe
    const addButton = document.querySelector('.add-button');
    // Gestionnaire d'événements pour le bouton "Ajouter" groupe
addButton.addEventListener('click', function() {
  console.log("Clic détecté sur le bouton Ajouter.");

  // Afficher le formulaire d'ajout de groupe
  const addGroupForm = document.querySelector('.add-group-form');
  addGroupForm.classList.remove('hidden');

  // Récupérer le select pour les membres du groupe
  const groupMembersSelect = document.getElementById('groupMembers');
  
  // Effacer les options existantes
  groupMembersSelect.innerHTML = '';

  console.log("Options précédentes effacées.");

  // Ajouter une option pour chaque contact de l'utilisateur
  currentUser.contacts.forEach(contactId => {
      // Récupérer les détails du contact à partir de son ID
      const contact = database.contacts.find(c => c.id === contactId);
      
      // Créer une nouvelle option
      const option = document.createElement('option');
      
      // Remplir les détails de l'option avec le nom et l'ID du contact
      option.value = contact.id;
      option.textContent = contact.nom;
      
      // Ajouter l'option au select
      groupMembersSelect.appendChild(option);
      console.log(`Option ajoutée pour le contact "${contact.nom}" avec l'ID ${contact.id}.`);
  });

  // Masquer d'autres éléments si nécessaire
   const activeMenu = document.querySelector('.active-menu');
   const ActifName = activeMenu.querySelector('h2');
   ActifName.textContent = "Creation de groupe";

  const searchBar = document.querySelector('.search-bar');
  searchBar.classList.add('hidden');

  const groupsContainer=document.querySelector('.groups')
  groupsContainer.classList.add('hidden')

  const contactHeader = document.querySelector('.contact-header');
  contactHeader.classList.add('hidden');

  const addButton = activeMenu.querySelector('.add-button');
  addButton.classList.add('hidden')

  const contactslist = document.querySelector('.contactslist');
  contactslist.classList.add('hidden');
 });
 // Gestionnaire d'événements pour soumettre le formulaire d'ajout de groupe
  const addGroupForm = document.getElementById('addGroupForm');
  addGroupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre

    const groupName = document.getElementById('groupName').value;
    const groupMembersSelect = document.getElementById('groupMembers');
    const selectedMembers = Array.from(groupMembersSelect.selectedOptions).map(option => parseInt(option.value));


    const activeMenu = document.querySelector('.active-menu');
   const ActifName = activeMenu.querySelector('h2');
   ActifName.textContent = "Groupes"
   
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.remove('hidden');

    // Masquer le formulaire après soumission
    const addGroupForm = document.querySelector('.add-group-form');
    addGroupForm.classList.add('hidden');
    createGroup(groupName, selectedMembers);

    const contactslist = document.querySelector('.contactslist');
  contactslist.classList.add('hidden');


  const discussionInput=document.querySelector('.discussion-input')
  discussionInput.classList.add('hidden')
 })
//  gestionnaire de deconexion
const deconexionIcone = document.querySelector('.fa-sign-out-alt');
deconexionIcone.addEventListener('click', function() {
  console.log("Clic détecté sur l'icône deconnexion.");

  const container = document.querySelector('.container');
  container.classList.add('hidden');

  const loginForm = document.querySelector('.login-form');
  loginForm.classList.remove('hidden');
});


});



let currentUser = null;

function login(username, password) {
  console.log("Tentative de connexion avec nom d'utilisateur:", username);
  const user = getCurrentUser(username, password);
  if (user) {
      console.log("Connexion réussie pour l'utilisateur:", user.nom);
      currentUser = user;
      document.querySelector('.login-form').classList.add('hidden');
      displayContacts(user);
      document.querySelector('.container').classList.remove('hidden');
  } else {
      console.log("Nom d'utilisateur ou mot de passe incorrect.");
      alert("Nom d'utilisateur ou mot de passe incorrect.");
  }
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  const discussionInput = document.querySelector('.discussion-input');
  discussionInput.classList.add('hidden');

  

  

}

function displayContacts(user) {
  console.log("Affichage des contacts pour l'utilisateur:", user.nom);
  const userContacts = user.contacts;
  const contactsContainer = document.querySelector('.contacts ul');
  contactsContainer.innerHTML = '';

  userContacts.forEach(contactId => {
      const contact = database.contacts.find(contact => contact.id === contactId);
      if (!contact.archive) {
          const lastMessage = database.messages.filter(message =>
              (message.expediteur === user.id && message.destinataire.includes(contactId)) ||
              (message.destinataire.includes(user.id) && message.expediteur === contactId)
          ).pop();

          const showUnreadIndicator = lastMessage && !lastMessage.lu;

          const contactHTML = `
              <li data-contact-id="${contact.id}">
                  <img src="${contact.image}" alt="">
                  <span class="contact-name">${contact.nom}</span>
                  <span class="contact-info">
                      <span class="last-message-time">${lastMessage ? lastMessage.date : ''}</span>
                      ${showUnreadIndicator ? '<span class="unread-indicator"></span>' : ''}
                  </span>
              </li>
          `;
       console.log()
          contactsContainer.insertAdjacentHTML('beforeend', contactHTML);
      }
  });

  const contactsSection = document.querySelector('.contacts');
  contactsSection.classList.remove('hidden');
  const messageInput = document.querySelector('.message-input');
  messageInput.classList.add('hidden');
  const contactHeader = document.querySelector('.contact-header');
  contactHeader.classList.add('hidden');
  const groupHeader = document.querySelector('.group-header');
  groupHeader.classList.add('hidden');
  const messagesContainer = document.querySelector('.messages');
  messagesContainer.classList.add('hidden');
}

function displayContactsbydiscussion(user) {
  console.log("Affichage des contacts pour l'utilisateur pour l envoi des sms:", user.nom);
  const userContacts = user.contacts;
  const contactsContainer = document.querySelector('.contactslist ul');
  contactsContainer.innerHTML = '';

  userContacts.forEach(contactId => {
      const contact = database.contacts.find(contact => contact.id === contactId);
      if (!contact.archive) {
          const contactItem = document.createElement('li');
          contactItem.dataset.contactId = contact.id;
          contactItem.classList.add('contact-item');

          // Ajouter un événement de clic pour sélectionner/désélectionner un contact
          contactItem.addEventListener('click', function() {
              contactItem.classList.toggle('selected');
          });

          const contactHTML = `
          <img src="${contact.image}" alt="">
          <span class="contact-name">${contact.nom}</span>
          <input type="checkbox" class="contact-checkbox" id="contact-id">
          `;

        
          contactItem.innerHTML = contactHTML;

          contactsContainer.appendChild(contactItem);
      }
  });

  const contactsSection = document.querySelector('.contacts');
  contactsSection.classList.add('hidden');

  const contactslist = document.querySelector('.contactslist');
  contactslist.classList.remove('hidden');

  const messageInput = document.querySelector('.message-input');
  messageInput.classList.add('hidden');

  const discussionInput = document.querySelector('.discussion-input');
  discussionInput.classList.remove('hidden');



  

  // Afficher le bouton d'envoi de message

}

function displayContactsArchive(user) {
  console.log("Affichage des contacts archivés pour l'utilisateur:", user.nom);
  const userContacts = user.contacts;
  const contactsContainer = document.querySelector('.contacts ul');
  contactsContainer.innerHTML = '';

  userContacts.forEach(contactId => {
      const contact = database.contacts.find(contact => contact.id === contactId);
      if (contact.archive) {
          const contactHTML = `
              <li data-contact-id="${contact.id}">
                  <img src="${contact.image}" alt="">
                  <span class="contact-name">${contact.nom}</span>
                  <span class="contact-info">Archivé</span>
              </li>
          `;
          contactsContainer.insertAdjacentHTML('beforeend', contactHTML);
      }
  });

  const contactsSection = document.querySelector('.contacts');
  contactsSection.classList.remove('hidden');
  const messageInput = document.querySelector('.message-input');
  messageInput.classList.add('hidden');
  const contactHeader = document.querySelector('.contact-header');
  contactHeader.classList.add('hidden');
  const messagesContainer = document.querySelector('.messages');
  messagesContainer.classList.add('hidden');
  
}

function displayMessages(contactId) {
  console.log("Affichage des messages pour le contact avec l'ID:", contactId);
  
  const messagesContainer = document.querySelector('.messages');
  messagesContainer.innerHTML = ''; // Efface les messages précédents

  const contact = database.contacts.find(contact => contact.id === parseInt(contactId));
  if (!contact) {
    console.error("Contact introuvable dans la base de données.");
    return;
  }
   // Masquer les détails d'un contact
   const groupHeader = document.querySelector('.group-header');
   groupHeader.classList.add('hidden');
   //
  const contactHeader = document.querySelector('.contact-header');
  contactHeader.classList.remove('hidden');
  const contactName = contactHeader.querySelector('h2');
  const contactImage = contactHeader.querySelector('img');
  contactName.textContent = contact.nom;
  contactImage.src = contact.image;
  contactHeader.dataset.contactId = contact.id;
  
  

  const contactMessages = database.messages.filter(message =>
    (message.expediteur === currentUser.id && message.destinataire.includes(parseInt(contactId))) ||
    (message.destinataire.includes(currentUser.id) && message.expediteur === parseInt(contactId))
  );

contactMessages.forEach(message => {
  message.lu = true;
});

console.log(contactMessages)
// Mettre à jour les messages dans la base de données
updateMessagesInDatabase(contactMessages);
  contactMessages.forEach(message => {
    const messageClass = message.expediteur === currentUser.id ? 'sent' : 'received';
    const messageHTML = `
      <div class="message ${messageClass}">
        <p>${message.text}</p>
        <span class="message-time">${message.date}</span>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
  });

  // Afficher la section des messages
  messagesContainer.classList.remove('hidden');
  const messageInput = document.querySelector('.message-input');
  messageInput.classList.remove('hidden');
}

function getCurrentUser(username, password) {
  return database.users.find(user => user.nom === username && user.mot_de_passe === password);
}

function filterContacts(searchText) {
  const contactsContainer = document.querySelector('.contacts ul');
  const contacts = Array.from(contactsContainer.children); // Convertissez les nœuds d'enfants en tableau

  contacts.forEach(contact => {
      const contactName = contact.querySelector('.contact-name').textContent.trim().toLowerCase(); // Obtenez le nom du contact sans espaces et en minuscules
      if (contactName.includes(searchText)) {
          contact.style.display = 'block'; // Afficher le contact si son nom correspond à la recherche
      } else {
          contact.style.display = 'none'; // Masquer le contact sinon
      }
  });
}


function displayUserGroups(user) {
  console.log("Affichage des groupes de l'utilisateur:", user.nom);
  const userGroupIds = user.groupes;
  const userGroups = database.groupes.filter(group => group.membres.includes(user.id));

  const groupsContainer = document.querySelector('.contacts ul');
  console.log("Groups Container:", groupsContainer); // Ajoutez cette ligne pour déboguer

  // Assurez-vous que groupsContainer est défini avant de continuer
  if (!groupsContainer) {
      console.error("Container des groupes non trouvé.");
      return;
  }

  groupsContainer.innerHTML = '';

  userGroups.forEach(group => {
      // Construisez la chaîne de date pour l'affichage
      let lastMessageTime = '';
      const lastMessage = group.discussions.length > 0 ? group.discussions[group.discussions.length - 1] : null;
      if (lastMessage) {
          const messageDate = new Date(lastMessage.date);
          lastMessageTime = `${messageDate.toLocaleDateString()} ${messageDate.toLocaleTimeString()}`;
      }

      // Déterminez s'il y a des messages non lus dans le groupe
      const hasUnreadMessages = group.discussions.some(message => !message.lu);

      // Ajoutez une classe spécifique si des messages non lus sont présents
      const unreadIndicatorClass = hasUnreadMessages ? 'unread-indicator' : '';

      // HTML pour afficher le groupe
      const groupHTML = `
          <li data-group-id="${group.id}">
              <img src="${group.image}" alt="">
              <span class="contact-name">${group.nom}</span>
              <span class="contact-info">
                  <span class="last-message-time">${lastMessageTime}</span>
                  ${hasUnreadMessages ? '<span class="unread-indicator"></span>' : ''}
              </span>
          </li>
      `;

      groupsContainer.insertAdjacentHTML('beforeend', groupHTML);
  });

  const groupsSection = document.querySelector('.contacts.groups'); // Sélectionnez la section des groupes
  groupsSection.classList.remove('hidden'); // Afficher la section des groupes
  
}

function displayGroupDiscussions(groupId) {
  console.log("Affichage des discussions pour le groupe avec l'ID:", groupId);
  
  const messagesContainer = document.querySelector('.messages');
  
  // Vérifier si messagesContainer est null avant de continuer
  if (!messagesContainer) {
    console.error("Container des messages non trouvé.");
    return;
  }

  messagesContainer.innerHTML = ''; // Efface les messages précédents

  const group = database.groupes.find(group => group.id === parseInt(groupId));
  if (!group) {
    console.error("Groupe introuvable dans la base de données.");
    return;
  }
  
  // Masquer les détails d'un contact
  const contactHeader = document.querySelector('.contact-header');
  contactHeader.classList.add('hidden');
  
  // Affichage des détails d'un groupe
  const groupHeader = document.querySelector('.group-header');
  groupHeader.classList.remove('hidden');
  const groupName = groupHeader.querySelector('h2');
  const groupImage = groupHeader.querySelector('img');
  groupName.textContent = group.nom;
  groupImage.src = group.image;
  groupHeader.dataset.groupId = group.id;
  
  // Ajout des noms des membres du groupe dans le contact header
  const groupMembers = group.membres.map(memberId => {
    const member = database.users.find(user => user.id === memberId);
    return member ? member.nom : "inconnu";
  });
  const groupMembersList = groupMembers.join(', '); // Convertir le tableau en une chaîne séparée par des virgules
  groupName.textContent = group.nom + ' (' + groupMembersList + ')';
  
  const contactOptions = groupHeader.querySelector('.contact-options');
  contactOptions.style.display ; 
  // Masquer les options de contact si l'utilisateur n'est pas administrateur du groupe
  const currentUserIsAdmin = group.Administrateur.includes(currentUser.id);
  if (!currentUserIsAdmin) {
    const contactOptions = groupHeader.querySelector('.contact-options');
    contactOptions.style.display = 'none'; // Masquer les options
  }

  group.discussions.forEach(message => {
    let messageSenderName;
    if (message.expediteur === currentUser.id) {
      messageSenderName = "Vous";
    } else {
      const sender = database.users.find(user => user.id === message.expediteur);
      messageSenderName = sender ? sender.nom : "Utilisateur inconnu";
    }

    const messageClass = message.expediteur === currentUser.id ? 'sent' : 'received';
    const messageHTML = `
      <div class="message ${messageClass}">
        <p>${messageSenderName}: ${message.text}</p>
        <span class="message-time">${message.date}</span>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
  });

  // Afficher la section des messages
  messagesContainer.classList.remove('hidden');
  const messageInput = document.querySelector('.message-input');
  messageInput.classList.remove('hidden');
}

function sendMessage(expediteurId, destinataireId, messageText) {
  const newMessage = {
      id: database.messages.length + 1, // Générer un nouvel identifiant de message
      expediteur: expediteurId,
      destinataire: [destinataireId],
      text: messageText,
      date: new Date().toISOString(),
      lu: false
  };

  // Ajouter le nouveau message à la base de données des messages
  database.messages.push(newMessage);

  // Actualiser l'affichage des messages
  displayMessages(destinataireId);

  // Effacer le champ de saisie du message après l'envoi
  document.getElementById('messageInput').value = '';
}
function sendMessageToplusieurs(expediteurId, destinataireId, messageText) {
  const newMessage = {
      id: database.messages.length + 1, // Générer un nouvel identifiant de message
      expediteur: expediteurId,
      destinataire: destinataireId,
      text: messageText,
      date: new Date().toISOString(),
      lu: false
  };

  // Ajouter le nouveau message à la base de données des messages
  database.messages.push(newMessage);
  console.log("----------------",newMessage)
  alert("Message envoyer avec succes!")
  document.getElementById('discussionInput').value = '';
  
}
function sendGroupMessage(expediteurId, groupId, messageText) {
  // Récupérer le groupe correspondant à l'ID
  const group = database.groupes.find(group => group.id === groupId);

  // Vérifier si le groupe existe
  if (group) {
          const newMessage = {
              id: group.discussions.length + 1, // ID du nouveau message dans la discussion
              expediteur: expediteurId,
              text: messageText,
              date: new Date().toISOString(),
              lu: false
          };
          // Ajouter le nouveau message à la discussion
          group.discussions.push(newMessage);
     
      // Afficher les discussions pour le groupe
      document.getElementById('messageInput').value = '';
      displayGroupDiscussions(groupId);
      console.log("Message envoyé au groupe avec succès.");
  } else {
      console.error("Groupe introuvable dans la base de données.");
  }
}

function addContact(contactName,user) {
  // Créer un nouvel objet contact
  const newContact = {
      id: database.contacts.length + 1, // Générer un nouvel identifiant de contact
      nom: contactName,
      image: "img/OIQ.webp",
      archive: false 
  };

  // Récupérer la liste des contacts depuis la base de données
  let contacts = database.contacts || [];
  const existingContactIndex = contacts.findIndex(contact => contact.id === newContact.id);
  if (existingContactIndex === -1) {
      contacts.push(newContact);
      user.contacts.push(newContact.id);
      console.log("les nouveau contact:",newContact)
      displayContacts(user);
      console.log("Le contact a été ajouté avec succès à la liste des contacts.");
  } else {
      console.log("Le contact existe déjà dans la liste des contacts.");
  }
  document.getElementById('contactName').value = '';
  
}
function updateMessagesInDatabase(updatedMessages) {
  updatedMessages.forEach(updatedMessage => {
      const index = database.messages.findIndex(msg => msg.id === updatedMessage.id);
      database.messages.splice(index, 1, updatedMessage);
  });
}


function createGroup(groupName, selectedMembers) {
  const currentUserID = currentUser.id;
  const newGroupId = database.groupes.length + 1;
  const newGroup = {
      id: newGroupId,
      nom: groupName,
      image: "img/groupe.png",
      membres:  [...selectedMembers, currentUserID],
      Administrateur: [currentUser.id],
      discussions: []
  };

  // Ajouter le nouveau groupe à la base de données
  database.groupes.push(newGroup);
  selectedMembers.forEach(memberID => {
    const user = database.users.find(user => user.id === memberID);
    if (user) {
        user.groupes.push(newGroupId);
    }
});
  currentUser.groupes.push(newGroupId);
 
 
  displayUserGroups(currentUser);

  document.getElementById('groupName').value = '';
  // document.getElementById('GroupMembers').value = '';
  
}











