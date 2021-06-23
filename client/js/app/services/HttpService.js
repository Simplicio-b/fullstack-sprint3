class HttpService {

  async get(url) {
    try {
      const res = await fetch(url)

      if(!res.ok) {
        throw new Error("Error ao chamar api");
      }

      return await res.json()

    } catch(err) {
      return err
    }
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
          }
        }
      };

      // usando JSON.stringifly para converter objeto em uma string no formato JSON.
      xhr.send(JSON.stringify(data));
    });
  }

}
