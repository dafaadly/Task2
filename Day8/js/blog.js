let dataBlogs = [];

let isHamburgerOpen = false;

const openHamburger = () => {
  let hamburgerItemsElement = document.getElementById("hamburger-list");

  if (!isHamburgerOpen) {
    hamburgerItemsElement.style.display = "block";
    isHamburgerOpen = true;
  } else {
    hamburgerItemsElement.style.display = "none";
    isHamburgerOpen = false;
  }
};

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let deskripsi = document.getElementById("deskripsi").value;
  let uploadImage = document.getElementById("image-upload").value;
  let nodeJs = document.getElementById("node-js").checked;
  let vueJs = document.getElementById("vue-js").checked;
  let reactJs = document.getElementById("react-js").checked;
  let typeScript = document.getElementById("type-script").checked;

  let postAt = new Date();

  let dataBlog = {
    projectName,
    startDate,
    endDate,
    deskripsi,
    uploadImage,
    nodeJs,
    vueJs,
    reactJs,
    typeScript,
    postAt,
  };

  console.log(dataBlog);

  dataBlogs.push(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlogs.length; index++) {
    let techIcon = "";

    if (dataBlogs[index].nodeJs) {
      techIcon += `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAv5JREFUSEvFllmoT1EUxn8XmTKLzC9KUTJGRKSQkgwhSVeGZJ7niCJDiXghQ0ny4oG8iWQoHkQpDxIlU5nJLMP6tI6245z/3eff1d11Op3O3vtb4/etCmpoVdQQLuUCNwQmAj+Bk8DHog4UBdb+acA2oJ2DPQHWAsfckCgbigAPAPYBfYD3wEagrr8VgevAIuBqDHIMcAdgJzAF+A4ctPcG4IUDtAa2A9P9+4QZtgJ4WsqAUsDyYpU/DYCLwHzL7e2cC3sAB4D+nnMZuwP4nLU/D3iqeyFv7wHLgdMxIQQme4Q6AQ+B1YCi8NfKAt4DLAbeAZs9r98iQZNt9YGVXnSK1m67b1l4Rxq4nh34AFz2dknyWBD3z/a2wClAaWgCfE3+pIGbW2W+AnZ5gYSAS4CxwBiPxmCv4t5WcO0BtZXyf9jBkrP7rdDmAC0skq/LAT5kOZtpF3f05xJQB7ji1V4b6Gu1oTDPBrRfKwq4mVuV5XEILMKYB4xLedcVuAncBbqngBXNN3kexwKrUhcAc4GjVrmfgpxMArrZ96YiwKVyHHrc0vu6qYf5gXup1lPoxd9JJ0SFOhb4EaDoVAIqrs5AF6CVe3keGGF0+qO6czzLKPROBjG0AY4Ao4BhwIUAuFpyfMtDrFw+TzW5hET5Hw6ciwWODfVC5/Bn3rcJMQw1L4dYr98ABhpzfanuUD8Gljovq3druddSLxHIOuBlkaqWvmqaUGVOCA7rjrCqVVzJEs2qZ3XufkqNEsrsaWzYuBRl6rK9BqhQit5kuaRObKRC6WfKI7nMlLrAGO2XJuu8ROIfQsqTxfFGh1sAMZF6U2Cy/qxNGCOrUAxJqkYjUatSIpWKksWQ1UYDMkLCIMVS377NAe7l0RrkTKapRMNAoUEgzylVqmYu9arkU0u9uxWY4d/H3cuyR580uEJ9xoHVu0pFI6PG9Z4KDXuqjWtVpOL375hhL7wna7xVHtcA8lRzdtQqCpxcqmKT5gpIbfbfB/oob2I2letxzN0l9/wC+q28H6my3A0AAAAASUVORK5CYII="/> </i>`;
    }

    if (dataBlogs[index].reactJs) {
      techIcon += ` <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1dJREFUSEvNlmmoTWEYhZ9rTBkyhH9IkqFkyJgkFCLJlCEyZgpFyPSDMqfMY4bMU8ZMfyghMv0givhlzBgSmb51W7u2fc9x2Ffd+9Xp3Hv2u9/1futd7/q+PIpo5RURLsUaeCawAHgBnAPWAjcSTLUCxgOdgerAbGDpn9jMteNOwAFAiX8CE0MB44DlwLxQUElgMTABWBNA1/m3q0Av4GI28FzA6wPYK2BuLEF94GDY4UugdCiiPNAPeBSLWQb5bZyWFlgAh4F9iQSVgOdh1z+AmsCHxPNRQDtgeFrgvcApYGciwXagClAKeAoIKL5EfZPwbExa4PlOPiuWYLp30gwoAdx2f1fGYvS3ClqSFniAhSQ11wMaA5WzJHsTen0XeAB0teCO/itwX2Ak0MKUajTOA5uARcDGRMKxVvtUoItF9Ra45ncKFJBUdS2LqQKwEFCPJTB9JKghQBuD1vH3YytYIBuAb2HOe4adD/ZHPiAP0Gb0nb/iwALTy9rNKitWMb09vw2d8HqgWz2c5ByKnRzMpa2LfuiiT/u5Zl266A+0Br4kgYcCPRwQZ1Kz+j5QeMk0NgrV30lQrd6rvxfcHrHzPRFzzNNxKAksGrW7PokXygDvgMu2xKbAzUSMFH7LOmhpXeTvLLaOuGV7MlEtq9tsKmUOWiOAYUDzkLiDfVovD/Rz6WCQaTwB3Ae2AttiVMvB1HPp41MSWP/XBqRAGYNmcH+g7mT4XYahMdLL6qVWe3/Lj6UV6WN36LfUrKLk1YqXB8jl1GPNdv7K5NX6TUGyO1FY1UWc9YmzxazEadThIbeSyHSwaIevg2YkRDEomn9buQ4JjYVG5IwNRMKSVWZaApLApGoZyGjbbcbgXMBzfL5Go6MkGg31VL2XDnb4syKGsDoAP/GRmQp4l8/UpFPJUMr6WJTiI6FFIKJdYlRxqYB1CVB/pNz4ktnoPNaqFik1FqApUK/lDamA5c0ajziN2qmuP3Wt/nt2tq8xBLVIBU1JC6xeqqeav88eER0YuhxEtxKNXXfHafTK2WBmhKk4nhY4muduVvMzX+quJBJ29JmsFnw0oOY3MqEC+LlUHb1QI9Bd0WftnzbRwHe0qP/ZYov3vTpr1YV58LdUFwYj1Tj9d8Ao4S/uUqwfrU3dbgAAAABJRU5ErkJggg=="/> </i>`;
    }

    if (dataBlogs[index].vueJs) {
      techIcon += ` <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAnNJREFUSEvtlk2Ij1EUxn/DSCkLi1nYMA1NkSZlwYKFGrNAU5pEUsZHSdn4VrKYWPhIWUlTPhKSZIONmZo0FmIh8p2Z7C0slAWK++heHaf3nfu+/v+aBaem5j33nOe597nnnPtvYZKsZZJ4+beJlwEnnPSbgYNAl/EfBUZd3ArgmPE9B04BV12csB7L56V+BCw1wbeAs8BD43sFLAJ+RJ8wXgALTcxyYA/QZ3wi/I3tiRcDT90uu4EdwEbj3wWcj9/6/5xZuw5cBIYdjrCfJV9RcV0C+k3SOLASeB3kmxH9n4C5QCswBsyK/i/AAmAE6DAY2sh2u5Ei4rZA/MGQKP5QTDppknUFIt5tfAfCXU91tfIZmAd8zBFrXQAqjmTpJENAZ3R+B6bEP7neAj1OGfn3A2ec7KV9PA1QEc03CTeBwYK7SyGqhZ3AepOja5D036oSK24NcNclqFr3hSJZ5/yqfhWbL6hVZRvNTa77gJKTvQl9uDrKOT1TUPeAtf6k6TtHLKkluaRPpvtXdQ9Ex5Eopa0JSSuJJXWh5YiVpMLY6wpNw0LTSwS+1RR6Ok68Mt5Kj8TMuHO1WbIbobo1KL4CW4P0G8ya2kbtozZqiFjJ24ALBYUmlx2n+tZGLk9EqrUqUqe4J8ASA/gy9rDuMtkf87gZJxaGBrwekYlMMb9en5xVPXHCuQZsKgG9AmzJEab1usSzgfdujgtLI7Xdz+NmSZ1w1LfHHehhwD4g2YPXPbEANbHehTd3TkQvncfNPrHwNKtvR+DeUO13skd0AX9z4gTxIA4QO8sr8zdCrN9dmlySvbY1QlybzCb8J25IvjrJPwGpvmYfQc0G8QAAAABJRU5ErkJggg=="/> </i>`;
    }

    if (dataBlogs[index].typeScript) {
      techIcon += ` <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAaVJREFUSEvt1z9rVEEUBfBfVFBBiY2YCKYwYARBLNIqsUslCAaLIGmSKggWVn4CESz8Atb+iYG0gRAVOxXsLCQgigpCCokgkgR9V+bB+Nhddtd9JsUOvGJm7pzDPXPmzrwBO9QGdojXriM+gdEeqbGGj1WsRhkv4nKPSEuYBUzlmFXiYXzuMWnA/cJRrJfYVeIJrNZAHJAX8bRPXCrQl7qXPuub6y81G5nrJ2630Pw45rCJW3iVxZ7FvdTvWOpvONKCeBwvcAnLlbhD2OiWeDsBx/o3uIG9WEmAh/Eh1fcYj8p3Ps09xNVuifMknhVlL7ZjX5K2nHuCK9iD1zjXQKGOpW6H+DtOF3v9qfDDAcwUF8J1nMkW10Ic+O+KbxovE1lcQHdws06pc1VC6tnkhxh/m9SoJeMfOJixf0Ecs2iP0/7XQhzmeoBriWwJ95PZIuNT/3ofN3N1HK1JbGVZ78ddzLezx0MImZq1KCZxlsM4FypBse453mMsZTiYxRzD17L/vx57j7JC8oe72bt6BCdbZN7JVNvP205Au47ddX8SXWfS7sLfsCZpH6gOb98AAAAASUVORK5CYII="/> </i>`;
    }

    console.log(techIcon);

    document.getElementById("contents").innerHTML += `
    <div class="blog-detail">
            <div class="detail">
              <img src="./assets/images/photo.jpg" alt="" />
              <div>
                <div class="top-decor">
                <a href="web.html">
                  <h3>${dataBlogs[index].projectName}</h3>
                </a>
                  <p> ${getBaseDate(dataBlogs[index].postAt)} WIB </p>

                  <p>
                  ${dataBlogs[index].deskripsi}
                  </p>
                </div>

                <div style="float:right">
                    <p style="color:grey;">${getDistanceTime(
                      dataBlogs[index].postAt
                    )}</p>
                </div>

                <div class="container-icon">

                ${techIcon}

                </div>

                <div class="button-blog">
                  <button class="button-edit">Edit</button>
                  <button class="button-delete">Delete</button>
                </div>


              </div>

            </div>

          </div>
    `;
  }
}

function getBaseDate(time) {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const year = time.getFullYear();
  const month = time.getMonth();
  const date = time.getDate();

  const hour = time.getHours();
  const minute = time.getMinutes();

  return `${date} ${monthNames[month]} ${year} - ${hour} : ${minute}`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;
  let distanceTime = timeNow - timePost;

  console.log(distanceTime);

  let milisecond = 1000; //detik
  let secondHour = 3600; //1 jam - 3600 detik
  let hourInDay = 24; //1 hari = 24 jam

  let distanceDay = Math.floor(
    distanceTime / (milisecond * secondHour * hourInDay)
  );
  let distanceHour = Math.floor(distanceTime / (milisecond * secondHour));
  let distanceMinute = Math.floor(distanceTime / (milisecond * 60));
  let distanceSecond = Math.floor(distanceTime / milisecond);

  console.log(distanceDay, distanceHour, distanceMinute, distanceSecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHour > 0) {
    return `${distanceHour} hours ago`;
  } else if (distanceMinute > 0) {
    return `${distanceMinute} minutes ago`;
  } else if (distanceSecond >= 0) {
    return `${distanceSecond} seconds ago`;
  }
}
