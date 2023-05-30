const template = document.createElement('template');

template.innerHTML = `
<style>
    .recommendation {
    // background: rgb(145, 226, 188); 
    height: auto;
    width: 370px;
    border-radius: 15px;
    margin: auto;
    padding: 10px;
    margin-top: 30px;
    // box-shadow: 5px 5px 5px rgb(145, 226, 188); 
    align-items: center;
    }

    // .recommendation__items {
    // align-items: center;
    // justify-content: space-evenly;
    // width: 350px;
    // padding: 10px;
    // align-items: center;
    // }

    // .ul li{
    //   justify-content: space-evenly;
    //   padding: 10px;
    // }

    // .recommendation__items img {
    // height: 250px;
    // width: 250px;
    // border-radius: 5px;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 15px;
    // }

    .recommendation__items h5 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 23px;
    font-weight: bold;
    }

    .recommendation__items table {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 20px;
      // font-weight: bold;
      }

    // .recommendation__items p {
    // font-family: Verdana, Geneva, Tahoma, sans-serif;
    // font-size: 14px;
    // }

    .recommendation__button {
    text-align: center;
    padding: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    }

    .recommendation__button button {
    color: rgb(0, 0, 0);
    /* background: green; */
    font-weight: bold;
    }

    // .recommendation__items {
    // display: none;
    // }
</style>

  <div id="carousel" class="recommendation">
      
    <div class="recommendation__button">
    <button id="prev">PREV</button>

    <button id="next">NEXT</button>
    </div>
  </div>
`;

const recommendationCardTemplate = document.createElement('template');

recommendationCardTemplate.innerHTML = `
<style>
    .recommendation {
    // background: rgb(145, 226, 188); 
    height: auto;
    width: 370px;
    border-radius: 15px;
    margin: auto;
    padding: 10px;
    margin-top: 30px;
    // box-shadow: 5px 5px 5px rgb(145, 226, 188); 
    align-items: center;
    }

    .recommendation__items {
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    padding: 10px;
    align-items: center;
    }

    // .ul li{
    //   justify-content: space-evenly;
    //   padding: 10px;
    // }

    // .recommendation__items img {
    // height: 250px;
    // width: 250px;
    // border-radius: 5px;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 15px;
    // }

    .recommendation__items h5 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 23px;
    font-weight: bold;
    }

    .recommendation__items table {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 20px;
      // font-weight: bold;
      }

    // .recommendation__items p {
    // font-family: Verdana, Geneva, Tahoma, sans-serif;
    // font-size: 14px;
    // }

    .recommendation__button {
    text-align: center;
    padding: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    }

    .recommendation__button button {
    color: rgb(0, 0, 0);
    /* background: green; */
    font-weight: bold;
    }

    // .recommendation__items {
    // display: none;
    // }
</style>

      <div class="recommendation__items" id="recommendation__items">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://randomuser.me/api/portraits/men/11.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Torque</th>
                  <td id="Torque"></td>
                </tr>
                <tr>
                  <th scope="row">Speed</th>
                  <td id="Speed"></td>
                </tr>
                <tr>
                  <th scope="row">Power</th>
                  <td id="Power"></td>
                </tr>
              </tbody>
            </table>
            <a class="btn btn-primary" href="#" role="button">Purchase Link</a>
          </div>
        </div>
      </div>
`;

class Carousel extends HTMLElement {
  constructor() {
    super();

    const linkElement = document.createElement('link');
    linkElement.setAttribute(
      'href',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
    );
    linkElement.setAttribute('rel', 'stylesheet');

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(linkElement);

    // this.shadowRoot.querySelector('h5').innerText = this.getAttribute('name');
    // this.shadowRoot.querySelector('img').src = this.getAttribute('motor-img');
  }

  connectedCallback() {
    this.data = JSON.parse(this.getAttribute('data'));

    this.createRecommendationCards(this.data.length);

    this.rev = 0;
    this.carousel(this.rev);

    this.shadowRoot
      .querySelector('#next')
      .addEventListener('click', () => this.nextrecommendation());

    this.shadowRoot
      .querySelector('#prev')
      .addEventListener('click', () => this.previousrecommendation());
  }

  // createdCallback() {
  //   this.data = this.getAttribute('data');
  //   console.log(this);
  // }

  carousel(recommendation) {
    let recommendations = this.shadowRoot.querySelectorAll(
      '#recommendation__items'
    );
    // console.log(recommendations);

    if (recommendation >= recommendations.length) {
      recommendation = 0;
      this.rev = 0;
    }
    if (recommendation < 0) {
      recommendation = recommendations.length - 1;
      this.rev = recommendations.length - 1;
    }
    for (let i = 0; i < recommendations.length; i++) {
      recommendations[i].style.display = 'none';
    }
    recommendations[recommendation].style.display = 'block';
  }

  previousrecommendation() {
    this.rev = this.rev - 1;
    this.carousel(this.rev);
  }

  nextrecommendation() {
    this.rev = this.rev + 1;
    this.carousel(this.rev);
  }

  createRecommendationCards(numberOfCards) {
    const carousel = this.shadowRoot.querySelector('#carousel');
    for (let i = 0; i < numberOfCards; i++) {
      this.dataForCard = this.data[i];
      const card = recommendationCardTemplate.content.cloneNode(true);
      card.querySelector('h5').innerText = this.dataForCard.Name;
      card.querySelector('#Power').innerText = this.dataForCard.MaxMotorPower;
      card.querySelector('#Torque').innerText = this.dataForCard.MaxMotorTorque;
      card.querySelector('#Speed').innerText = this.dataForCard.MaxMotorSpeed;
      carousel.insertBefore(card, carousel.children[0]);

      // carousel.appendChild(card);
    }
  }
}

// const slotContent = {
//   Name: 'Cascadia ABC123',
//   Torque: '100 Nm',
//   Speed: '5000 RPM',
//   Power: '50 kW',
// };

// createRecommendationCards(3, slotContent); // Creates 3 recommendation cards with the provided slot content

window.customElements.define('carousel-component', Carousel);
