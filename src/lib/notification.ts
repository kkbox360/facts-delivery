export function notify(title: string, body?: string, onClick?: () => void) {
  new Notification(title, { body }).onclick = onClick || null;
}
