class HttpService {

  get(url) {
    return new Promise((resolve, reject) => {

        fetch(url)
          .then(el => {
            if(el.status == 200) {
              resolve(el.json())
            }else {
              reject(el.statusText)
            }
          }).catch(err => {
            reject (err)
          })
    });
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

  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     let xhr = new XMLHttpRequest();

  //     xhr.open('GET', url);

  //     xhr.onreadystatechange = () => {
  //       if (xhr.readyState == 4) {
  //         if (xhr.status == 200) {
  //           resolve(JSON.parse(xhr.responseText));
  //         } else {
  //           reject(xhr.responseText);
  //         }
  //       }
  //     };

  //     xhr.send();
  //   });
  // }

}
