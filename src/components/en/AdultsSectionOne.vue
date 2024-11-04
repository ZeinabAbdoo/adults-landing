<template>
  <!--Section One Content-->
  <div class="adults-sec1">
    <div class="text-container">
      <h3>Invest in Your Future,</h3>
      <h1>Unlock Your Potential with English from Monglish.</h1>
      <h2>Where Excellence Becomes Reality</h2>
      <p>At Monglish, our English courses are specifically designed to meet your aspirations and needs. We provide you with an exceptional learning experience that guarantees impressive results and proficiency in the language!</p>
      <button @click="sendMessage">Join Us Now
              <i class="fab fa-whatsapp"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonglishSectionOne",
  methods : {
    async sendMessage() {
      try {
        const response = await fetch(`https://service.monglish.co.uk/api/get-phone-number`);
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        const data = await response.json();
        this.getNumber = data.phone_number;

        if (this.chatInput !== '' && this.getNumber) {
          const baseUrl = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
              ? 'whatsapp://send'
              : 'https://web.whatsapp.com/send';
          const url = `${baseUrl}?phone=${this.getNumber}&text=${this.chatInput}`;
          window.open(url, '_blank');
        }
      } catch (error) {
        console.error('Error fetching phone number:', error);
      }
    }
  }
};
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Lato');

.adults-sec1 {
  background-image: url('@/assets/images/adults/bg.jpg');
  background-size: cover;
  background-position: center;
  color: #FFF;
  text-align: left;
  padding: 1rem 4rem 4rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  margin-top: -85px;
  transform: scalex(-1);
  z-index: 1;
  position: relative;
}

.adults-sec1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.text-container {
  position: relative;
  z-index: 2;
  padding: 7rem 2rem 2rem 2rem;
  transform: scalex(-1);
  direction: ltr;
  padding-right: 50%;
}

.adults-sec1 h3,
.adults-sec1 h1,
.adults-sec1 h2,
.adults-sec1 p {
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Large desktop */
.adults-sec1 h3 {
  font-size: 30px;
  line-height: 35px;
}

.adults-sec1 h1 {
  font-size: 54px;
  line-height: 75px;
}

.adults-sec1 h2 {
  font-size: 42px;
  line-height: 45px;
}

.adults-sec1 p {
  font-size: 20px;
  line-height: 29px;
}

.adults-sec1 button {
  max-width: 50%;
  padding: 0.5rem 0.75rem 0.7rem 0.75rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}

.adults-sec1 button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}

/* Laptop view */
@media (max-width: 1440px) {
  .adults-sec1 {
    padding: 3rem 2rem;
  }

  .adults-sec1 h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .adults-sec1 h2 {
    font-size: 26px;
    line-height: 30px;
  }

  .adults-sec1 p {
    font-size: 18px;
    line-height: 26px;
  }

}

/* Tablet view */
@media (max-width: 1280px) {
  .adults-sec1 h1 {
    font-size: 38px;
    line-height: 50px;
  }

  .adults-sec1 h2 {
    font-size: 24px;
    line-height: 25px;
  }

  .adults-sec1 p {
    font-size: 18px;
    line-height: 25px;
  }
}


/* Mobile view */
@media (max-width: 768px) {
  .adults-sec1 {
    background-image: url('@/assets/images/adults/bg2.jpg');
    text-align: center;
    padding: 1rem;
  }

  .text-container {
    padding-right: 0%;
    padding-top: 90%;
  }

  .adults-sec1 h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .adults-sec1 h1 {
    font-size: 30px;
    line-height: 40px;
  }

  .adults-sec1 h2 {
    font-size: 24px;
    line-height: 32px;
  }

  .adults-sec1 p {
    font-size: 16px;
    line-height: 22px;
  }

  .adults-sec1 button {
    max-width: 80%;
  }
}

/* Small mobile view */
@media (max-width: 414px) {
  .adults-sec1 h1 {
    font-size: 24px;
    line-height: 36px;
  }

  .adults-sec1 h2 {
    font-size: 20px;
    line-height: 30px;
  }

  .adults-sec1 p {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
