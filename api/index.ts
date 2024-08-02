const baseUrl = 'http://localhost:4000';

async function fetchSideBarData() {
  try {
    const res = await fetch(`${baseUrl}/Home`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export { fetchSideBarData };
