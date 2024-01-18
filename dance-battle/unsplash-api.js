class UnsplashApi {

  #host = 'https://api.unsplash.com/';
  #randomPhotoApi = '/photos/random';
  #accessKey = 'NYz89EcUwh9bzHjYeAuDEDn0EXltv5DuMpxIXeie0mY';
  #clientIdQueryParam = 'client_id=';

  getRandomPhoto(handleSuccess, handleError) {
    const url =
      this.#host +
      this.#randomPhotoApi +
      '?' +
      this.#clientIdQueryParam +
      this.#accessKey;


    fetch(url)
        .then(rs => rs.json())
        .then(data => handleSuccess(data))
        .catch(err => {
            handleError();
        })
  }


}
