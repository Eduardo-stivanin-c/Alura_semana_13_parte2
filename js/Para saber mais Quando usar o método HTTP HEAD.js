//Para saber mais: Quando usar o método HTTP HEAD

async function checaStatus(listaURLs) {
    const arrStatus = await Promise
      .all(
        listaURLs.map(async (url) => {
          try {
            const response = await fetch(url, { method: 'HEAD' })
            console.log(response)
            return response.status;
          } catch (erro) {
            return manejaErros(erro);
          }
        })
      )
    return arrStatus;
  }
  