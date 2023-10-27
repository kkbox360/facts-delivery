export async function getFacts(url: string) {
  try {
    const res = await fetch(
      url
      // `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`
      // `https://www.boredapi.com/api/activity`
      // `https://official-joke-api.appspot.com/random_joke`
    );
    const facts = await res.json();
    return Array.isArray(facts) ? facts : [facts];
  } catch (err) {
    // TODO: add toast?
    // errorToast(e.message);
    return [];
  }
}
