export class Api {
  
  getApi = '/hero';
  postApi = '/hero';
  deleteApi = '/hero/';

  constructor(url) {
    this.url = url;
  }

  getHeroes(handleData) {
    const endpoint = `${this.url}${this.getApi}`;

    fetch(endpoint)
      .then((rs) => {
        if (rs.ok) {
          return rs.json();
        }
      })
      .then((body) => {
        handleData(body);
      })

      .catch((err) => alert(err));
  }

  addHero(body) {
    const url = `${SERVER_URL}/hero`;

    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    fetch(url, params)
      .then((rs) => rs.json())
      .then((data) => handleData(data, heroesContainer))
      .catch((err) => console.log(err));
  }

  deleteHero(id, handleData) {
    const url = `${SERVER_URL}/hero/${id}`;

    const params = {
      method: 'DELETE',
    };

    fetch(url, params)
      .then((rs) => rs.json())
      .then((data) => handleData(data, heroesContainer))
      .catch((err) => console.log(err));
  }
}
