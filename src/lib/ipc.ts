const ipcRenderer = window.require('electron').ipcRenderer;

export async function saveFavorite(factId: string, text: string) {
  ipcRenderer.invoke('save-favorite', factId, text);
}

export async function deleteFavorite(factId: string) {
  ipcRenderer.invoke('delete-favorite', factId);
}

export async function getFavorite() {
  const results = await ipcRenderer.invoke('get-favorite');
  return results;
}
