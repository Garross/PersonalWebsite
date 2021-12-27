function validateRadio(){
    document.getElementById("newRatingForm").submit();
}
class StarRating extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
      <style>
              .rating {
          display: inline-block;
          position: relative;
          height: 25px;
          line-height: 25px;
          font-size: 25px;
        }
        
        .rating label {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          cursor: pointer;
        }
        
        .rating label:last-child {
          position: static;
        }
        
        .rating label:nth-child(1) {
          z-index: 5;
        }
        
        .rating label:nth-child(2) {
          z-index: 4;
        }
        
        .rating label:nth-child(3) {
          z-index: 3;
        }
        
        .rating label:nth-child(4) {
          z-index: 2;
        }
        
        .rating label:nth-child(5) {
          z-index: 1;
        }
        
        .rating label input {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
        
        .rating label .icon {
          float: left;
          color: transparent;
        }
        
        .rating label:last-child .icon {
          color: #000;
          opacity: 0.9;
 
        }
        
        .rating:not(:hover) label input:checked ~ .icon,
        .rating:hover label:hover input ~ .icon {
          color: #FFD700;
          opacity: 0.9;
        }
        
        .rating label input:focus:not(:checked) ~ .icon:last-child {
          color: #000;
          text-shadow: 0 0 5px #FFD700;
          opacity: 0.9;
        }
      </style>
      
      
      <form class="rating" id="newRatingForm" action="https://garry-tiscovschi-backend.herokuapp.com/newRating"
          method="POST" target="dummyframe">
          <input type="hidden" name="ratingName" value="Design" />
          <label>
            <input type="radio" name="ratingScore" value="1" onClick="validateRadio();"/>
            <span class="icon">★</span>
          </label>
          <label>
            <input type="radio" name="ratingScore" value="2" onClick="validateRadio()";/>
            <span class="icon">★</span>
            <span class="icon">★</span>
          </label>
          <label>
            <input type="radio" name="ratingScore" value="3" onClick="validateRadio();"/>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>   
          </label>
          <label>
            <input type="radio" name="ratingScore" value="4" onClick="validateRadio();"/>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
          </label>
          <label>
            <input type="radio" name="ratingScore" value="5" onClick="validateRadio();"/>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
            <span class="icon">★</span>
          </label>
      </form>
      <!--                 Dummyframe here to avoid redirects. Quicker than using ajax -->
    <iframe style ="display:none" width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
    `;
    }
}

customElements.define('star-rating', StarRating);