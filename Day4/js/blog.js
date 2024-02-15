let dataBlogs = [];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project-name").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;
  let deskripsi = document.getElementById("deskripsi").value;
  let uploadImage = document.getElementById("image-upload").value;
  let nodeJs = document.getElementById("node-js").value;
  let nextJs = document.getElementById("next-js").value;
  let reactJs = document.getElementById("react-js").value;
  let typeScript = document.getElementById("type-script").value;

  let dataBlog = {
    projectName,
    startDate,
    endDate,
    deskripsi,
    uploadImage,
    nodeJs,
    nextJs,
    reactJs,
    typeScript,
  };

  console.log(dataBlog);

  dataBlogs.push(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlogs.length; index++) {
    document.getElementById("contents").innerHTML += `
      <div class="halaman">
        <div class="section-left">
          <h2>${dataBlogs[index].projectName}</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quas ullam atque debitis non eum quaerat, nulla, fugit ipsum rerum
            minima eos obcaecati ad doloremque magnam deserunt dolor maxime
            veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo blanditiis vel ullam veritatis ratione nam, in
            reiciendis non deserunt eos sint architecto voluptatem dolore!
            Minus dolores molestias explicabo cumque quam? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Odio ut tempore fuga
            blanditiis consequatur possimus, nobis alias quod dolores harum
            facilis dolorem, sed perspiciatis accusantium cum. Accusantium
            tempore veniam in!
          </p>

          <div class="contact2">
            <a href="">
              <h3>Contact</h3>
            </a>

            <div class="cv">
              <a href=""
                >download CV
                <svg
                  style="padding-left: 10px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: rgba(0, 0, 0, 1); transform: msfilter"
                >
                  <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                  <path
                    d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div class="icon">
            <a href="" style="text-decoration: none">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAftJREFUSEvt1rFrFEEUBvDvO2/nZuaQ5AQbwUIljaWCWsSggpWlnSAIFhFFSKEoiEQsRLQwhah/gGCnjY2oKNoJBjsLo5WxVIPJzuxtbp+uGJld9RRulwjJlm9m5zfv7TxmiWV6uEwu/i+469wRkuul13us2u3pOqryS8apc88FGF3CBDjcMuZ21XgB7no/DpFbBYR8rbTeWiucODf5bScXSsi8MmZtrXDq3G4BnoWIiNxpWXuoVjhfvLuwcAyNxlkAG0TknjLmKMn52uGqgT+tV2kfy9zcujSKRhaBWWvt+35JFGDn3KY1wLvCCyI3lLUn8lgax6eEvBqOR953EmPGGsAkRLYFY19IPmgmyTiHhj6WNzEwDHICIlN9spuJkmQHh4c/hXMGhwEPQP+lrOciYy5VDefrZQDeAvgAYAwo3QHktNJ6e9WwR5aNqnb75fdz4NweAR4CaAZQFmltSSZLscFLLXJdWXsyzCZx7j6BA2EsI0e01jOVwSJysGXt3RDpen8NIhOl7tiprH1RGUxyf6T1oxBJnTsvwMXSN90bGfP0t7D3fnNDJD8k4XNTGXP8Rx+fFvJKacF9kTFPCnAcnxHy8iq8WuqfZ2DlHS4R0Yve7wrboEfOaq3f5LE4jjdG5JZwvOn9K3Y6n8PYv8yr9Eeg3w1VHlt58FfSQ3AuLdzsQgAAAABJRU5ErkJggg=="
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABCxJREFUSEvNll+IFVUcx7+/uXNm5nfuJgVFW2pF9IcCM1d7UdakenNjQ4KCyEqwh97WokBKMpGCknwJeqi2DAIfzDDXlwLJBCN3VwkjiXyItAgEY7v3nNmZO/Orc727jffO3bvbyzowT+ec3+ec7/n9vudHWKSPFomLqxss9fpNDc+7A0Clh0KZn+e/ULX6Ry8lu55YarX+tFJ5G8BGANf1CtQ2fgnAmMrzl7ttohTciOONuch+ANVWwDqAUwCyHhsIAAwACFvzah7RE34UHWlf1wEWEZ3E8TkC+gGMQuR9xTxBRL2gzdgi4jfieFCAnQAGCfjdj6I7icgU4R3gaWt3ErADwP6A+ckFSoyGtU8DIJ95X2LtUQAb3CZC5tfnBKfWnhdgqcqyfurr+3MhYAfNgX2tNc+hUjmFLDtNwAXFvKwruJVQLiPPBsz3lEGNMUt9zxuGyFqnLIhOqCw76JKoYe3mHPiktW5LwDyaWPs3gD6VpjfQkiUXZ2JeIXVSrw/A8yYAHA+YB9vBSRw/D5F3AFzTNjYFYCRg/iix9lknNfL8TFCtnkysPQfgdvG8FWEYnikFp9a6pDgmwFjIPFQMnhrzohA56JQAe+F5k8gyBaL7CBhxp4LISKD13uK6xNofAKwgkbVK6xPl4Dh+RES+IqKDKoo2zUxK6vVV8LyTAC42RFZrrS8UgxtjbvGJJp0S4nkDYRj+OLvWmNMgWkkig0rr473AB1QUPT4zadraNwh4DSLbAq3fLbv71JhXhOgtAl5VzLtnwXE8CZFVBKxXzN92k/phAb5uP/G0MV8S0ZBHNORH0VgZeNqYTUR0wP3FTSdxPAGRAQI2KOZvuoFdzR0VkcOh1o/OTEqN+UKIhnOi4SiKDi0IbK27ojUEPKSYXV03vyuyOrW2CSaRQ0rr4VmwtTucCZDIS0rrPaVSW7tdgN0EbFfMbxakHofIagIeVMzHFnRiY8xyn+gsANMQub89uay1t1Yue7mv8vzu4sOQzCu5jFknRMfLyimJ4xcg8h6AWqucxpFlQTNjL5eTBrA1YP6grZxcht+LPH8gqFbHuxmIKxtXFuUGYu3Wf0vGSV1mINsC5g87TOc/A1kZhqGr6c47NsYs84l+A/BrwHxb2V22LPMxiKxrPpNE36ks+7zs3RURL41j9yqFDZHlWuvzpWARqaRx/FfTW/P85vl0EmWbKxjPmpbx1FQUXVt8WjuexcRaJ9cWAJ8FzE/NFbjXWGKty2Ln+aMBs4s5+3U2AlNT16dK/ezaHQGOkMguxfw9EeW9QG680AjsAuCu45JK07uKL1NHHc9KZO0zAD4ugP5v6+NCbA6YP23fdNdmL7V2vfNmIXIO5s3ntIU5OYkcBtGeomnMKXU7QGq1GxuVSmlT0G0zfpb91Kt7ubob+gXKPK/pi3bifwCmyOYuqBG0zAAAAABJRU5ErkJggg=="
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATRJREFUSEvt1E1KA0EQBeBXM0w7BS7dBA8gghtvEMELuHWjm+gh3HsDJYqgO2/gTtQjuFDwAqLZCEqmxp6YEkGlCYSZDknHn+ltF/V1PZoiTOnQlFz8TlhV4yLLlimKZrXff+kRdZj5gYiKsiRHnvg1y9ZAtEdAYwC5McxLE4GtyCaA4yHNJwOralLk+T2AuaBwIdJU4GIAvQPRmao+E1HHpOn+2KO2IhsATpzGj0mazhPRWxnm3nt/LpvnW1A9cJpcGeamD/pROwq8DdW2A10a5pW/BVuRWwCLFac6NczrZbWVovaBFdidYd4JDgNoGeaj4DABqwnz+Vhgt4kVaQE4DP+raxgItEDqqOuoyzbH532lXf0jFoh2u41eFC18PUbj+MkYc11x0O8y74l9gWH1/w9+B33RlR8WCvCiAAAAAElFTkSuQmCC"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAqFJREFUSEvtlj1oFFEUhc+ZzEzeS0I0CipoFAURQbRQm/iDRhQJWIhBLASDYCFEESJYBC0sFAQRFcXWRuMfqURsBLUQ0UYstVEQEdIsMTtvZ8wemZhIEmZ3Nruija8ZmHfv+e697859Q/yjxX/ExX/wX6t8w6WWNC9x7iaALgCdAJyAK6ExF0kW00z0/fvi9Mm2tm9Tmc0AS2pJnLsVGHOU5I+89IvF4lKffAlg5WxbAl/K5F1I6wi0h9ZumW4zA1wqFg+QfEhy2G9uPpgHL0XRYwI9OQF+KJN7m6TOwNrnmRnHzp2AdG1y83WZPGyM+ZglHI+NbYLnvcmrCoBPAJZ45H7fmCeZ4CSKtgv4HRWAEqVzvrXXSUbTIbFzJyFdrQE8QvJwYMzTiqWWZBLnRgH4swTTJnlE8o4/Pv6Ora1fkyg6K+B8HljkpWZjzmT0wMxXsXPHIaVdWnlJBZAFAMvzwAQGA2svVAXHUdQHcj2kDQC680Rr3O8Lrb1dFZw4t0fSjLOoUbyiGaWuoKXlVVWwJD9xLu3iFY0CJ/ylQmBtB0nlnnESRdsEDANY+Afg90JrD2XpZI7MiYnkeQOQjgFoqzcAAjumD42Kn9PURuxcP6ReABsbAL8Nrd1cKejMjEul0lqWy+8BNDWQ7a7A2mdzAqfGzrl9njQEoGXOcPJyaMzpan5Vr0WNji6Kfb+fwE4AW2sM4EVgzG6Scf1gqT12boDAKQDtNYCHAmOO5EFTnd8Zq1BY8CMMNwjoFLDGI9dISqdXRy4wHaGeNxgacyPXdtJg9n3cSzKdq6trFEgA3A/Gxwem/13U4pt5xkkUdYvsIbBS0jIAqwDMFzBCYETAZwLDgTEP+OuymPNq+J9rzsSsUtcrUo/f/4zrqVpdPj8Ba+jjH8ptNQEAAAAASUVORK5CYII="
              />
            </a>
          </div>
        </div>
        <div class="section-right">
          <div class="card">
            <img src="./assets/images/photo.jpg" alt="" />

            <div class="body-card">
              <h2 class="text-center">Rhoma Irama</h2>
              <span class="text-center">Fullstack Developer</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
