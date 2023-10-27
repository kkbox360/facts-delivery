export function notify(title: string, body?: string, onClick?: any) {
  new Notification(title, { body }).onclick = onClick || null;
}
