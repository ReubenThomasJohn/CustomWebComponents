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

    this.slotContent = {
      Name: 'Cascadia ABC123',
      Torque: '100 Nm',
      Speed: '5000 RPM',
      Power: '50 kW',
    };
    const carousel = this.shadowRoot.querySelector('#carousel');
    const card = document.createElement('recommendation-card');
    carousel.appendChild(card);
    // this.shadowRoot.querySelector('h5').innerText = this.getAttribute('name');
    // this.shadowRoot.querySelector('img').src = this.getAttribute('motor-img');
  }
}

window.customElements.define('carousel-component', Carousel);
