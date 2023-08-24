"use strict"; // Enable strict mode to catch more programming errors

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://valorant-api.com/v1/agents')
        .then(response => response.json())
        .then(data => {
            const agentCardsContainer = document.getElementById('agentCards');

            data.data.forEach((agent, index) => {
                if (index === 9) {
                    return; // Skip the tenth iteration (index 9)
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('agent-card');

                const imgElement = document.createElement('img');
                imgElement.src = agent.fullPortrait;
                imgElement.alt = agent.displayName;

                const h1Element = document.createElement('h1');
                h1Element.textContent = agent.displayName;

                const abilitiesList = document.createElement('ul');

                agent.abilities.forEach(ability => {
                    const abilityItem = document.createElement('li');
                    abilityItem.textContent = ability.displayName;
                    abilitiesList.appendChild(abilityItem);
                });

                cardElement.appendChild(imgElement);
                cardElement.appendChild(h1Element);
                cardElement.appendChild(abilitiesList);

                // Detailed View
                const detailedView = document.createElement('div');
                detailedView.classList.add('detailed-view');
                detailedView.style.display = 'none';

                const detailedText = document.createElement('p');
                detailedText.textContent = agent.description; // You can use the appropriate property here
                detailedView.appendChild(detailedText);

                cardElement.appendChild(detailedView);

                cardElement.addEventListener('click', () => {
                    detailedView.style.display = detailedView.style.display === 'none' ? 'block' : 'none';
                });

                agentCardsContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

// document.addEventListener("DOMContentLoaded", function () {
//     fetch('https://valorant-api.com/v1/agents')
//         .then(response => response.json())
//         .then(data => {
//             const agentCardsContainer = document.getElementById('agentCards');
//
//             data.data.forEach((agent, index) => {
//                 if (index === 9) {
//                     return;
//                 }
//
//                 const cardElement = document.createElement('div')
//                 cardElement.classList.add('agent', 'card')
//
//                 const imgElement = document.createElement('img')
//                 imgElement.src = agent.fullPortrait
//                 imgElement.alt = agent.displayName
//
//                 const h1Element = document.createElement('h1');
//                 h1Element.textContent = agent.displayName;
//
//                 const agentModal = document.createElement('div')
//                 agentModal.innerHTML = `<div class="modal-content">
//                                            <span class="close">&times;</span>
//                                            <p>Agent details here...</p>
//                                        </div>`;
//
//                 cardElement.appendChild(imgElement);
//                 cardElement.appendChild(h1Element);
//
//                 agentCardsContainer.appendChild(cardElement)
//                 agentModalsContainer.appendChild(agentModal); // Add modal to the agentModals div
//
//                 cardElement.addEventListener('click', () => openModal(index));
//             })
//
//
//         })
//         .catch(error => console.error('Error fetching data:', error))
// })

// document.addEventListener("DOMContentLoaded", function () {
//     fetch('https://valorant-api.com/v1/agents')
//         .then(response => response.json())
//         .then(data => {
//             const agentCardsContainer = document.getElementById('agentCards');
//             const agentModalsContainer = document.getElementById('agentModals'); // Add this line
//
//             data.data.forEach((agent, index) => {
//                 if (index === 9) {
//                     return;
//                 }
//
//                 const cardElement = document.createElement('div');
//                 cardElement.classList.add('agent', 'card');
//
//                 const imgElement = document.createElement('img');
//                 imgElement.src = agent.fullPortrait;
//                 imgElement.alt = agent.displayName;
//
//                 const h1Element = document.createElement('h1');
//                 h1Element.textContent = agent.displayName;
//
//                 const agentModal = document.createElement('div');
//                 agentModal.classList.add('modal');
//                 agentModal.innerHTML = `<div class="modal-content">
//                                            <span class="close">&times;</span>
//                                            <p>Agent details here...</p>
//                                        </div>`;
//
//                 cardElement.appendChild(imgElement);
//                 cardElement.appendChild(h1Element);
//
//                 agentCardsContainer.appendChild(cardElement);
//                 agentModalsContainer.appendChild(agentModal);
//
//                 cardElement.addEventListener('click', () => openModal(index)); // Pass index here
//             });
//
//             // Add this part to close modals when clicking the overlay
//             window.addEventListener("click", event => {
//                 if (event.target.classList.contains('modal')) {
//                     closeModal();
//                 }
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// })
//
// function openModal(index) {
//     const modals = document.querySelectorAll('.modal'); // Select all modals
//     const modal = modals[index]; // Get the corresponding modal
//     modal.style.display = "block";
//
//     const closeButton = modal.querySelector(".close");
//     closeButton.addEventListener("click", () => closeModal(modal));
//
//     // ... rest of the code ...
// }
//
// function closeModal(index) {
//     const modal = document.querySelectorAll('.modal')[index];
//     modal.style.display = "none";
//
//     // ... rest of the code ...
// }
//
// const closeButton = agentModal.querySelector(".close");
// closeButton.addEventListener("click", () => closeModal(index)); // Close corresponding modal
//
// window.addEventListener("click", event => {
//     if (event.target === agentModal) {
//         closeModal(index); // Close corresponding modal
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     fetch('https://valorant-api.com/v1/agents')
//         .then(response => response.json())
//         .then(data => {
//             const agentCardsContainer = document.getElementById('agentCards');
//             const agentModalsContainer = document.getElementById('agentModals');
//
//             data.data.forEach((agent, index) => {
//                 if (index === 9) {
//                     return;
//                 }
//
//                 const cardElement = document.createElement('div');
//                 cardElement.classList.add('agent', 'card');
//
//                 const imgElement = document.createElement('img');
//                 imgElement.src = agent.fullPortrait;
//                 imgElement.alt = agent.displayName;
//
//                 const h1Element = document.createElement('h1');
//                 h1Element.textContent = agent.displayName;
//
//                 const agentModal = document.createElement('div');
//                 agentModal.classList.add('modal');
//                 agentModal.innerHTML = `<div class="modal-content">
//                                            <span class="close">&times;</span>
//                                            <p>Agent details here...</p>
//                                        </div>`;
//
//                 cardElement.appendChild(imgElement);
//                 cardElement.appendChild(h1Element);
//
//                 agentCardsContainer.appendChild(cardElement);
//                 agentModalsContainer.appendChild(agentModal);
//
//                 cardElement.addEventListener('click', () => openModal(index, agentModal));
//
//                 window.addEventListener("click", event => {
//                     if (event.target.classList.contains('modal')) {
//                         closeModal(agentModal);
//                     }
//                 });
//
//                 const closeButton = agentModal.querySelector(".close");
//                 closeButton.addEventListener("click", () => closeModal(agentModal));
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });
//
// function openModal(index) {
//     const modals = document.querySelectorAll('.modal');
//     const modal = modals[index];
//     modal.style.display = "block";
//
//     // ... rest of the code ...
// }
//
// function closeModal(modal) {
//     modal.style.display = "none";
//
//     // ... rest of the code ...
// }
