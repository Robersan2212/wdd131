import { participantTemplate } from './template.js';

function submitForm(event) {
    event.preventDefault();
    let totalFees = 0;
    document.querySelectorAll('input[name^="fee"]').forEach(function(input) {
        totalFees += Number(input.value);
    });
    const adultName = document.querySelector('input[name="adult_name"]').value;
    const participantCount = document.querySelectorAll('.participant').length;
    document.querySelector('form').classList.add('hide'); 
    document.querySelector('#summary').style.display = 'block';
    document.querySelector('#summary').textContent = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees} in Fees.`;
}

window.onload = function() {
    let participantCount = 1;

    document.getElementById('add').addEventListener('click', function() {
        participantCount++;
        const newParticipant = participantTemplate(participantCount);
        this.insertAdjacentHTML('beforebegin', newParticipant);
    });

    document.querySelector('form').addEventListener('submit', submitForm);
};