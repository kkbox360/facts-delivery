export async function getFacts(type: string = 'cat', amount: number = 1) {
  try {
    const res = await fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=${type}&amount=${amount}`
    );
    const facts = await res.json();
    return Array.isArray(facts) ? facts : [facts];
  } catch (err) {
    // TODO: add toast?
    // errorToast(e.message);
    return [];
  }
}
