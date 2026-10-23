import { invitationFromFragment, preferredStore } from './invitation.js';

const button = document.getElementById('open-app');
const help = document.getElementById('open-help');
const message = document.getElementById('message');

function refreshInvitation() {
  const invitation = invitationFromFragment(window.location.hash);
  button.hidden = !invitation;
  help.hidden = !invitation;
  if (invitation) {
    button.href = invitation;
    button.rel = 'noreferrer';
    message.textContent = 'Open this invitation in the app.';
  } else {
    button.removeAttribute('href');
    message.textContent = 'This link is incomplete. Ask for the full invitation.';
  }
}

const preferred = preferredStore(navigator.userAgent, navigator.maxTouchPoints);
if (preferred) document.getElementById('stores').prepend(document.getElementById(`${preferred}-store`));
window.addEventListener('hashchange', refreshInvitation);
refreshInvitation();
