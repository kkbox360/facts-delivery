const ipcRenderer = window.require('electron').ipcRenderer;

export async function saveFavourite(factId: string, text: string) {
  ipcRenderer.invoke('save-favourite', factId, text);
}

export async function deleteFavourite(factId: string) {
  ipcRenderer.invoke('delete-favourite', factId);
}

export async function getFavourite() {
  const results = await ipcRenderer.invoke('get-favourite');
  return results;
}
